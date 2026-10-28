# QuizzMatch

Quiz gratuits en français et en anglais, 3 niveaux, défis entre amis et classement de la semaine.
En ligne sur https://quizzmatch.com

- `index.html` : le jeu (une seule page)
- `questions.js`, `questions-plus.js`, `questions-en.js`, `niveaux.js` : les premières questions (français, anglais, niveaux)
- `banque/<quiz>.js` : le reste des questions, français et anglais sur la même ligne avec leur niveau ; `banque/charge.js` les ajoute aux quiz
- `outils/verif.js` : vérifie la banque (format, doublons, nombre de questions par niveau) — `node outils/verif.js`
- `outils/pages.js` : régénère les pages par quiz et `sitemap.xml` — `node outils/pages.js`

Pour ajouter un fichier `banque/xxx.js`, l'ajouter aussi dans la liste des `<script>` de `index.html`.
