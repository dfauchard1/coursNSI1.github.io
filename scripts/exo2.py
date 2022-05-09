def sommation(T: list) -> int:
    a = 0
    for nombre in T:
        a = a + nombre
    return a

def somme(L: list) -> None or int:
    return None if len(L) == 0 else sum(L)