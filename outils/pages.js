// Génère les pages de référencement : une page par quiz en français (<id>/) et en anglais (en/<id>/),
// le plan du site (sitemap.xml) et la liste de liens de la page d'accueil.
// Usage : node outils/pages.js   (à relancer après chaque ajout de questions)
const fs = require('fs'), path = require('path');
const DIR = path.join(__dirname, '..');
const SITE = 'https://quizzmatch.com/';
// mêmes fichiers et même ordre que dans index.html
const FILES = ['questions.js', 'questions-plus.js', 'questions-en.js', 'niveaux.js']
  .concat((fs.readFileSync(path.join(DIR, 'index.html'), 'utf8').match(/banque\/[a-z]+\.js/g) || []));
const load = lang => new Function(FILES.map(f => fs.readFileSync(path.join(DIR, f), 'utf8')).join('\n') +
  `\n${lang === 'en' ? 'applyEnglish();' : ''} applyLevels(); addBank('${lang}'); return { QUIZ, CATS };`)();
const FR = load('fr'), EN = load('en');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const KEYS = Object.keys(FR.QUIZ);

const T = {
  fr: { title: q => `Quiz ${q.name} gratuit : ${q.qs.length} questions | QuizzMatch`, persoTitle: q => `${q.name} Test gratuit | QuizzMatch`,
        desc: q => `${q.sub}. Quiz gratuit de ${q.qs.length} questions sur ${q.name.toLowerCase()}, 10 tirées au hasard à chaque partie. Joue, marque des points et défie tes amis.`,
        persoDesc: q => `${q.sub} gratuit : ${q.qs.length} questions pour découvrir ton profil, puis compare avec tes amis.`,
        intro: q => `Teste tes connaissances avec notre quiz « ${q.name} » : ${q.qs.length} questions, 10 tirées au hasard à chaque partie, 20 secondes par question. Plus tu réponds vite, plus tu gagnes de points. À la fin, envoie le défi à tes amis : ils jouent les mêmes questions et voient ton score à battre.`,
        persoIntro: q => `${q.qs.length} questions rapides pour savoir quel profil te correspond. Pas de bonne ou de mauvaise réponse : réponds spontanément, puis partage ton résultat avec tes amis.`,
        play: 'Jouer maintenant', examples: 'Exemples de questions', answer: 'Voir la réponse', others: 'Autres quiz', all: 'Tous les quiz', home: 'Accueil', profiles: 'Les profils possibles', lang: 'fr' },
  en: { title: q => `Free ${q.name} quiz: ${q.qs.length} questions | QuizzMatch`, persoTitle: q => `${q.name} Free test | QuizzMatch`,
        desc: q => `${q.sub}. A free ${q.qs.length}-question ${q.name.toLowerCase()} quiz, 10 random questions every game. Play, score points and challenge your friends.`,
        persoDesc: q => `Free ${q.sub.toLowerCase()}: ${q.qs.length} questions to find your profile, then compare with your friends.`,
        intro: q => `Test your knowledge with our "${q.name}" quiz: ${q.qs.length} questions, 10 drawn at random every game, 20 seconds per question. The faster you answer, the more points you score. At the end, send the challenge to your friends: they play the same questions and see the score to beat.`,
        persoIntro: q => `${q.qs.length} quick questions to find out which profile fits you. No right or wrong answers: go with your gut, then share your result with your friends.`,
        play: 'Play now', examples: 'Sample questions', answer: 'Show the answer', others: 'More quizzes', all: 'All quizzes', home: 'Home', profiles: 'Possible profiles', lang: 'en' },
};
const url = (lang, k) => SITE + (lang === 'en' ? 'en/' : '') + (k ? k + '/' : '');
const CSS = `:root{--bg:#0b0a10;--card:#15131d;--ink:#f4f1ea;--muted:#a39db3;--line:#2a2637;--accent:#e2bd6e;--goldgrad:linear-gradient(135deg,#f6dd9a,#d4a547 55%,#b8862d);color-scheme:dark}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.55 "Nunito Sans",system-ui,sans-serif}
main{max-width:720px;margin:0 auto;padding:20px 16px 48px}a{color:var(--accent)}
.top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}.logo{font:800 24px "Bricolage Grotesque",system-ui;text-decoration:none;color:var(--ink)}.logo b{background:var(--goldgrad);-webkit-background-clip:text;background-clip:text;color:transparent}
h1{font:800 clamp(28px,7vw,40px)/1.1 "Bricolage Grotesque",system-ui;margin:8px 0 12px}h2{font:800 22px "Bricolage Grotesque",system-ui;margin:28px 0 12px}
.lead{color:var(--muted)}.play{display:inline-block;background:var(--goldgrad);color:#17130a;font-weight:800;padding:14px 22px;border-radius:14px;text-decoration:none;margin:8px 0}
ol{padding-left:22px}li{margin:10px 0}details{color:var(--muted)}summary{cursor:pointer;color:var(--accent);font-weight:700}
.chips{display:flex;flex-wrap:wrap;gap:8px;padding:0;list-style:none}.chips li{margin:0}.chips a{display:block;background:var(--card);border:1px solid var(--line);border-radius:99px;padding:6px 12px;text-decoration:none;color:var(--ink);font-weight:700;font-size:15px}
footer{margin-top:36px;color:var(--muted);font-size:14px}`;

function page(lang, k) {
  const D = lang === 'en' ? EN : FR, t = T[lang], q = D.QUIZ[k], perso = q.type === 'perso';
  const pool = q.qs.filter(x => lang !== 'en' || !x.frOnly);
  const sample = perso ? pool : pool.filter((_, i) => i % 4 === 0).slice(0, 10);
  const play = lang === 'en' ? SITE + '?lang=en#' + k : SITE + '#' + k;
  const vf = lang === 'en' ? ['True', 'False'] : ['Vrai', 'Faux'];
  const qa = sample.map(x => perso ? `<li>${esc(x[0])}</li>`
    : `<li>${esc(x[0])}${q.type === 'vf' ? '' : `<br><small>${x[1].map(esc).join(' · ')}</small>`}<details><summary>${t.answer}</summary><b>${esc(q.type === 'vf' ? vf[x[2]] : x[1][x[2]])}</b> : ${esc(x[3])}</details></li>`).join('\n');
  const title = perso ? t.persoTitle(q) : t.title(q), desc = perso ? t.persoDesc(q) : t.desc(q);
  const others = KEYS.filter(o => o !== k).map(o => `<li><a href="${url(lang, o)}">${D.QUIZ[o].emo} ${esc(D.QUIZ[o].name)}</a></li>`).join('');
  const ld = { '@context': 'https://schema.org', '@type': 'Quiz', name: q.name, description: desc, inLanguage: lang, url: url(lang, k),
    educationalLevel: 'beginner', isAccessibleForFree: true };
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url(lang, k)}">
<link rel="alternate" hreflang="fr" href="${url('fr', k)}">
<link rel="alternate" hreflang="en" href="${url('en', k)}">
<link rel="alternate" hreflang="x-default" href="${url('fr', k)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url(lang, k)}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,700;6..12,800&display=swap">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9506500644223987" crossorigin="anonymous"></script>
</head>
<body><main>
<div class="top"><a class="logo" href="${lang === 'en' ? SITE + '?lang=en' : SITE}">Quizz<b>Match</b></a><a href="${url(lang === 'en' ? 'fr' : 'en', k)}">${lang === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}</a></div>
<h1>${q.emo} ${esc(q.name)}</h1>
<p class="lead">${esc(perso ? t.persoIntro(q) : t.intro(q))}</p>
<a class="play" href="${play}">${t.play} →</a>
<h2>${t.examples}</h2>
<ol>
${qa}
</ol>
${perso ? `<h2>${t.profiles}</h2><ul>${q.profiles.map(p => `<li><b>${esc(p[0])}</b> : ${esc(p[1])}</li>`).join('')}</ul>` : ''}
<a class="play" href="${play}">${t.play} →</a>
<h2>${t.others}</h2>
<ul class="chips">${others}</ul>
<footer>© QuizzMatch · <a href="${lang === 'en' ? SITE + '?lang=en' : SITE}">${t.home}</a></footer>
</main></body>
</html>
`;
}

const urls = [SITE];
for (const lang of ['fr', 'en']) for (const k of KEYS) {
  const dir = path.join(DIR, lang === 'en' ? 'en' : '', k);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(lang, k));
  urls.push(url(lang, k));
}
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(DIR, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
// liens en dur sur l'accueil, pour que Google trouve toutes les pages
const nav = `<!--LIENS--><details class="allq"><summary>Toutes les pages · All pages</summary><ul>${KEYS.map(k => `<li><a href="${k}/">${FR.QUIZ[k].emo} ${esc(FR.QUIZ[k].name)}</a></li>`).join('')}${KEYS.map(k => `<li><a href="en/${k}/" hreflang="en">${EN.QUIZ[k].emo} ${esc(EN.QUIZ[k].name)}</a></li>`).join('')}</ul></details><!--/LIENS-->`;
const idx = path.join(DIR, 'index.html'); let html = fs.readFileSync(idx, 'utf8');
html = html.includes('<!--LIENS-->') ? html.replace(/<!--LIENS-->[\s\S]*?<!--\/LIENS-->/, nav) : html.replace('<canvas id="fx"', nav + '\n<canvas id="fx"');
fs.writeFileSync(idx, html);
console.log(urls.length, 'pages dans le plan du site');
