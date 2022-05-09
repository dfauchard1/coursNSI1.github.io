assert longueur_ajout([], []) == 0, 'longueur_ajout([], []) == 0'
assert longueur_ajout([1, 3, 5, 5],[]) == 4, 'longueur_ajout([1, 3, 5, 5],[]) == 4'
assert longueur_ajout([0]*100, [1]*20) == 120, 'longueur_ajout([0]*100, [1]*20) == 120'