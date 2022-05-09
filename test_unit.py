from random import choice 

def sommation(T: list) -> float:
    a = 0
    for nombre in T:
        a = a+nombre
    return a

def somme(L):
    return  sum(L)

def test_unitaire(numerous_benchmark):
    failed = 0
    success_smb = ['🔥','✨','🌠','✅','🥇','🎖']
    fail_smb = ['🌩','🙈','🙉','⛑','🌋','💣']
    if type(numerous_benchmark[0]) not in [list, tuple]:
        type_bench = 'multiple' 
        numerous_benchmark = (numerous_benchmark, )

    for benchmark in numerous_benchmark:
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

b1 = ['somme([]) == None', 'somme([1]) == 1', 'somme([1,2]) == 3', 'somme([-1,1]) == 0']
b2 = ['somme([]) == None', 'somme([1]) == 1', 'somme([1,2]) == 3', 'somme([-1,1]) == 0']
benchmark = b1

test_unitaire(benchmark)