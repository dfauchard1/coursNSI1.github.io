def tableau_markdown(liste: list) -> str:
    lignes = ['|n|']+[f'{i}|' for i in range(len(liste))]+['\n']
    lignes.extend(['|']+['-|']*(len(liste)+1) +['\n'])
    lignes.extend(['|u_n|']+[f'{liste[i]}|' for i in range(len(liste))])
    print(lignes)
    return "".join(lignes)

print(tableau_markdown([0, 1, 1, 2, 3, 5, 8, 13]))



print(tableau_markdown([0, 1, 1, 2, 3, 5, 8, 13]))
