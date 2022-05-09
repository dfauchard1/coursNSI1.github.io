var debug_mode = false;
var dict = {};  // Global dictionnary tracking the number of clicks
var tagHdr = "#--- HDR ---#";

function sleep(s){
    return new Promise(resolve => setTimeout(resolve, s));
  }
  
async function main() {
    await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });
}

let pyodideReadyPromise = main();

async function pyterm(id, height) {
await pyodideReadyPromise;
let namespace = pyodide.globals.get("dict")();

// creates the console
// the variable pyconsole is created here.
pyodide.runPython(`
    import sys
    import js
    from pyodide import console
    import __main__

    class PyConsole(console._InteractiveConsole):
        def __init__(self):
            super().__init__(
                __main__.__dict__,
                persistent_stream_redirection=False,
            )

        def banner(self):
            return f"Welcome to the Pyodide terminal emulator 🐍\\n{super().banner()}"

    
    js.pyconsole = PyConsole()
`, namespace);
namespace.destroy();


let ps1 = '>>> ', ps2 = '... ';

async function lock(){
    let resolve;
    let ready = term.ready;
    term.ready = new Promise(res => resolve = res);
    await ready;
    return resolve;
}

async function interpreter(command) {  /// reads the commands
    let unlock = await lock();
    try {
    term.pause();
    // multiline should be splitted (useful when pasting)
    for( const c of command.split('\n') ) {
        let run_complete = pyconsole.run_complete;   // trying to run the commands
        try {
            const incomplete = pyconsole.push(c);    // wait for completion of a Python command
            term.set_prompt(incomplete ? ps2 : ps1); // set the prompt line
            let r = await run_complete;
            if(pyodide.isPyProxy(r)){
            r.destroy();
            }
        } catch(e){   // the completion of the Python command triggered an error (wrong Python syntax)
            if(e.name !== "PythonError"){
            term.error(e);
            throw e;
            }
        }
        run_complete.destroy();
    }
    } finally {
    term.resume();
    await sleep(10);
    unlock();
    }
}

let term = $(id).terminal(   // creates terminal
    interpreter,      // how to read the input
    {
    greetings: '',    // pyconsole.banner(),
    prompt: ps1,
    completionEscape: false,
    height: height,  // if not specified, css says 200
    completion: function(command, callback) {     // autocompletion
        callback(pyconsole.complete(command).toJs()[0]);
    }
    }
);

window.term = term;
pyconsole.stdout_callback = s => $.terminal.active().echo(s, {newline : false});   // this is thie line to change
    pyconsole.stderr_callback = s => {
        $.terminal.active().error(s.trimEnd());
    }


term.ready = Promise.resolve();
pyodide._module.on_fatal = async (e) => {
    term.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers.");
    term.error("The cause of the fatal error was:");
    term.error(e);
    term.error("Look in the browser console for more details.");
    await term.ready;
    term.pause();
    await sleep(15);
    term.pause();
};
}

function removeLines(data, moduleName) {
    return data
      .split('\n')
      .filter(sentence => !(sentence.includes("import " + moduleName) || sentence.includes("from " + moduleName)))
      .join('\n');
}

async function foreignModulesFromImports(code, moduleDict = {}, id_editor = 0) {
    await pyodideReadyPromise;
    pyodide.runPython(`from pyodide import find_imports\nimported_modules = find_imports(${JSON.stringify(code)})`)
    const importedModules = pyodide.globals.get('imported_modules').toJs();
    var executedCode = code
    
    for (var moduleName in moduleDict) {
        var moduleFakeName = moduleDict[moduleName];
      
        if (importedModules.includes(moduleName)) {
            // number of characters before the first occurrence of the module name, presumably the import clause
            var indexModule = executedCode.indexOf(moduleName); 
            // substring to count the number of newlines
            var tempString = executedCode.substring(0, indexModule); 
            // counting the newlines
            var lineNumber = tempString.split('\n').length;
            
            let importLine = executedCode.split('\n')[lineNumber-1]; // getting the import line, now the business starts.

            // taking into consideration the various import options
            // Idea : change the import turtle of a user into import pyo_js_turtle
            // import turtle as tl	>	import js-turtle as tl
            // import turtle		>	import js-turtle as turtle
            // from turtle import *	>	from js-turtle import *
            if (importLine.includes('import ' + moduleName) && !importLine.includes('as')) {
                importLine = importLine.replace(moduleName, moduleFakeName + ' as ' + moduleName)
            } else {
                importLine = importLine.replace(moduleName, moduleFakeName)
            }
            if (moduleName.includes('turtle')) {
                showGUI(id_editor)
//                document.getElementById("gui_"+id_editor).focus();
            }

            executedCode = `import micropip\nawait micropip.install("${moduleFakeName}")\n${importLine}\n` + executedCode
        }
        if (debug_mode) {console.log(executedCode)}
        executedCode = removeLines(executedCode, moduleName)
        if (debug_mode) {console.log(executedCode)}
    };
    return executedCode
}

function countParenthesis(string, char = '(') {
    if (char == '(') {endChar = ')'}
    if (char == '[') {endChar = ']'}
    var count = 0;
    for (let letter of string) {
        if (letter == char) {
            count++;
        } else if (letter == endChar) {
            count--;
        }
    }
    return count
}

function generateAssertionLog(errLineLog, code){
    var codeTable = code.split("\n");  // get assertion test
    errLineLog -= 1;
    var endErrLineLog = errLineLog;
    var countPar = 0;
    do { // multilines assertions
        countPar += countParenthesis(codeTable[endErrLineLog]);
        endErrLineLog++;
    } while (countPar !== 0)
    return `${codeTable.slice(errLineLog, endErrLineLog).join(" ").replace("assert ", "")}`
}

function generateErrLog(errTypeLog, errLineLog, code, src = 0){
    let dictErrType = 
    {"AssertionError" : "Erreur avec les tests publics",
     "SyntaxError" : "Erreur de syntaxe",
     "ModuleNotFoundError" : "Erreur de chargement de module",
     "IndexError" : "Erreur d'indice",
     "KeyError" : "Erreur de clé",
     "IndentationError" : "Erreur d'indentation",
     "TypeError" : "Erreur de type",
     "NameError" : "Erreur de nommage",
     "IndentationError" : "Erreur d'indentation",
     "ZeroDivisionError" : "Division par zéro",
    }
    // Ellipsis is triggered when ... are used
    errTypeLog = errTypeLog + (errTypeLog.includes('Ellipsis') ? " (issue with the dots ...)" : "");
    for (errType in dictErrType) {
        if (errTypeLog.includes(errType)) {
            if (errType != "AssertionError") { // All Exceptions but assertions
                return ` Python a renvoyé une '${dictErrType[errType]}' à la ligne ${errLineLog}\n ---\n ${errTypeLog}`
            } else {
                if (errTypeLog !== "AssertionError") { // case : no Assertion description 
                    return ` Python a renvoyé une '${dictErrType[errType]}' à la ligne ${errLineLog}\n ---\n ${errTypeLog}`
                } else {
                    errTypeLog = `${errTypeLog} : test '${generateAssertionLog(errLineLog, code)}' failed`
                    return ` Python a renvoyé une '${dictErrType[errType]}' à la ligne ${errLineLog + src}\n ---\n ${errTypeLog}`
                }
            }
        }
    }
}

function generateLog(err, code, src = 0){
    err = String(err).split("\n")
    let p = -2
    var lastLogs = err.slice(p, -1)
    // catching relevant Exception logs
    while (!lastLogs[0].includes("line")) {
        lastLogs = err.slice(p, -1);
        p--;
    }
    var errLineLog = lastLogs[0].split(',');
    // catching line number of Exception
    let i = 0;
    while (!errLineLog[i].includes("line")) {
        i++;
    }
    // When <exec> appears, an extra line is executed on Pyodide side (correct for it with -1)
    let shift = errLineLog[0].includes("<exec>") ? -1 : 0;
    errLineLog = Number(errLineLog[i].slice(5 + errLineLog[i].indexOf("line"))) + shift + src; // get line number

    // catching multiline Exception logs (without line number)
    var errTypeLog = lastLogs[1];
    p = 2;
    while (p < lastLogs.length) {
        errTypeLog = errTypeLog + '\n' + " " + lastLogs[p];
        p++;
    }
    return generateErrLog(errTypeLog, errLineLog, code, src)
}

async function evaluatePythonFromACE(code, id_editor, mode) {
    await pyodideReadyPromise;

    $.terminal.active().clear();   
    pyodide.runPython(`
      import sys as __sys__
      import io as __io__
      __sys__.stdout = __io__.StringIO()
    `);
    // let ideClasseDiv = document.getElementById("term_"+id_editor).parentElement.parentElement;
    // let evalDisabled = (ideClasseDiv.dataset.eval == "False" ? true : false);

    // if (evalDisabled) {
    // pyodide.runPython(`
    // del locals()['__builtins__'].eval
    // `) 
    // }

    // TODO WARNING memory leak : globals() should be cleaned. Code below is too aggressive !!  
    // pyodide.runPython(`
    // variable = 0
    // for variable in list(globals()):
    //     if variable[0:2] != "__":
    //         print('variable globale', globals()[variable])
    //         del globals()[variable]
    // `)
    // console.log(pyodide.globals.dict())

    // resize terminal to the size of editor on interpreting
    if (mode === "v") {
        if (debug_mode) {console.log(187, id_editor )}
        $.terminal.active().resize($.terminal.active().width(), document.getElementById(id_editor).style.height);
    }

    // Strategy : code delimited in 2 blocks
    // Block 1 : code
    // Block 2 : asserts
    console.log('blam')
    let splitCode = code.replace(/#(\s*)Tests/i, "#tests").split("#tests")  // normalisation
    var mainCode = splitCode[0];
    let lineShift = mainCode.split('\n').length
    var assertionCode = splitCode[1];
    
    $.terminal.active().echo(">>> Script exécuté : \n------"); 

    try 
    {
        if (debug_mode) {console.log(code)}
        // foreignModulesFromImports kinda run the code once to detect the imports (that's shit, thanks pyodide)
        mainCode = await foreignModulesFromImports(mainCode, {'turtle': "pyo_js_turtle"}, id_editor)

        await pyodide.runPythonAsync("from __future__ import annotations\n" + mainCode);    // Running the code
        var stdout = pyodide.runPython("__sys__.stdout.getvalue()")  // Catching and redirecting the output
        if (stdout !== "") {$.terminal.active().echo(" " + stdout);}

        if (typeof assertionCode !== "undefined") {
            await pyodide.runPythonAsync("from __future__ import annotations\n" + assertionCode);    // Running the assertions
            var stdout = pyodide.runPython("__sys__.stdout.getvalue()")  // Catching and redirecting the output
            $.terminal.active().echo(" " + stdout + "\n------\n");
        }

    } 
    catch(err) 
    {
        console.log('top', err)
        console.log(code)
        // generateLog does the work
        $.terminal.active().echo(generateLog(err, code, lineShift - 1) + "\n------\n");            
    }

    
  }


async function evaluateHdrFile(id_editor) {
    // Evaluate header code (to avoid loooooong code with classes or SQL)
    let url_pyfile = $('#content_' + id_editor).text()
    if (url_pyfile.includes(tagHdr)) {
        splitHdrPyFile = url_pyfile.match(new RegExp(tagHdr + "(.*)" + tagHdr));
        if (splitHdrPyFile !== null) {
            hdrFile = splitHdrPyFile[1].replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*");
            pyodide.runPython(hdrFile);
        }
}}

async function silent_interpretACE(id_editor) {
    let ideClasseDiv = document.getElementById("term_"+id_editor).parentElement.parentElement;
    let evalDisabled = (ideClasseDiv.dataset.eval == "False" ? true : false);
    pyodide.runPython(`
    def dummy_eval(src):
        print("""L'appel à eval est interdit :""")
        print("""eval("instruction") renvoie "instruction".""")
        return src
    `)

    window.console_ready = await pyterm('#term_'+id_editor, 150);
    $('#term_'+id_editor).terminal().focus(true);   // gives the focus to the corresponding terminal
    var editor = ace.edit(id_editor);
    let stream = await editor.getSession().getValue();
    if (stream.includes("eval(") && evalDisabled) {
        stream = stream.replace(/eval\(/g, "dummy_eval(")
    }
    return stream
}

async function interpretACE(id_editor, mode) {
    // refactoring with silent_interpretACE...
    // await pyodideReadyPromise;
    let interpret_code = silent_interpretACE(id_editor)

    let stream = await interpret_code;
    console.log("hello moon")
    evaluateHdrFile(id_editor)
    console.log("hello moon 2")
    calcTermSize(stream, mode)
    console.log("hello moon 3")
    evaluatePythonFromACE(stream, id_editor, mode);
    console.log("hello moon 4")
}

async function start_term(nom_id) {
    document.getElementById(nom_id).className = "terminal terminal_f";
    document.getElementById('fake_'+nom_id).className = "hide";
    window.console_ready = pyterm('#'+nom_id);
    }

function download_file(id_editor, nom_script) {
    var editor = ace.edit(id_editor);
    let data = editor.getValue();
    let splitDate = new Date().toISOString().split('T')
    let date = splitDate[0] + '-' + splitDate[1].split('.')[0].replace(/:/g, "-"); 
    var script2download = 'script_' + date + '.py';
    if (nom_script !== '') {
        script2download = nom_script+'.py';
    }

    let link = document.createElement('a');
    link.download = script2download;
    let blob = new Blob(['' + data + ''], {
        type: 'text/plain'
    });
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}

function calcTermSize(text, mode) {
    let nlines = (mode === 'v' ? Math.max(text.split(/\r\n|\r|\n/).length, 6) : Math.max(5,Math.min(10, text.split(/\r\n|\r|\n/).length)))
    $.terminal.active().resize($.terminal.active().width(), nlines*30);
    return nlines
  }

function executeTest(id_editor, mode) {    
    executeTestAsync(id_editor, mode)
}

function getWrapperElement(filetype, id_editor) {
    if (document.getElementById(filetype + id_editor) === null) {
        let wrapperElement = document.getElementById(id_editor);  /* going up the DOM to IDE+buttons */ 
        while (wrapperElement.className !== "ide_classe") {
            wrapperElement = wrapperElement.parentNode
        }
    return wrapperElement;
}}

function showGUI(id_editor) {
    let wrapperElement = getWrapperElement("gui_", id_editor);
    var txt = document.createElement("div");
    // txt.innerHTML='<details class="check"><summary>Fenêtre graphique</summary>\
    // <div class="highlight" id="gui_'+id_editor+'"></div></details>'
    txt.innerHTML='<details open class="check"><summary>Fenêtre graphique</summary><div class = "can_wrapper"><div id = "gui_'+id_editor+'"><canvas id = "gui_'+id_editor+'_tracer" width="700" height="400"></canvas><canvas id="gui_'+id_editor+'_pointer" width="700" height="400"></canvas></div></div></details>'

    wrapperElement.insertAdjacentElement('afterend', txt)
}

function showCorrection(id_editor) {
    let wrapperElement = getWrapperElement("gui_", id_editor);

    var txt = document.createElement("div");
    txt.setAttribute("id", "solution_" + id_editor);
    txt.innerHTML='<details class="check"><summary>Solution</summary>\
    <div class="highlight" id="corr_'+id_editor+'"></div></details>'

    let url_pyfile = document.getElementById("corr_content_"+id_editor).textContent


    function createACE(id_editor){
        let paletteElement = document.querySelector('label[for="__palette_2"]')
        if (paletteElement.previousElementSibling.dataset.mdColorMedia === "(prefers-color-scheme: dark)") {
            var defineTheme = paletteElement.hidden ? "ace/theme/crimson_editor" : 'ace/theme/tomorrow_night_bright'
        } else {
            var defineTheme = paletteElement.hidden ? 'ace/theme/tomorrow_night_bright' : "ace/theme/crimson_editor"
        }
        var editor = ace.edit(id_editor, {
            theme: defineTheme,
            mode: "ace/mode/python",
            autoScrollEditorIntoView: true,
            maxLines: 30,
            minLines: 6,
            tabSize: 4,
            readOnly: true,
            printMargin: false   // hide ugly margins...
        });
        // Decode the backslashes into newlines for ACE editor from admonitions 
        // (<div> autocloses in an admonition) 
        editor.getSession().setValue(url_pyfile.replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*"))
    }
    wrapperElement.insertAdjacentElement('afterend', txt)
    window.IDE_ready = createACE('corr_'+id_editor)           // Creating Ace Editor #id_editor

    // revealing the remark from Element
    var remElement = document.getElementById("rem_content_" + id_editor)
    remElement.style.display = "block";
    
    var fragment = document.createDocumentFragment();
    fragment.appendChild(remElement);
    document.getElementById("solution_" + id_editor).firstChild.appendChild(fragment);

}

async function executeTestAsync(id_editor, mode) {
    await pyodideReadyPromise;
    let interpret_code = silent_interpretACE("editor_"+id_editor, "")

    var code = await interpret_code;
    $.terminal.active().clear();

    try 
    {
        let executed_code = await foreignModulesFromImports(code, {'turtle': "pyo_js_turtle"}, "editor_" + id_editor)
        await pyodide.runPythonAsync("from __future__ import annotations\n" + executed_code);    // Running the code
        // pyodide.runPython("from __future__ import annotations\n"+code);    // Running the student code (no output)

        let test_code = document.getElementById("test_term_editor_"+id_editor)
            .textContent.replace(/bksl-nl/g, "\n").replace(/py-und/g, "_").replace(/py-str/g, "*");

        if (test_code.includes("benchmark")) {
        pyodide.runPython(`
        import sys as __sys__
        import io as __io__
        import js
        __sys__.stdout = __io__.StringIO()

        if 'test_unitaire' not in list(globals()):
            from random import choice

        def test_unitaire(numerous_benchmark):
            global_failed = 0
            success_smb = ['🔥','✨','🌠','✅','🥇','🎖']
            fail_smb = ['🌩','🙈','🙉','⛑','🌋','💣']
            try :
                if type(numerous_benchmark[0]) not in [list, tuple]:  # just one function has to be evaluated
                    type_bench = 'multiple' 
                    numerous_benchmark = (numerous_benchmark, )

                for benchmark in numerous_benchmark:
                    failed = 0
                    print(f">>> Test de la fonction ** {benchmark[0].split('(')[0].upper()} **")
                    
                    for k, test in enumerate(benchmark, 1):
                        if eval(test):
                            print(f'Test {k} réussi :  {test} ')
                        else:
                            print(f'Test {k} échoué :  {test} ')
                            failed += 1

                    if not failed :
                        print(f"Bravo vous avez réussi tous les tests {choice(success_smb)}")
                    else :
                        if failed == 1 : msg = f"{failed} test a échoué. "
                        else : msg = f"{failed} tests ont échoué. "
                        print(msg + f"Reprenez votre code {choice(fail_smb)}")
                        global_failed += 1
            except :
                if numerous_benchmark != []:
                    print(f"- Fonctions manquantes ou noms de fonctions incorrectes.")
                    print(f"- Respectez les noms indiqués dans l'énoncé.")
                    global_failed += 1
                else:
                    print(f"🙇🏻 pas de fichier de test... Si vous êtes sur de vous, continuez à cliquer sur le gendarme.")
                    global_failed += 1
            return global_failed
        `);
        var output = await pyodide.runPythonAsync(test_code + "\ntest_unitaire(benchmark)");    // Running the code OUTPUT
        } else {

    var testCodeTable = test_code.split('\n');  // splits test code into several lines
    var testCodeTableMulti = []; // multiple lines code joined into one line
    var line = 0;
    while (line < testCodeTable.length) {
        let countPar = 0;
        let countBra = 0;
        let contiBool = false;
        let lineStart = line;
        do { // multilines assertions
            countPar += countParenthesis(testCodeTable[line], "(");
            countBra += countParenthesis(testCodeTable[line], "[");
            contiBool = testCodeTable[line].endsWith("\\")
            testCodeTable[line] = testCodeTable[line].replace("\\", "")
            line++;
        } while (countPar !== 0 || countBra !== 0 || contiBool)
        testCodeTableMulti.push(testCodeTable.slice(lineStart, line).join(""))
    }
    // Maybe to be put back...
    // testCodeTableMulti = testCodeTableMulti.map(x => x.replace(/\s\s/g, ""))

    var nSecretTests = testCodeTableMulti.filter(x => x.includes("assert") && !x.startsWith("#")).length;
    var extVarData = testCodeTableMulti.filter(x => !x.includes("assert") && !x.startsWith("#"));

    console.log(extVarData)
    var nPassedDict = {};
    for (let i = 0; i < nSecretTests; i++)
    {
        nPassedDict[i] = 0;
    }

    pyodide.runPython(`
        import sys as __sys__
        import io as __io__
        import js
        __sys__.stdout = __io__.StringIO()
    `)

    var i = 0;
    var success = 0;
    console.log('tst', testCodeTableMulti)
    var k = 0; // line of the file
    var stdout = "";
    while (k < testCodeTableMulti.length) {
        // decoration of the assert clauses to add try/except catch
        let localTest = 'i_tot = 0\ni_failed = 0';
        while (!testCodeTableMulti[k].includes("assert")) {
            let test = testCodeTableMulti[k];
            localTest = localTest + '\n' + test
            k++;
        }
        // testCodeTableMulti[k]$
        let indent = " ".repeat(testCodeTableMulti[k].indexOf("assert"));
        localTest += "\n" + indent + "i_tot += 1\n"
        localTest = localTest + testCodeTableMulti[k].replace(/(assert)/, "try: $1") 
        localTest = localTest + "\n" + indent + "except : i_failed += 1\n" + "print(i_tot, i_failed, '" + testCodeTableMulti[k] + "')";
        k++;
        console.log(localTest)

        pyodide.runPython(`${localTest}`)
        stdout = pyodide.runPython("__sys__.stdout.getvalue()")  // Catching and redirecting the output
        // console.log("resultat", stdout)
        
        // try  // test passed
        // {
        //     pyodide.runPython(`${localTest}`)
        //     var stdout = pyodide.runPython("__sys__.stdout.getvalue()")  // Catching and redirecting the output
        //     console.log("resultat", stdout)
            
        //     if (localTest.includes("assert") && !localTest.startsWith("#")) 
        //     {
        //         nPassedDict[i] = [1, localTest]; i++;success++;  // SUCCESS CODE -> Code 1
        //     }
        // }
        // catch (err) 
        // {
        //     nPassedDict[i] = [0, localTest] ;   // FAILED CODE -> Code 0
        //     i++;
        // }
        // console.log('ici',k, testCodeTableMulti.length)
    }
    console.log('on se casse')
    console.log('resultat', stdout)
    let truc = stdout;
    console.log("after allocation", truc)
    console.log("after allocation and split", truc.split("\n"))
    // for (let test of testCodeTableMulti) {    
    //     try 
    //     {
    //         pyodide.runPython(`${test}`)
    //         if (test.includes("assert") && !test.startsWith("#")) {nPassedDict[i] = [1, test]; i++;success++;}
    //     }
    //     catch (err) 
    //     {
    //         nPassedDict[i] = [0, test] ;
    //         i++;
    //     }
    // }
    window.n_passed = nPassedDict;
    window.ext_var_data = extVarData;
    console.log(nPassedDict)
    pyodide.runPython(`
from js import n_passed, ext_var_data
import random
import sys as __sys__
import io as __io__
__sys__.stdout = __io__.StringIO()
success_smb = ['🔥','✨','🌠','✅','🥇','🎖']

n_passed_dict = n_passed.to_py()
ext_var_data = ext_var_data.to_py()
n_passed = list(map(lambda x: x[0],n_passed_dict.values())).count(1)

if n_passed == len(n_passed_dict):
    print(f""">>> Bravo {random.choice(success_smb)} : vous avez réussi tous les tests. \n === Penser à lire le corrigé et les commentaires ===""")
else :
    print(f""">>> Vérification : pour {len(n_passed_dict)} tests, il y a {n_passed} réussite{"s" if n_passed > 1 else ""} \n------""")

    def extract_log(dico):
        for key, value in n_passed_dict.items():
            if value[0] == 0:
                return key, value[1]
        return None

    def extract_external_var(log, var_list):
        T = []
        for definition in var_list:
            var_name = "".join(definition.split("=")[0].split())
            if var_name in log and var_name != "":
                T.append(definition)
        return "\\n".join(T)

    key, log = extract_log(n_passed_dict)
    print(f"""Échec du test n°{key} : \n\n{extract_external_var(log, ext_var_data)} \n\n{log}""")
print(f"""------""", end="")
`)
if (nSecretTests == success) {
    var output = 0;
}
}

        var stdout = pyodide.runPython("import sys as __sys__\n__sys__.stdout.getvalue()")  // Catching and redirecting the output
        let elementCounter = document.getElementById("test_term_editor_"+id_editor)
        let parentCounter = elementCounter.parentElement.dataset.max;
        const nAttempts = parentCounter;

        while (elementCounter.className !== "compteur") {
            elementCounter = elementCounter.nextElementSibling
        }
        if (output === 0) {
            dict[id_editor] = nAttempts
        } else {
            dict[id_editor] = 1 + (id_editor in dict ? dict[id_editor] : 0)
        }

        if (nAttempts !== '\u221e') { // INFTY symbol
            elementCounter.textContent = Math.max(0, nAttempts-dict[id_editor]) + "/" + parentCounter
        } else {
            elementCounter.textContent = parentCounter + "/" + parentCounter
        }

        if (dict[id_editor] == nAttempts && !document.getElementById('solution_editor_'+id_editor)) {
            let correctionExists = $('#corr_content_editor_'+id_editor).text()  // Extracting url from the div before Ace layer
            if (correctionExists !== "") {
                showCorrection('editor_'+id_editor);
            };
        }

        nlines = calcTermSize(stdout, mode)
        let editor = ace.edit("editor_"+id_editor);
        let stream = await editor.getSession().getValue();
        if(editor.session.getLength() <= nlines && mode === 'v') {
            nslash = editor.session.getLength()- nlines + 3; // +3 takes into account shift and newlines
            for (var i = 0; i < nslash; i++) {
                stream += "\n"
            }
            editor.session.setValue(stream); // set value and reset undo history
        }

        $.terminal.active().echo(stdout); 

    } catch(err) { // Python not correct.
        err = err.toString().split("\n").slice(-7).join("\n");
        nlines = calcTermSize(err, mode);

        $.terminal.active().echo(">>> Script exécuté : \n------\n" + generateLog(err, code, 0) + "\n------\n");

        // $.terminal.active().echo(">>> Erreur de syntaxe !\n"+err)//.split("\n").slice(~~(nlines/2)).join("\n"));   // Would be nice to display only the last lines
      }
    }