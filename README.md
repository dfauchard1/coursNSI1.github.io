
<!doctype html>
<html lang="fr" class="no-js">
  <head>
    
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      
        <meta name="description" content="Cours et exercices NSI première">
      
      
      
        <link rel="canonical" href="https://dgfa.fr/nsi1/">
      
      <link rel="icon" href="assets/images/favicon.png">
      <meta name="generator" content="mkdocs-1.3.0, mkdocs-material-8.2.13">
    
    
      
        <title>Cours et exercices NSI 1ère</title>
      
    
    
      <link rel="stylesheet" href="assets/stylesheets/main.e411adfe.min.css">
      
        
        <link rel="stylesheet" href="assets/stylesheets/palette.cc9b2e1e.min.css">
        
      
    
    
    
    <!-- favicons -->
    <link rel="shortcut icon" href="../assets/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="../assets/images/favicon_32x32.png" sizes="32x32">
    <link rel="icon" href="../assets/images/favicon_96x96.png" sizes="96x96">
    <link rel="icon" href="../assets/images/favicon_144x144.png" sizes="144x144">
    <!-- Load CDNs : Pyodide (Python in WASM), Ace (Editor) and JQuery (Terminal) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ext-language_tools.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"></script>
    <script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-md5"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/js/jquery.terminal.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/css/jquery.terminal.min.css" rel="stylesheet">

    
      
    
    
      <link rel="stylesheet" href="xtra/stylesheets/pyoditeur.css">
    
      <link rel="stylesheet" href="xtra/stylesheets/ajustements.css">
    
    <script>__md_scope=new URL(".",location),__md_get=(e,_=localStorage,t=__md_scope)=>JSON.parse(_.getItem(t.pathname+"."+e)),__md_set=(e,_,t=localStorage,a=__md_scope)=>{try{t.setItem(a.pathname+"."+e,JSON.stringify(_))}catch(e){}}</script>
    
      

    
    
  </head>
  
  
    
    
      
    
    
    
    
    <body dir="ltr" data-md-color-scheme="slate" data-md-color-primary="blue" data-md-color-accent="blue">
  
    
    
      <script>var palette=__md_get("__palette");if(palette&&"object"==typeof palette.color)for(var key of Object.keys(palette.color))document.body.setAttribute("data-md-color-"+key,palette.color[key])</script>
    
    <input class="md-toggle" data-md-toggle="drawer" type="checkbox" id="__drawer" autocomplete="off">
    <input class="md-toggle" data-md-toggle="search" type="checkbox" id="__search" autocomplete="off">
    <label class="md-overlay" for="__drawer"></label>
    <div data-md-component="skip">
      
        
        <a href="#terminal-et-ide-dans-mkdocs" class="md-skip">
          Aller au contenu
        </a>
      
    </div>
    <div data-md-component="announce">
      
    </div>
    
    
      

  

<header class="md-header md-header--lifted" data-md-component="header">
  <nav class="md-header__inner md-grid" aria-label="En-tête">
    <a href="." title="Cours et exercices NSI 1ère" class="md-header__button md-logo" aria-label="Cours et exercices NSI 1ère" data-md-component="logo">
      
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m0 3.54C9.64 9.35 6.5 8 3 8v11c3.5 0 6.64 1.35 9 3.54 2.36-2.19 5.5-3.54 9-3.54V8c-3.5 0-6.64 1.35-9 3.54Z"/></svg>

    </a>
    <label class="md-header__button md-icon" for="__drawer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>
    </label>
    <div class="md-header__title" data-md-component="header-title">
      <div class="md-header__ellipsis">
        <div class="md-header__topic">
          <span class="md-ellipsis">
            Cours et exercices NSI 1ère
          </span>
        </div>
        <div class="md-header__topic" data-md-component="header-topic">
          <span class="md-ellipsis">
            
              Terminal et IDE dans Mkdocs
            
          </span>
        </div>
      </div>
    </div>
    
      <form class="md-header__option" data-md-component="palette">
        
          
          
          <input class="md-option" data-md-color-media="(prefers-color-scheme: dark)" data-md-color-scheme="slate" data-md-color-primary="blue" data-md-color-accent="blue"  aria-label="Passer au mode jour"  type="radio" name="__palette" id="__palette_1">
          
            <label class="md-header__button md-icon" title="Passer au mode jour" for="__palette_2" hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m17.75 4.09-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3 3.19.09m3.5 6.91-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95 2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31Z"/></svg>
            </label>
          
        
          
          
          <input class="md-option" data-md-color-media="(prefers-color-scheme: light)" data-md-color-scheme="default" data-md-color-primary="indigo" data-md-color-accent="indigo"  aria-label="Passer au mode nuit"  type="radio" name="__palette" id="__palette_2">
          
            <label class="md-header__button md-icon" title="Passer au mode nuit" for="__palette_1" hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0-7 2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m.02 10 1.76-3.77a7.131 7.131 0 0 0 2.38 4.14L3.36 17M20.65 7l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-.01 10-4.14.36c.59-.51 1.12-1.14 1.54-1.86.42-.73.69-1.5.83-2.29L20.64 17M12 22l-2.41-3.44c.74.27 1.55.44 2.41.44.82 0 1.63-.17 2.37-.44L12 22Z"/></svg>
            </label>
          
        
      </form>
    
    
    
      <label class="md-header__button md-icon" for="__search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z"/></svg>
      </label>
      <div class="md-search" data-md-component="search" role="dialog">
  <label class="md-search__overlay" for="__search"></label>
  <div class="md-search__inner" role="search">
    <form class="md-search__form" name="search">
      <input type="text" class="md-search__input" name="query" aria-label="Rechercher" placeholder="Rechercher" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" data-md-component="search-query" required>
      <label class="md-search__icon md-icon" for="__search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12Z"/></svg>
      </label>
      <nav class="md-search__options" aria-label="Search">
        
        <button type="reset" class="md-search__icon md-icon" aria-label="Effacer" tabindex="-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/></svg>
        </button>
      </nav>
      
    </form>
    <div class="md-search__output">
      <div class="md-search__scrollwrap" data-md-scrollfix>
        <div class="md-search-result" data-md-component="search-result">
          <div class="md-search-result__meta">
            Initialisation de la recherche
          </div>
          <ol class="md-search-result__list"></ol>
        </div>
      </div>
    </div>
  </div>
</div>
    
    
  </nav>
  
    
      
<nav class="md-tabs" aria-label="Onglets" data-md-component="tabs">
  <div class="md-tabs__inner md-grid">
    <ul class="md-tabs__list">
      
        
  
  
    
  


  <li class="md-tabs__item">
    <a href="." class="md-tabs__link md-tabs__link--active">
      Terminal et IDE dans Mkdocs
    </a>
  </li>

      
        
  
  


  <li class="md-tabs__item">
    <a href="install_ide/" class="md-tabs__link">
      Guide de l'IDE
    </a>
  </li>

      
        
  
  


  <li class="md-tabs__item">
    <a href="install_term/" class="md-tabs__link">
      Guide du Terminal
    </a>
  </li>

      
        
  
  


  <li class="md-tabs__item">
    <a href="sandbox/" class="md-tabs__link">
      Bac à sable
    </a>
  </li>

      
        
  
  


  <li class="md-tabs__item">
    <a href="todo/" class="md-tabs__link">
      Des questions techniques et métaphysiques
    </a>
  </li>

      
        
  
  


  
  
  
    <li class="md-tabs__item">
      <a href="scripts/exo2_REM/" class="md-tabs__link">
        Scripts
      </a>
    </li>
  

      
        
  
  


  
  
  
    <li class="md-tabs__item">
      <a href="xtra/end_REM/" class="md-tabs__link">
        Xtra
      </a>
    </li>
  

      
    </ul>
  </div>
</nav>
    
  
</header>
    
    <div class="md-container" data-md-component="container">
      
      
        
      
      <main class="md-main" data-md-component="main">
        <div class="md-main__inner md-grid">
          
            
              
              <div class="md-sidebar md-sidebar--primary" data-md-component="sidebar" data-md-type="navigation" >
                <div class="md-sidebar__scrollwrap">
                  <div class="md-sidebar__inner">
                    

  


  

<nav class="md-nav md-nav--primary md-nav--lifted md-nav--integrated" aria-label="Navigation" data-md-level="0">
  <label class="md-nav__title" for="__drawer">
    <a href="." title="Cours et exercices NSI 1ère" class="md-nav__button md-logo" aria-label="Cours et exercices NSI 1ère" data-md-component="logo">
      
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m0 3.54C9.64 9.35 6.5 8 3 8v11c3.5 0 6.64 1.35 9 3.54 2.36-2.19 5.5-3.54 9-3.54V8c-3.5 0-6.64 1.35-9 3.54Z"/></svg>

    </a>
    Cours et exercices NSI 1ère
  </label>
  
  <ul class="md-nav__list" data-md-scrollfix>
    
      
      
      

  
  
    
  
  
    <li class="md-nav__item md-nav__item--active">
      
      <input class="md-nav__toggle md-toggle" data-md-toggle="toc" type="checkbox" id="__toc">
      
      
        
      
      
        <label class="md-nav__link md-nav__link--active" for="__toc">
          Terminal et IDE dans Mkdocs
          <span class="md-nav__icon md-icon"></span>
        </label>
      
      <a href="." class="md-nav__link md-nav__link--active">
        Terminal et IDE dans Mkdocs
      </a>
      
        

<nav class="md-nav md-nav--secondary" aria-label="Table des matières">
  
  
  
    
  
  
    <label class="md-nav__title" for="__toc">
      <span class="md-nav__icon md-icon"></span>
      Table des matières
    </label>
    <ul class="md-nav__list" data-md-component="toc" data-md-scrollfix>
      
        <li class="md-nav__item">
  <a href="#introduction" class="md-nav__link">
    Introduction
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="#apercu" class="md-nav__link">
    Aperçu
  </a>
  
</li>
      
        <li class="md-nav__item">
  <a href="#installation" class="md-nav__link">
    Installation
  </a>
  
    <nav class="md-nav" aria-label="Installation">
      <ul class="md-nav__list">
        
          <li class="md-nav__item">
  <a href="#fichier-yml-mkdocsyml" class="md-nav__link">
    Fichier YML mkdocs.yml
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#fichier-macro-python-mainpy" class="md-nav__link">
    Fichier macro Python main.py
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#creation-du-dossier-custom_dir" class="md-nav__link">
    Création du dossier custom_dir
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#fichier-css-pyoditeurcss" class="md-nav__link">
    Fichier CSS pyoditeur.css
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#fichiers-javascripts-interpreterjs-et-idejs" class="md-nav__link">
    Fichiers javascripts interpreter.js et ide.js
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#fichiers-start_remmd-et-end_remmd" class="md-nav__link">
    Fichiers start_REM.md et end_REM.md
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#images-des-boutons" class="md-nav__link">
    Images des boutons
  </a>
  
</li>
        
      </ul>
    </nav>
  
</li>
      
        <li class="md-nav__item">
  <a href="#syntaxe-et-exemples" class="md-nav__link">
    Syntaxe et exemples
  </a>
  
    <nav class="md-nav" aria-label="Syntaxe et exemples">
      <ul class="md-nav__list">
        
          <li class="md-nav__item">
  <a href="#syntaxe-markdown" class="md-nav__link">
    Syntaxe Markdown
  </a>
  
</li>
        
          <li class="md-nav__item">
  <a href="#exemples" class="md-nav__link">
    Exemples
  </a>
  
</li>
        
      </ul>
    </nav>
  
</li>
      
    </ul>
  
</nav>
      
    </li>
  

    
      
      
      

  
  
  
    <li class="md-nav__item">
      <a href="install_ide/" class="md-nav__link">
        Guide de l'IDE
      </a>
    </li>
  

    
      
      
      

  
  
  
    <li class="md-nav__item">
      <a href="install_term/" class="md-nav__link">
        Guide du Terminal
      </a>
    </li>
  

    
      
      
      

  
  
  
    <li class="md-nav__item">
      <a href="sandbox/" class="md-nav__link">
        Bac à sable
      </a>
    </li>
  

    
      
      
      

  
  
  
    <li class="md-nav__item">
      <a href="todo/" class="md-nav__link">
        Des questions techniques et métaphysiques
      </a>
    </li>
  

    
      
      
      

  
  
  
    
    <li class="md-nav__item md-nav__item--nested">
      
      
        <input class="md-nav__toggle md-toggle" data-md-toggle="__nav_6" data-md-state="indeterminate" type="checkbox" id="__nav_6" checked>
      
      
      
      
        <label class="md-nav__link" for="__nav_6">
          Scripts
          <span class="md-nav__icon md-icon"></span>
        </label>
      
      <nav class="md-nav" aria-label="Scripts" data-md-level="1">
        <label class="md-nav__title" for="__nav_6">
          <span class="md-nav__icon md-icon"></span>
          Scripts
        </label>
        <ul class="md-nav__list" data-md-scrollfix>
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="scripts/exo2_REM/" class="md-nav__link">
        exo2 REM
      </a>
    </li>
  

            
          
            
              
  
  
  
    
      
    
    <li class="md-nav__item md-nav__item--section md-nav__item--nested">
      
      
        <input class="md-nav__toggle md-toggle" data-md-toggle="__nav_6_2" data-md-state="indeterminate" type="checkbox" id="__nav_6_2" checked>
      
      
      
      
        <label class="md-nav__link" for="__nav_6_2">
          Demo
          <span class="md-nav__icon md-icon"></span>
        </label>
      
      <nav class="md-nav" aria-label="Demo" data-md-level="2">
        <label class="md-nav__title" for="__nav_6_2">
          <span class="md-nav__icon md-icon"></span>
          Demo
        </label>
        <ul class="md-nav__list" data-md-scrollfix>
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="scripts/demo/algo_glouton_REM/" class="md-nav__link">
        algo glouton REM
      </a>
    </li>
  

            
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="scripts/demo/demo1_REM/" class="md-nav__link">
        demo1 REM
      </a>
    </li>
  

            
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="scripts/demo/demo2_REM/" class="md-nav__link">
        demo2 REM
      </a>
    </li>
  

            
          
        </ul>
      </nav>
    </li>
  

            
          
            
              
  
  
  
    
      
    
    <li class="md-nav__item md-nav__item--section md-nav__item--nested">
      
      
        <input class="md-nav__toggle md-toggle" data-md-toggle="__nav_6_3" data-md-state="indeterminate" type="checkbox" id="__nav_6_3" checked>
      
      
      
      
        <label class="md-nav__link" for="__nav_6_3">
          Dentiste
          <span class="md-nav__icon md-icon"></span>
        </label>
      
      <nav class="md-nav" aria-label="Dentiste" data-md-level="2">
        <label class="md-nav__title" for="__nav_6_3">
          <span class="md-nav__icon md-icon"></span>
          Dentiste
        </label>
        <ul class="md-nav__list" data-md-scrollfix>
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="scripts/dentiste/exo_REM/" class="md-nav__link">
        exo REM
      </a>
    </li>
  

            
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="scripts/dentiste/sujet/" class="md-nav__link">
        Dentiste
      </a>
    </li>
  

            
          
        </ul>
      </nav>
    </li>
  

            
          
        </ul>
      </nav>
    </li>
  

    
      
      
      

  
  
  
    
    <li class="md-nav__item md-nav__item--nested">
      
      
        <input class="md-nav__toggle md-toggle" data-md-toggle="__nav_7" data-md-state="indeterminate" type="checkbox" id="__nav_7" checked>
      
      
      
      
        <label class="md-nav__link" for="__nav_7">
          Xtra
          <span class="md-nav__icon md-icon"></span>
        </label>
      
      <nav class="md-nav" aria-label="Xtra" data-md-level="1">
        <label class="md-nav__title" for="__nav_7">
          <span class="md-nav__icon md-icon"></span>
          Xtra
        </label>
        <ul class="md-nav__list" data-md-scrollfix>
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="xtra/end_REM/" class="md-nav__link">
        end REM
      </a>
    </li>
  

            
          
            
              
  
  
  
    <li class="md-nav__item">
      <a href="xtra/start_REM/" class="md-nav__link">
        start REM
      </a>
    </li>
  

            
          
        </ul>
      </nav>
    </li>
  

    
  </ul>
</nav>
                  </div>
                </div>
              </div>
            
            
          
          <div class="md-content" data-md-component="content">
            <article class="md-content__inner md-typeset">
              
    
                


<h1 id="terminal-et-ide-dans-mkdocs">Terminal et IDE dans Mkdocs<a class="headerlink" href="#terminal-et-ide-dans-mkdocs" title="Permanent link">⚓︎</a></h1>
<h2 id="introduction">Introduction<a class="headerlink" href="#introduction" title="Permanent link">⚓︎</a></h2>
<p><code>Pyodide-Mkdocs</code> est une solution technique permettant de créer un cours interactif à partir d'un site généré par Mkdocs. </p>
<p>Il permet d'intégrer, dans le navigateur, côté client :</p>
<ul>
<li>une console Python ;</li>
<li>un éditeur de code ;</li>
<li>un juge en ligne associé à des corrigés.</li>
</ul>
<p>Garantie :</p>
<ul class="task-list">
<li class="task-list-item"><label class="task-list-control"><input type="checkbox" checked/><span class="task-list-indicator"></span></label> sans cookie</li>
<li class="task-list-item"><label class="task-list-control"><input type="checkbox" checked/><span class="task-list-indicator"></span></label> sans inscription</li>
<li class="task-list-item"><label class="task-list-control"><input type="checkbox" checked/><span class="task-list-indicator"></span></label> créé par un enseignant pour les enseignants</li>
</ul>
<details class="info">
<summary>Solution</summary>
<p>La technologie permettant ce tour de force s'appelle <a href="https://pyodide.org/en/stable/" title="Pyodide, Python with the scientific stack, compiled to WebAssembly">Pyodide</a>.</p>
<p>Pyodide utilise WebAssembly pour faire le lien entre Python et Javascript et proposer un environnement permettant de manipuler le DOM avec Python, ou de manipuler Python avec Javascript.</p>
</details>
<h2 id="apercu">Aperçu<a class="headerlink" href="#apercu" title="Permanent link">⚓︎</a></h2>
<div class="ide_classe" data-max=5 data-exclude=eval,exec ><div class="wrapper_h"><div class="line" id="editor_1"></div><div id="term_editor_1" class="term_editor_h terminal_f_h"></div></div><button class="tooltip" onclick='interpretACE("editor_1","h")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span id="test_term_editor_1" class="hide"># testsbksl-nlbksl-nlassert dentiste("j'ai mal") == 'aia'bksl-nlassert dentiste("il fait chaud") == 'iaiau'bksl-nlassert dentiste("") == ''bksl-nlbksl-nlbksl-nl# pas d'autres testsbksl-nlbksl-nlassert dentiste("a"py-str20 + "b"py-str10 + "e") == 'a'py-str20 + 'e'bksl-nlassert dentiste("b"py-str10 + "e" + "a"py-str20) == 'e' + 'a'py-str20 bksl-nlassert dentiste("ab"py-str10) == 'a'py-str10bksl-nlassert dentiste("aeiouy"py-str10) == 'aeiouy'py-str10bksl-nlassert dentiste("z"py-str100 + 'y') == 'y'bksl-nlbksl-nl</span>                <button class="tooltip" onclick='executeTest("1","h")'>                <img src="/nsi1/images/buttons/icons8-check-64.png">                <span class="tooltiptext">Valider</span></button><span class="compteur">                5/5                </span><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_1","dentiste/exo")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_1').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_1" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("1","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("1","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div>
<p><span id="content_editor_1" class="hide">voyelles = ['a', 'e', 'i', 'o', 'u', 'y']bksl-nlbksl-nldef dentiste(texte):bksl-nl    passbksl-nlbksl-nlassert dentiste("j'ai mal") == 'aia'bksl-nlassert dentiste("il fait chaud") == 'iaiau'bksl-nlassert dentiste("") == ''bksl-nlbksl-nl</span><span id="corr_content_editor_1" class="hide" data-strudel="">voyelles = ['a', 'e', 'i', 'o', 'u', 'y']bksl-nlbksl-nldef dentiste(texte):bksl-nl    resultat = ''bksl-nl    for lettre in texte:bksl-nl        if lettre in voyelles:bksl-nl            resultat = resultat + lettrebksl-nl    return resultatbksl-nlbksl-nl</span></p>
<p><strong>A</strong></p>
<div class="admonition help">
<p class="admonition-title">Une première remarque</p>
<p>Ceci est un exercice classique.</p>
</div>
<details class="help" open="open">
<summary>D'autres détails</summary>
<p>On pourrait représenter la situation dans un tableau : </p>
<table>
<thead>
<tr>
<th>a</th>
<th>b</th>
<th>c</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
</tbody>
</table>
</details>
<p><strong>Z</strong></p>
<h2 id="installation">Installation<a class="headerlink" href="#installation" title="Permanent link">⚓︎</a></h2>
<p>On part d'une installation comme indiqué sur [https://ens-fr.gitlab.io/mkdocs/] avec le <strong>plugin macro</strong>, préalablement installé.</p>
<p>L'installation demande de rajouter à cette configuration les éléments suivants.</p>
<p><strong>Modification</strong> :</p>
<ul>
<li>fichier YML <code>mkdocs.yml</code> ;</li>
<li>fichier de macro <code>main.py</code> ;</li>
</ul>
<p><strong>Ajout</strong> :</p>
<ul>
<li>un dossier <code class="highlight">my_theme_customizations/</code> à la racine du projet Mkdocs ;</li>
<li>un template HTML <code class="highlight">my_theme_customizations/main.html</code> ;</li>
<li>un fichier CSS <code class="highlight">docs/xtra/stylesheets/pyoditeur.css</code> ;</li>
<li>deux fichiers Javascript <code class="highlight">docs/xtra/javascripts/interpreter.js</code> et <code class="highlight">my_theme_customizations/js/ide.js</code> ;</li>
<li>deux fichiers Markdown <code class="highlight">docs/xtra/start.md</code> et <code class="highlight">docs/xtra/end.md</code>.</li>
</ul>
<h3 id="fichier-yml-mkdocsyml">Fichier YML <code>mkdocs.yml</code><a class="headerlink" href="#fichier-yml-mkdocsyml" title="Permanent link">⚓︎</a></h3>
<p>Ajoutez les lignes surlignées dans votre fichier mkdocs.yml .</p>
<div class="highlight"><pre><span></span><code><span class="w">    </span><span class="nt">site_name</span><span class="p">:</span><span class="w"> </span><span class="s">&quot;Terminal</span><span class="nv"> </span><span class="s">et</span><span class="nv"> </span><span class="s">REPL</span><span class="nv"> </span><span class="s">dans</span><span class="nv"> </span><span class="s">Mkdocs&quot;</span><span class="w"></span>
<span class="w">    </span>
<span class="w">    </span><span class="l l-Scalar l-Scalar-Plain">...</span><span class="w"></span>
<span class="w">    </span>
<span class="w">    </span><span class="nt">theme</span><span class="p">:</span><span class="w"></span>
<span class="w">        </span><span class="nt">name</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">material</span><span class="w"></span>
<span class="hll"><span class="w">        </span><span class="nt">custom_dir</span><span class="p">:</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">my_theme_customizations/</span><span class="w"></span>
</span><span class="w">      </span>
<span class="w">    </span><span class="l l-Scalar l-Scalar-Plain">...</span><span class="w"></span>
<span class="w">    </span>
<span class="w">    </span><span class="nt">extra_javascript</span><span class="p">:</span><span class="w"></span>
<span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">xtra/javascripts/mathjax-config.js</span><span class="w">                    </span><span class="c1"># MathJax</span><span class="w"></span>
<span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">javascripts/config.js</span><span class="w"></span>
<span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">https://polyfill.io/v3/polyfill.min.js?features=es6</span><span class="w"></span>
<span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js</span><span class="w"></span>
<span class="hll"><span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">xtra/javascripts/interpreter.js</span><span class="w"></span>
</span><span class="w">    </span>
<span class="w">    </span><span class="nt">extra_css</span><span class="p">:</span><span class="w"></span>
<span class="hll"><span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">xtra/stylesheets/pyoditeur.css</span><span class="w"></span>
</span><span class="w">      </span><span class="p p-Indicator">-</span><span class="w"> </span><span class="l l-Scalar l-Scalar-Plain">xtra/stylesheets/ajustements.css</span><span class="w">                      </span><span class="c1"># ajustements</span><span class="w"></span>
</code></pre></div>
<h3 id="fichier-macro-python-mainpy">Fichier macro Python <code>main.py</code><a class="headerlink" href="#fichier-macro-python-mainpy" title="Permanent link">⚓︎</a></h3>
<p>À votre fichier <code>main.py</code>, ajoutez les lignes du fichier <a href="https://gitlab.com/bouillotvincent/pyodide-mkdocs/-/raw/main/docs/scripts/main.py" title="main.py sur Gitlab"><code>main.py</code></a>.</p>
<h3 id="creation-du-dossier-custom_dir">Création du dossier <code>custom_dir</code><a class="headerlink" href="#creation-du-dossier-custom_dir" title="Permanent link">⚓︎</a></h3>
<p><strong>N'oubliez pas de créer le dossier <code class="highlight">my_theme_customizations/</code> à la racine du projet Mkdocs</strong>.</p>
<p>Dans ce dossier, ajoutez le template Jinja <code class="highlight">main.html</code> :</p>
<div class="highlight"><pre><span></span><code><span class="x">    </span><span class="cp">{%</span> <span class="k">extends</span> <span class="s2">&quot;base.html&quot;</span> <span class="cp">%}</span><span class="x"></span>
<span class="x">    </span>
<span class="x">    </span><span class="cp">{%</span> <span class="k">block</span> <span class="nv">content</span> <span class="cp">%}</span><span class="x"></span>
<span class="x">        </span><span class="cp">{{</span><span class="nb">super</span><span class="o">()</span><span class="cp">}}</span><span class="x"></span>
<span class="x">        &lt;script src=&quot;</span><span class="cp">{{</span> <span class="nv">base_url</span> <span class="cp">}}</span><span class="x">/js/ide.js&quot;&gt;&lt;/script&gt; </span>
<span class="x">    </span><span class="cp">{%</span> <span class="k">endblock</span> <span class="cp">%}</span><span class="x"></span>
<span class="x">    </span>
<span class="x">    </span><span class="cp">{%</span> <span class="k">block</span> <span class="nv">libs</span> <span class="cp">%}</span><span class="x"></span>
<span class="x">        </span><span class="cp">{{</span> <span class="nb">super</span><span class="o">()</span> <span class="cp">}}</span><span class="x"></span>
<span class="x">        &lt;!-- favicons --&gt;</span>
<span class="x">        &lt;link rel=&quot;shortcut icon&quot; href=&quot;../assets/images/favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;</span>
<span class="x">        &lt;link rel=&quot;icon&quot; href=&quot;../assets/images/favicon_32x32.png&quot; sizes=&quot;32x32&quot;&gt;</span>
<span class="x">        &lt;link rel=&quot;icon&quot; href=&quot;../assets/images/favicon_96x96.png&quot; sizes=&quot;96x96&quot;&gt;</span>
<span class="x">        &lt;link rel=&quot;icon&quot; href=&quot;../assets/images/favicon_144x144.png&quot; sizes=&quot;144x144&quot;&gt;</span>
<span class="x">        &lt;!-- Load CDNs : Pyodide (Python in WASM), Ace (Editor) and JQuery (Terminal) --&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ext-language_tools.min.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.asm.js&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdn.jsdelivr.net/npm/js-md5&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdn.jsdelivr.net/npm/jquery&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;script src=&quot;https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/js/jquery.terminal.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="x">        &lt;link href=&quot;https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/css/jquery.terminal.min.css&quot; rel=&quot;stylesheet&quot;&gt;</span>
<span class="x">    </span><span class="cp">{%</span> <span class="k">endblock</span> <span class="cp">%}</span><span class="x"></span>
</code></pre></div>
<h3 id="fichier-css-pyoditeurcss">Fichier CSS <code>pyoditeur.css</code><a class="headerlink" href="#fichier-css-pyoditeurcss" title="Permanent link">⚓︎</a></h3>
<p>Afin de coller au thème du site, recopiez et ajoutez le fichier <a href="https://gitlab.com/bouillotvincent/pyodide-mkdocs/-/raw/main/docs/xtra/stylesheets/pyoditeur.css" title="Pyoditeur CSS sur Gitlab"><code>pyoditeur.css</code></a> au dossier <code>docs/xtra/stylesheets/</code>.</p>
<p>Si vous avez opté pour d'autres couleurs, c'est là que vous pourrez faire les modifications de l'éditeur.</p>
<h3 id="fichiers-javascripts-interpreterjs-et-idejs">Fichiers javascripts <code>interpreter.js</code> et <code>ide.js</code><a class="headerlink" href="#fichiers-javascripts-interpreterjs-et-idejs" title="Permanent link">⚓︎</a></h3>
<p>Deux fichiers Javascript <a href="https://gitlab.com/bouillotvincent/pyodide-mkdocs/-/raw/main/docs/xtra/javascripts/interpreter.js" title="interpreter JS sur Gitlab"><code>interpreter.js</code></a> et <a href="https://gitlab.com/bouillotvincent/pyodide-mkdocs/-/raw/main/my_theme_customizations/js/ide.js" title="ide JS sur Gitlab"><code>ide.js</code></a> sont nécessaires :</p>
<ul>
<li><code>interpreter.js</code> doit être placé dans le dossier : <code>docs/xtra/javascripts/</code> ;</li>
<li><code>ide.js</code> doit être placé dans le dossier : <code>my_theme_customizations/js/ide.js</code>.</li>
</ul>
<h3 id="fichiers-start_remmd-et-end_remmd">Fichiers <code>start_REM.md</code> et <code>end_REM.md</code><a class="headerlink" href="#fichiers-start_remmd-et-end_remmd" title="Permanent link">⚓︎</a></h3>
<p>Pour la bonne gestion des fichiers de remarque, il faut également ajouter deux fichiers standardisés au format markdown : <a href="https://gitlab.com/bouillotvincent/pyodide-mkdocs/-/raw/main/docs/xtra/start_REM.md" title="start_REM.md sur Gitlab"><code>start_REM.md</code></a> et <a href="https://gitlab.com/bouillotvincent/pyodide-mkdocs/-/raw/main/docs/xtra/end_REM.md" title="end_REM.md sur Gitlab"><code>end_REM.md</code></a></p>
<h3 id="images-des-boutons">Images des boutons<a class="headerlink" href="#images-des-boutons" title="Permanent link">⚓︎</a></h3>
<p>Les boutons doivent être placés à cette adresse : <code>/docs/images/buttons/</code>. Il existe six boutons que vous pouvez récupérer en téléchargeant l'<a href="images/buttons/Buttons.zip">archive</a>.</p>
<h2 id="syntaxe-et-exemples">Syntaxe et exemples<a class="headerlink" href="#syntaxe-et-exemples" title="Permanent link">⚓︎</a></h2>
<h3 id="syntaxe-markdown">Syntaxe Markdown<a class="headerlink" href="#syntaxe-markdown" title="Permanent link">⚓︎</a></h3>
<div class="admonition summary">
<p class="admonition-title">La syntaxe</p>
<div class="tabbed-set tabbed-alternate" data-tabs="1:5"><input checked="checked" id="__tabbed_1_1" name="__tabbed_1" type="radio" /><input id="__tabbed_1_2" name="__tabbed_1" type="radio" /><input id="__tabbed_1_3" name="__tabbed_1" type="radio" /><input id="__tabbed_1_4" name="__tabbed_1" type="radio" /><input id="__tabbed_1_5" name="__tabbed_1" type="radio" /><div class="tabbed-labels"><label for="__tabbed_1_1">Terminal</label><label for="__tabbed_1_2">IDE vide</label><label for="__tabbed_1_3">IDE vertical</label><label for="__tabbed_1_4">IDE avec code</label><label for="__tabbed_1_5">IDE vertical avec code</label></div>
<div class="tabbed-content">
<div class="tabbed-block">
<p><div class="highlight"><pre><span></span><code>{{ terminal() }}
</code></pre></div>
Création d'un terminal vide. L'auto-complétion avec <span class="keys"><kbd class="key-tab">Tab</kbd></span> et le rappel de l'historique (avec <span class="keys"><kbd class="key-control">Ctrl</kbd><span>＋</span><kbd>R</kbd></span> ) sont possibles.</p>
<p><div onclick='start_term("id0")' id="fake_id0" class="terminal_f"><label class="terminal"><span>&gt;&gt;&gt; </span></label></div><div id="id0" class="hide"></div></p>
</div>
<div class="tabbed-block">
<p><div class="highlight"><pre><span></span><code>{{ IDE() }}
</code></pre></div>
Création d'un IDE (~ Thonny) vide. La flèche permet de lancer le code tapé dans la zone de saisie (avec les numéros de ligne). La zone de saisie se redimensionne automatiquement et autorise l'auto-complétion de type <em>snippet</em> avec <span class="keys"><kbd class="key-tab">Tab</kbd></span>.</p>
<p><div class="ide_classe" data-max=5 data-exclude=eval,exec ><div class="wrapper_h"><div class="line" id="editor_3"></div><div id="term_editor_3" class="term_editor_h terminal_f_h"></div></div><button class="tooltip" onclick='interpretACE("editor_3","h")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_3","")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_3').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_3" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("3","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("3","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div><span id="content_editor_3" class="hide"></span><span id="corr_content_editor_3" class="hide" data-strudel=""></span></p>
</div>
<div class="tabbed-block">
<p><div class="highlight"><pre><span></span><code>{{ IDEv() }}
</code></pre></div>
Cette commande crée un IDE vide, avec division verticale. La flèche permet de lancer le code tapé dans la zone de saisie (avec les numéros de ligne). La zone de saisie se redimensionne automatiquement et autorise l'auto-complétion de type snippet avec <span class="keys"><kbd class="key-tab">Tab</kbd></span>.</p>
<p><div class="ide_classe" data-max=5 data-exclude=eval,exec ><div class="wrapper"><div class="interior_wrapper"><div id="editor_5"></div></div><div id="term_editor_5" class="term_editor"></div></div><button class="tooltip" onclick='interpretACE("editor_5","v")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_5","")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_5').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_5" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("5","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("5","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div><span id="content_editor_5" class="hide"></span><span id="corr_content_editor_5" class="hide" data-strudel=""></span></p>
</div>
<div class="tabbed-block">
<p><div class="highlight"><pre><span></span><code>{{ IDE(&#39;foo/bar/nom_de_fichier&#39;, MAX = 8, SANS = &#39;max,min&#39;) }}
</code></pre></div>
Cette commande charge le fichier <code>nom_de_fichier.py</code> dans un IDE. Le fichier doit être dans <code>docs/scripts/foo/bar/</code>. Ne pas oublier les guillemets. </p>
<p><code>MAX = 8</code> indique le nombre maximal de tentatives de validation que l'élève peut effectuer. <code>MAX = 1000</code> permet de mettre ce nombre à l'infini. Valeur par défaut : <code>MAX = 5</code> .</p>
<p><code>SANS = 'max,min'</code> permet d'interdire l'utilisation des fonctions built-ins <code class="highlight"><span class="nb">max</span></code> et <code class="highlight"><span class="nb">min</span></code>.</p>
<p>Les IDE sont enregistrés à intervalle de temps régulier. Ils permettent également l'autocomplétion avec la combinaison de touches <span class="keys"><kbd class="key-alt">Alt</kbd><span>＋</span><kbd class="key-space">Space</kbd></span>.</p>
<p><div class="ide_classe" data-max=∞ data-exclude=eval,exec ><div class="wrapper_h"><div class="line" id="editor_7"></div><div id="term_editor_7" class="term_editor_h terminal_f_h"></div></div><button class="tooltip" onclick='interpretACE("editor_7","h")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span id="test_term_editor_7" class="hide">benchmark = ['longueur([])==0', 'longueur([1,3,5,5])==4', 'longueur([0]py-str100)==100']bksl-nl</span>                <button class="tooltip" onclick='executeTest("7","h")'>                <img src="/nsi1/images/buttons/icons8-check-64.png">                <span class="tooltiptext">Valider</span></button><span class="compteur">                ∞/∞                </span><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_7","demo/demo1")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_7').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_7" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("7","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("7","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div><span id="content_editor_7" class="hide">L = [5,3,4,1]bksl-nlbksl-nldef longueur(L: list) -&gt; int:bksl-nl    return bksl-nl</span><span id="corr_content_editor_7" class="hide" data-strudel="">def longueur(L: list) -&gt; int:bksl-nl    return len(L)bksl-nl</span></p>
<p><strong>Remarque</strong></p>
<p>Ceci est un exemple complexe de remarque.</p>
<p><strong><strong>La première ligne du fichier de remarque doit être vide</strong></strong></p>
<p>La syntaxe <code class="highlight">markdown</code> est complètement préservée. Par exemple, un tableau :</p>
<table>
<thead>
<tr>
<th>a</th>
<th>b</th>
<th>c</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
</tbody>
</table>
<div class="admonition help">
<p class="admonition-title">Une admonition ?</p>
<p>Vous pouvez inclure des admonitions et des superfences dans vos remarques. </p>
</div>
</div>
<div class="tabbed-block">
<p><div class="highlight"><pre><span></span><code>{{ IDEv(&#39;foo/bar/nom_de_fichier&#39;, MAX = 1000) }}
</code></pre></div>
Cette commande charge le fichier <code>nom_de_fichier</code> dans un IDE avec division verticale. Le fichier doit être dans <code>docs/scripts/foo/bar/</code>.       </p>
<p><div class="ide_classe" data-max=3 data-exclude=eval,exec ><div class="wrapper"><div class="interior_wrapper"><div id="editor_9"></div></div><div id="term_editor_9" class="term_editor"></div></div><button class="tooltip" onclick='interpretACE("editor_9","v")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span id="test_term_editor_9" class="hide">benchmark = ['longueur([])==0', 'longueur([1,3,5,5])==4', 'longueur([0]py-str100)==100']bksl-nl</span>                <button class="tooltip" onclick='executeTest("9","v")'>                <img src="/nsi1/images/buttons/icons8-check-64.png">                <span class="tooltiptext">Valider</span></button><span class="compteur">                3/3                </span><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_9","demo/demo1")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_9').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_9" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("9","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("9","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div><span id="content_editor_9" class="hide">L = [5,3,4,1]bksl-nlbksl-nldef longueur(L: list) -&gt; int:bksl-nl    return bksl-nl</span><span id="corr_content_editor_9" class="hide" data-strudel="">def longueur(L: list) -&gt; int:bksl-nl    return len(L)bksl-nl</span></p>
<p><strong>Remarque</strong></p>
<p>Ceci est un exemple complexe de remarque.</p>
<p><strong><strong>La première ligne du fichier de remarque doit être vide</strong></strong></p>
<p>La syntaxe <code class="highlight">markdown</code> est complètement préservée. Par exemple, un tableau :</p>
<table>
<thead>
<tr>
<th>a</th>
<th>b</th>
<th>c</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
</tbody>
</table>
<div class="admonition help">
<p class="admonition-title">Une admonition ?</p>
<p>Vous pouvez inclure des admonitions et des superfences dans vos remarques. </p>
</div>
</div>
</div>
</div>
</div>
<details class="warning">
<summary>Détails techniques</summary>
<p>Tous les IDE et les terminaux partagent le même <em>namespace</em>. On peut donc accéder à n'importe quelle fonction créée dans n'importe quel IDE ou terminal. </p>
<p><strong>C'est un comportement qui a l'avantage de pouvoir proposer des exercices où l'on construit petit à petit un code complexe.</strong></p>
</details>
<h3 id="exemples">Exemples<a class="headerlink" href="#exemples" title="Permanent link">⚓︎</a></h3>
<p>L'exemple ci-dessous, obtenu avec <code class="highlight">{{ IDEv(&#39;exo2&#39;) }}</code>. N'hésitez pas à modifier le code pour calculer la moyenne, l'écart-type, afficher cela dans le terminal etc.</p>
<div class="ide_classe" data-max=5 data-exclude=eval,exec ><div class="wrapper"><div class="interior_wrapper"><div id="editor_11"></div></div><div id="term_editor_11" class="term_editor"></div></div><button class="tooltip" onclick='interpretACE("editor_11","v")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span id="test_term_editor_11" class="hide">b1 = ['somme([]) == None', 'somme([1]) == 1', 'somme([1,2]) == 3', 'somme([-1,1]) == 0']bksl-nlb2 = ['sommation([1]) == 1', 'sommation([1,2]) == 3', 'sommation([-1,1]) == 0']bksl-nlbksl-nlbenchmark = (b1, b2)bksl-nl</span>                <button class="tooltip" onclick='executeTest("11","v")'>                <img src="/nsi1/images/buttons/icons8-check-64.png">                <span class="tooltiptext">Valider</span></button><span class="compteur">                5/5                </span><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_11","exo2")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_11').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_11" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("11","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("11","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div>
<p><span id="content_editor_11" class="hide">def sommation(T: list) -&gt; int:bksl-nl    a = 0bksl-nl    for nombre in T:bksl-nl        a = a + nombrebksl-nl    return abksl-nlbksl-nldef somme(L: list) -&gt; None or int:bksl-nl    return None if len(L) == 0 else sum(L)bksl-nl</span><span id="corr_content_editor_11" class="hide" data-strudel="">def somme(L: list[int]) -&gt; int:bksl-nl    return None if len(L) == 0 else sum(L)bksl-nl</span></p>
<p><strong>A</strong></p>
<p><strong>Remarque sur la solution</strong></p>
<p>C'est simple mais il faut être vigilant.</p>
<p><strong>Une autre remarque est possible</strong></p>
<p>Toujours simple mais toujours vigilant.</p>
<p><strong>Z</strong></p>
<p>L'exemple ci-dessous a été obtenu avec <code class="highlight">{{ IDE(&#39;algo_glouton&#39;) }}</code>.</p>
<div class="ide_classe" data-max=5 data-exclude=eval,exec ><div class="wrapper_h"><div class="line" id="editor_13"></div><div id="term_editor_13" class="term_editor_h terminal_f_h"></div></div><button class="tooltip" onclick='interpretACE("editor_13","h")'><img src="/nsi1/images/buttons/icons8-play-64.png"><span class="tooltiptext">Lancer</span></button><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='downloadFile("editor_13","algo_glouton")'><img src="/nsi1/images/buttons/icons8-download-64.png"><span class="tooltiptext">Télécharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick="document.getElementById('input_editor_13').click()"><img src="/nsi1/images/buttons/icons8-upload-64.png"><span class="tooltiptext">Téléverser</span></button>                <input type="file" id="input_editor_13" name="file" enctype="multipart/form-data" class="hide"/><span style="display: inline-block; width:1em"></span><button class="tooltip" onclick='reload("13","content")'><img src="/nsi1/images/buttons/icons8-restart-64.png"><span class="tooltiptext">Recharger</span></button><span style="display: inline-block; width:0.3em"></span><button class="tooltip" onclick='saveEditor("13","content")'><img src="/nsi1/images/buttons/icons8-save-64.png"><span class="tooltiptext">Sauvegarder</span></button></div>
<p><span id="content_editor_13" class="hide"># dictionnaire :bksl-nl#   - clé : nom de l'objetbksl-nl#   - valeur : tableau [poids, prix]bksl-nlinventaire = {"A": [13,700], "B": [12,650], "C": [6,250], "D": [6,400],"E": [5, 100]}bksl-nlbksl-nl# Calcule la valeur massique en divisant la 2ème valeur du tableau par la premièrebksl-nl# on ajoute cela à la valeur du dictionnairebksl-nlfor objet, (poids, prix) in inventaire.items():bksl-nl    inventaire[objet].append(prix/poids)bksl-nlbksl-nl# Trie le tableau en ordre décroissant suivant la valeur massique.bksl-nldef f(dico: dict, col = 2):bksl-nl    tableaupy-undtrié = sorted(dico.items(), key = lambda a: a[1][col], reverse=True)bksl-nl    return {clé:valeur for clé, valeur in tableaupy-undtrié}bksl-nlbksl-nlbksl-nlinventaire = f(inventaire, 2)bksl-nlbksl-nlpoidspy-undmax = 30bksl-nlbksl-nl# Algorithme gloutonbksl-nldef gloutonnerie(inventaire : dict, poidspy-undmax:int=30):bksl-nl    sacpy-undapy-unddos = []bksl-nl    poidspy-undsac = 0bksl-nl    for objet, (poids, prix, vpy-undmassique) in inventaire.items():bksl-nl        if poidspy-undsac + poids &lt;= poidspy-undmax:bksl-nl            sacpy-undapy-unddos.append(objet)bksl-nl            poidspy-undsac += poidsbksl-nl    return sacpy-undapy-unddos, poidspy-undsacbksl-nlbksl-nlprint(gloutonnerie(inventaire, poidspy-undmax))bksl-nlbksl-nlbksl-nl</span><span id="corr_content_editor_13" class="hide" data-strudel=""></span></p>
<p><strong>A</strong></p>
<p><strong>Z</strong></p>

              
    <script src="./js/ide.js"></script> 

            </article>
          </div>
        </div>
        
          <a href="#" class="md-top md-icon" data-md-component="top" data-md-state="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12Z"/></svg>
            Retour en haut de la page
          </a>
        
      </main>
      
        <footer class="md-footer">
  
    <nav class="md-footer__inner md-grid" aria-label="Pied de page">
      
      
        
        <a href="install_ide/" class="md-footer__link md-footer__link--next" aria-label="Suivant: Guide de l&#39;IDE" rel="next">
          <div class="md-footer__title">
            <div class="md-ellipsis">
              <span class="md-footer__direction">
                Suivant
              </span>
              Guide de l'IDE
            </div>
          </div>
          <div class="md-footer__button md-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4Z"/></svg>
          </div>
        </a>
      
    </nav>
  
  <div class="md-footer-meta md-typeset">
    <div class="md-footer-meta__inner md-grid">
      <div class="md-copyright">
  
  
    Made with
    <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noopener">
      Material for MkDocs
    </a>
  
</div>
      
        <div class="md-social">
  
    
    
    <a href="https://mooc-forums.inria.fr/moocnsi/" target="_blank" rel="noopener" title="Le forum des enseignants de NSI" class="md-social__link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"/></svg>
    </a>
  
    
    
    <a href="https://linuxfr.org/" target="_blank" rel="noopener" title="Promouvoir les Logiciels libres" class="md-social__link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"/></svg>
    </a>
  
    
    
    <a href="https://fr.wikipedia.org" target="_blank" rel="noopener" title="L&#39;encyclopédie libre que chacun peut améliorer" class="md-social__link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m640 51.2-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z"/></svg>
    </a>
  
    
    
    <a href="mailto:prof-bouillot@protonmail.com" target="_blank" rel="noopener" title="Écrire à l&#39;auteur" class="md-social__link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m511.6 36.86-64 415.1a32.008 32.008 0 0 1-31.65 27.147c-4.188 0-8.319-.815-12.29-2.472l-122.6-51.1-50.86 76.29C226.3 508.5 219.8 512 212.8 512c-11.5 0-20.8-9.3-20.8-20.8v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96 122.3 360.3 19.69 317.5C8.438 312.8.812 302.2.062 289.1s5.47-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/></svg>
    </a>
  
</div>
      
    </div>
  </div>
</footer>
      
    </div>
    <div class="md-dialog" data-md-component="dialog">
      <div class="md-dialog__inner md-typeset"></div>
    </div>
    <script id="__config" type="application/json">{"base": ".", "features": ["navigation.instant", "navigation.tabs", "navigation.tabs.sticky", "navigation.sections", "navigation.expand", "navigation.top", "toc.integrate", "header.autohide"], "search": "assets/javascripts/workers/search.2a1c317c.min.js", "translations": {"clipboard.copied": "Copi\u00e9 dans le presse-papier", "clipboard.copy": "Copier dans le presse-papier", "search.config.lang": "fr", "search.config.pipeline": "trimmer, stopWordFilter", "search.config.separator": "[\\s\\-]+", "search.placeholder": "Rechercher", "search.result.more.one": "1 de plus sur cette page", "search.result.more.other": "# de plus sur cette page", "search.result.none": "Aucun document trouv\u00e9", "search.result.one": "1 document trouv\u00e9", "search.result.other": "# documents trouv\u00e9s", "search.result.placeholder": "Taper pour d\u00e9marrer la recherche", "search.result.term.missing": "Non trouv\u00e9", "select.version.title": "S\u00e9lectionner la version"}}</script>
    
    
      <script src="assets/javascripts/bundle.ed9748b7.min.js"></script>
      
        <script src="xtra/javascripts/mathjax-config.js"></script>
      
        <script src="javascripts/config.js"></script>
      
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      
        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      
        <script src="xtra/javascripts/interpreter.js"></script>
      
    
  </body>
</html>
