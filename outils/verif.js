// Vérifie la banque de questions : format des lignes, doublons, nombre de questions par niveau (français et anglais).
// Usage : node outils/verif.js
const fs = require('fs'), path = require('path');
const DIR = path.join(__dirname, '..');
const files = ['questions.js', 'questions-plus.js', 'questions-en.js', 'niveaux.js'].concat(fs.readdirSync(path.join(DIR, 'banque')).filter(f => f !== 'charge.js').map(f => 'banque/' + f), ['banque/charge.js']);
const load = lang => new Function(files.map(f => fs.readFileSync(path.join(DIR, f), 'utf8')).join('\n') +
  `\n${lang === 'en' ? 'applyEnglish();' : ''} applyLevels(); addBank('${lang}'); return { QUIZ, BANQUE };`)();
let errors = 0;
const { BANQUE } = load('fr');
for (const k in BANQUE) BANQUE[k].trim().split('\n').forEach((l, i) => {
  const [a, b] = l.split(' || '), fr = a.split(' | '), en = (b || '').split(' | '), lv = fr[0].trim()[0];
  const bad = m => { errors++; console.log(`ERREUR ${k} ligne ${i + 1} : ${m}\n  ${l.slice(0, 120)}`); };
  if (!'fmdpP'.includes(lv)) bad('niveau inconnu');
  if (!b) bad('pas de partie anglaise');
});
for (const lang of ['fr', 'en']) {
  const { QUIZ } = load(lang);
  console.log(`\n== ${lang}`);
  for (const k in QUIZ) {
    const q = QUIZ[k], seen = new Set(), n = { f: 0, m: 0, d: 0 };
    q.qs.forEach((x, i) => {
      if (x.frOnly) return;
      const t = String(x[0]).toLowerCase(); if (seen.has(t)) { errors++; console.log(`DOUBLON ${lang} ${k} : ${x[0]}`); } seen.add(t);
      if (q.type !== 'vf' && (!Array.isArray(x[1]) || x[1].length !== 4 || x[1].some(c => !c) || new Set(x[1]).size !== 4)) { errors++; console.log(`CHOIX ${lang} ${k} #${i} : ${JSON.stringify(x)}`); }
      if (q.type !== 'perso' && !x[3]) { errors++; console.log(`EXPLICATION ${lang} ${k} #${i} : ${x[0]}`); }
      n[x.lv || 'm']++;
    });
    if (q.profiles && q.profiles.length !== 4) { errors++; console.log(`PROFILS ${k} : ${q.profiles.length}`); }
    console.log(`${k.padEnd(11)} ${String(q.qs.filter(x => !x.frOnly).length).padStart(3)} questions   facile ${n.f}  moyen ${n.m}  difficile ${n.d}${q.type === 'perso' ? '  (test)' : ''}`);
  }
}
console.log(errors ? `\n${errors} problème(s)` : '\nAucun problème');
process.exit(errors ? 1 : 0);
