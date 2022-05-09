# tests

assert dentiste("j'ai mal") == 'aia'
assert dentiste("il fait chaud") == 'iaiau'
assert dentiste("") == ''


# pas d'autres tests

assert dentiste("a"*20 + "b"*10 + "e") == 'a'*20 + 'e'
assert dentiste("b"*10 + "e" + "a"*20) == 'e' + 'a'*20 
assert dentiste("ab"*10) == 'a'*10
assert dentiste("aeiouy"*10) == 'aeiouy'*10
assert dentiste("z"*100 + 'y') == 'y'
