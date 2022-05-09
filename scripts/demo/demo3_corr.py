adage = "Mon chien est beau."

def nombre_mots(phrase: str) -> int:
    tableau_mots = phrase.split(' ')
    return len(tableau_mots) if len(phrase)>0 else 0