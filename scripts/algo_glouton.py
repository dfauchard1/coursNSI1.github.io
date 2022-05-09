# dictionnaire :
#   - clé : nom de l'objet
#   - valeur : tableau [poids, prix]
inventaire = {"A": [13,700], "B": [12,650], "C": [6,250], "D": [6,400],"E": [5, 100]}

# Calcule la valeur massique en divisant la 2ème valeur du tableau par la première
# on ajoute cela à la valeur du dictionnaire
for objet, (poids, prix) in inventaire.items():
    inventaire[objet].append(prix/poids)

# Trie le tableau en ordre décroissant suivant la valeur massique.
def f(dico: dict, col = 2):
    tableau_trié = sorted(dico.items(), key = lambda a: a[1][col], reverse=True)
    return {clé:valeur for clé, valeur in tableau_trié}


inventaire = f(inventaire, 2)

poids_max = 30

# Algorithme glouton
def gloutonnerie(inventaire : dict, poids_max:int=30):
    sac_a_dos = []
    poids_sac = 0
    for objet, (poids, prix, v_massique) in inventaire.items():
        if poids_sac + poids <= poids_max:
            sac_a_dos.append(objet)
            poids_sac += poids
    return sac_a_dos, poids_sac

print(gloutonnerie(inventaire, poids_max))

