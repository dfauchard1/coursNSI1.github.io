import io
sortie = io.StringIO() 

benchmark = ['somme([]) == None', 'somme([1]) == 1', 'somme([1,2]) == 3', 'somme([-1,1]) == 0']

failed = 0
for k, test in enumerate(benchmark, 1):
    
    if eval(test):
        sortie.write(f'Test {k} réussi :  {test} \\n')
    else:
        sortie.write(f'Test {k} échoué :  {test} \\n')
        failed += 1
    
if not failed :
    sortie.write("Bravo vous avez réussi tous les tests !!! \\n \\n")
else :
    sortie.write("{failed} tests ont échoué. Reprenez votre code !!! \\n \\n")

sortie.getvalue()
