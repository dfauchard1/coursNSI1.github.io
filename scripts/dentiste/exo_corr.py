voyelles = ['a', 'e', 'i', 'o', 'u', 'y']

def dentiste(texte):
    resultat = ''
    for lettre in texte:
        if lettre in voyelles:
            resultat = resultat + lettre
    return resultat
