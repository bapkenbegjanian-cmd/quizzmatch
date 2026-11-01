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
        faq: q => [[`Le quiz « ${q.name} » est-il gratuit ?`, `Oui. Tous les quiz de QuizzMatch sont gratuits, sans inscription ni application à installer. Il suffit d'un navigateur, sur téléphone ou ordinateur.`],
          [`Combien de questions compte le quiz « ${q.name} » ?`, `${q.qs.length} questions, réparties en trois niveaux (facile, moyen, difficile). Chaque partie en tire 10 au hasard, donc deux parties ne se ressemblent jamais.`],
          ['Comment marque-t-on des points ?', 'Chaque bonne réponse rapporte des points, avec un bonus si tu réponds vite. Au niveau difficile, le chrono est plus court mais le bonus est plus gros.'],
          ['Peut-on jouer contre des amis ?', `Oui. À la fin d'une partie, partage le lien du défi : tes amis jouent exactement les mêmes questions et voient ton score à battre. Le mode Duel permet aussi de s'affronter en direct, chacun sur son téléphone.`]],
        persoFaq: q => [[`Le test « ${q.name} » est-il gratuit ?`, 'Oui, sans inscription. Réponds spontanément, il n\'y a pas de mauvaise réponse.'], ['Mes réponses sont-elles enregistrées ?', 'Non. Le résultat est calculé dans ton navigateur et rien n\'est envoyé.']],
        faqTitle: 'Questions fréquentes', cat: 'Catégorie',
        play: 'Jouer maintenant', examples: 'Exemples de questions', answer: 'Voir la réponse', others: 'Autres quiz', all: 'Tous les quiz', home: 'Accueil', profiles: 'Les profils possibles', lang: 'fr' },
  en: { title: q => `Free ${q.name} quiz: ${q.qs.length} questions | QuizzMatch`, persoTitle: q => `${q.name} Free test | QuizzMatch`,
        desc: q => `${q.sub}. A free ${q.qs.length}-question ${q.name.toLowerCase()} quiz, 10 random questions every game. Play, score points and challenge your friends.`,
        persoDesc: q => `Free ${q.sub.toLowerCase()}: ${q.qs.length} questions to find your profile, then compare with your friends.`,
        intro: q => `Test your knowledge with our "${q.name}" quiz: ${q.qs.length} questions, 10 drawn at random every game, 20 seconds per question. The faster you answer, the more points you score. At the end, send the challenge to your friends: they play the same questions and see the score to beat.`,
        persoIntro: q => `${q.qs.length} quick questions to find out which profile fits you. No right or wrong answers: go with your gut, then share your result with your friends.`,
        faq: q => [[`Is the "${q.name}" quiz free?`, 'Yes. Every QuizzMatch quiz is free, with no sign-up and no app to install. All you need is a browser, on your phone or computer.'],
          [`How many questions are in the "${q.name}" quiz?`, `${q.qs.length} questions across three levels (easy, medium, hard). Each game draws 10 at random, so no two games are the same.`],
          ['How do you score points?', 'Every right answer scores points, with a bonus if you answer quickly. On hard, the timer is shorter but the bonus is bigger.'],
          ['Can I play against friends?', 'Yes. At the end of a game, share the challenge link: your friends play exactly the same questions and see the score to beat. Duel mode also lets you play live, each on your own phone.']],
        persoFaq: q => [[`Is the "${q.name}" test free?`, 'Yes, with no sign-up. Go with your gut, there are no wrong answers.'], ['Are my answers saved?', 'No. The result is worked out in your browser and nothing is sent.']],
        faqTitle: 'Frequently asked questions', cat: 'Category',
        play: 'Play now', examples: 'Sample questions', answer: 'Show the answer', others: 'More quizzes', all: 'All quizzes', home: 'Home', profiles: 'Possible profiles', lang: 'en' },
};
const url = (lang, k) => SITE + (lang === 'en' ? 'en/' : '') + (k ? k + '/' : '');
const catUrl = (lang, id) => SITE + (lang === 'en' ? 'en/category/' : 'categorie/') + id + '/';
const INFO = { about: ['a-propos', 'about'], contact: ['contact', 'contact'], privacy: ['confidentialite', 'privacy'], legal: ['mentions-legales', 'legal'] };
const infoUrl = (lang, id) => SITE + (lang === 'en' ? 'en/' + INFO[id][1] : INFO[id][0]) + '/';
const foot = lang => { const fr = lang !== 'en';
  return `<footer><p>${[['about', fr ? 'À propos' : 'About'], ['contact', 'Contact'], ['privacy', fr ? 'Confidentialité' : 'Privacy'], ['legal', fr ? 'Mentions légales' : 'Legal notice']]
    .map(([id, n]) => `<a href="${infoUrl(lang, id)}">${n}</a>`).join(' · ')}</p><p>© 2026 QuizzMatch · ${fr ? 'Quiz gratuits en français et en anglais' : 'Free quizzes in French and English'} · <a href="${fr ? SITE : SITE + '?lang=en'}">${fr ? 'Accueil' : 'Home'}</a></p></footer>`; };

const CSS = `:root{--bg:#0b0a10;--card:#15131d;--ink:#f4f1ea;--muted:#a39db3;--line:#2a2637;--accent:#e2bd6e;--goldgrad:linear-gradient(135deg,#f6dd9a,#d4a547 55%,#b8862d);color-scheme:dark}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.55 "Nunito Sans",system-ui,sans-serif}
main{max-width:720px;margin:0 auto;padding:20px 16px 48px}a{color:var(--accent)}
.top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}.logo{font:800 24px "Bricolage Grotesque",system-ui;text-decoration:none;color:var(--ink)}.logo b{background:var(--goldgrad);-webkit-background-clip:text;background-clip:text;color:transparent}
h1{font:800 clamp(28px,7vw,40px)/1.1 "Bricolage Grotesque",system-ui;margin:8px 0 12px}h2{font:800 22px "Bricolage Grotesque",system-ui;margin:28px 0 12px}
.lead{color:var(--muted)}.play{display:inline-block;background:var(--goldgrad);color:#17130a;font-weight:800;padding:14px 22px;border-radius:14px;text-decoration:none;margin:8px 0}
ol{padding-left:22px}li{margin:10px 0}details{color:var(--muted)}summary{cursor:pointer;color:var(--accent);font-weight:700}
.chips{display:flex;flex-wrap:wrap;gap:8px;padding:0;list-style:none}.chips li{margin:0}.chips a{display:block;background:var(--card);border:1px solid var(--line);border-radius:99px;padding:6px 12px;text-decoration:none;color:var(--ink);font-weight:700;font-size:15px}
footer{margin-top:36px;color:var(--muted);font-size:14px;border-top:1px solid var(--line);padding-top:12px}footer p{margin:6px 0}
h3{font-size:18px;margin:18px 0 6px}.crumbs{font-size:14px;color:var(--muted)}.crumbs a{text-decoration:none}
.cards{display:grid;gap:12px;padding:0;list-style:none}.cards li{margin:0}.cards a{display:block;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:14px 16px;text-decoration:none;color:var(--ink)}.cards b{font-size:18px}.cards small{display:block;color:var(--muted)}
form{display:grid;gap:10px}input,textarea{font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px}textarea{min-height:140px}button{font:inherit;font-weight:800;border:0;border-radius:14px;padding:14px;background:var(--goldgrad);color:#17130a;cursor:pointer}
.note{color:var(--muted);font-size:15px}`;

function page(lang, k) {
  const D = lang === 'en' ? EN : FR, t = T[lang], q = D.QUIZ[k], perso = q.type === 'perso';
  const pool = q.qs.filter(x => lang !== 'en' || !x.frOnly);
  const sample = perso ? pool : pool.filter((_, i) => i % 3 === 0).slice(0, 12);
  const play = lang === 'en' ? SITE + '?lang=en#' + k : SITE + '#' + k;
  const vf = lang === 'en' ? ['True', 'False'] : ['Vrai', 'Faux'];
  const qa = sample.map(x => perso ? `<li>${esc(x[0])}</li>`
    : `<li>${esc(x[0])}${q.type === 'vf' ? '' : `<br><small>${x[1].map(esc).join(' · ')}</small>`}<details><summary>${t.answer}</summary><b>${esc(q.type === 'vf' ? vf[x[2]] : x[1][x[2]])}</b> : ${esc(x[3])}</details></li>`).join('\n');
  const title = perso ? t.persoTitle(q) : t.title(q), desc = perso ? t.persoDesc(q) : t.desc(q);
  const others = KEYS.filter(o => o !== k).map(o => `<li><a href="${url(lang, o)}">${D.QUIZ[o].emo} ${esc(D.QUIZ[o].name)}</a></li>`).join('');
  const faq = perso ? t.persoFaq(q) : t.faq(q), cat = D.CATS.find(c => c.id === q.cat);
  const ld = [{ '@context': 'https://schema.org', '@type': 'Quiz', name: q.name, description: desc, inLanguage: lang, url: url(lang, k),
    educationalLevel: 'beginner', isAccessibleForFree: true, about: cat ? cat.name : undefined },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([a, b]) => ({ '@type': 'Question', name: a, acceptedAnswer: { '@type': 'Answer', text: b } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'QuizzMatch', item: url(lang) },
      ...(cat ? [{ '@type': 'ListItem', position: 2, name: cat.name, item: catUrl(lang, cat.id) }] : []),
      { '@type': 'ListItem', position: cat ? 3 : 2, name: q.name, item: url(lang, k) }] }];
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
<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "c26abd6fbc144c2c9333e77a7b090778"}'></script><!-- End Cloudflare Web Analytics -->
</head>
<body><main>
<div class="top"><a class="logo" href="${lang === 'en' ? SITE + '?lang=en' : SITE}">Quizz<b>Match</b></a><a href="${url(lang === 'en' ? 'fr' : 'en', k)}">${lang === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}</a></div>
<nav class="crumbs"><a href="${url(lang)}">QuizzMatch</a>${cat ? ` › <a href="${catUrl(lang, cat.id)}">${cat.emo} ${esc(cat.name)}</a>` : ''}</nav>
<h1>${q.emo} ${esc(q.name)}</h1>
<p class="lead">${esc(perso ? t.persoIntro(q) : t.intro(q))}</p>
<a class="play" href="${play}">${t.play} →</a>
<h2>${t.examples}</h2>
<ol>
${qa}
</ol>
${perso ? `<h2>${t.profiles}</h2><ul>${q.profiles.map(p => `<li><b>${esc(p[0])}</b> : ${esc(p[1])}</li>`).join('')}</ul>` : ''}
<h2>${t.faqTitle}</h2>
${faq.map(([a, b]) => `<h3>${esc(a)}</h3><p>${esc(b)}</p>`).join('\n')}
<a class="play" href="${play}">${t.play} →</a>
<h2>${t.others}</h2>
<ul class="chips">${others}</ul>
${foot(lang)}
</main></body>
</html>
`;
}

// Pages simples (à propos, contact, catégories…) avec le même habillage que les pages de quiz
const HEAD_EXTRA = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9506500644223987" crossorigin="anonymous"></script>
<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "c26abd6fbc144c2c9333e77a7b090778"}'></script><!-- End Cloudflare Web Analytics -->`;
function shell(lang, o) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${o.url}">
<link rel="alternate" hreflang="fr" href="${o.fr}">
<link rel="alternate" hreflang="en" href="${o.en}">
<link rel="alternate" hreflang="x-default" href="${o.fr}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.desc)}">
<meta property="og:url" content="${o.url}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,700;6..12,800&display=swap">
<style>${CSS}</style>
${o.ld ? `<script type="application/ld+json">${JSON.stringify(o.ld)}</script>\n` : ''}${HEAD_EXTRA}
</head>
<body><main>
<div class="top"><a class="logo" href="${lang === 'en' ? SITE + '?lang=en' : SITE}">Quizz<b>Match</b></a><a href="${lang === 'en' ? o.fr : o.en}">${lang === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}</a></div>
${o.body}
${foot(lang)}
</main></body>
</html>
`;
}
const write = (u, html) => { const dir = path.join(DIR, u.replace(SITE, '')); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, 'index.html'), html); };

const games = D => KEYS.filter(k => D.QUIZ[k].type !== 'perso');
const nQ = D => games(D).reduce((n, k) => n + D.QUIZ[k].qs.filter(x => !x.frOnly).length, 0);
const cnt = (D, lang) => (Math.floor(nQ(D) / 100) * 100).toLocaleString(lang === 'en' ? 'en-GB' : 'fr-FR');
const UPDATED = { fr: '1er novembre 2026', en: '1 November 2026' };
const SB = 'https://ctgjnpxdaqdnrcxjwnkp.supabase.co/rest/v1/messages', SBK = 'sb_publishable_mz--wiLicR1GMDd2b3Fd2g_ewLTbr9h';

const INFO_PAGES = {
  about: {
    fr: D => ({ title: 'À propos de QuizzMatch', desc: `QuizzMatch est un site indépendant de quiz gratuits : ${games(D).length} quiz, plus de ${cnt(D, 'fr')} questions, en français et en anglais.`, body: `<h1>À propos de QuizzMatch</h1>
<p class="lead">QuizzMatch est un site indépendant de quiz gratuits, pensé pour se jouer entre amis, sur téléphone comme sur ordinateur.</p>
<h2>Ce que propose le site</h2>
<p>Le site compte aujourd'hui <b>${games(D).length} quiz</b> et <b>plus de ${cnt(D, 'fr')} questions</b>, répartis en catégories : culture générale, histoire, géographie, sciences, sport, cinéma, séries, musique, mangas, langues et tests de personnalité. Chaque quiz existe en trois niveaux (facile, moyen, difficile) et chaque partie tire 10 questions au hasard.</p>
<p>Après chaque réponse, une courte explication donne le contexte : le but est d'apprendre quelque chose, pas seulement de compter les points.</p>
<h2>Jouer avec ses amis</h2>
<p>À la fin d'une partie, tu peux envoyer un lien de défi : tes amis jouent exactement les mêmes questions et voient ton score à battre. Le mode Duel permet aussi de s'affronter en direct, chacun sur son téléphone. Un classement par niveau garde les meilleurs scores de chaque quiz.</p>
<h2>Comment les questions sont écrites</h2>
<p>Les questions sont rédigées à la main, puis relues et vérifiées avant publication : bonne réponse unique, mauvaises réponses plausibles, explication courte. Les questions sont traduites en anglais ; celles qui ne parlent qu'au public français ne sont proposées qu'en français. Si tu repères une erreur, <a href="${infoUrl('fr', 'contact')}">écris-nous</a> : elle est corrigée rapidement.</p>
<h2>Gratuit, sans inscription</h2>
<p>Aucun compte n'est nécessaire. Le site est financé par la publicité et par les dons des joueurs qui veulent le soutenir. Pour en savoir plus sur les données, consulte la <a href="${infoUrl('fr', 'privacy')}">politique de confidentialité</a>.</p>` }),
    en: D => ({ title: 'About QuizzMatch', desc: `QuizzMatch is an independent site of free quizzes: ${games(D).length} quizzes and over ${cnt(D, 'en')} questions, in French and English.`, body: `<h1>About QuizzMatch</h1>
<p class="lead">QuizzMatch is an independent site of free quizzes, built to be played with friends, on a phone or a computer.</p>
<h2>What the site offers</h2>
<p>The site currently has <b>${games(D).length} quizzes</b> and <b>over ${cnt(D, 'en')} questions</b> in categories such as general knowledge, history, geography, science, sport, film, TV series, music, manga, languages and personality tests. Every quiz has three levels (easy, medium, hard) and every game draws 10 questions at random.</p>
<p>After each answer, a short explanation gives the context: the goal is to learn something, not just to score points.</p>
<h2>Playing with friends</h2>
<p>At the end of a game you can send a challenge link: your friends play exactly the same questions and see the score to beat. Duel mode lets you play live, each on your own phone. A leaderboard for each level keeps the best scores of every quiz.</p>
<h2>How the questions are written</h2>
<p>Questions are written by hand, then reviewed and checked before going live: one right answer, plausible wrong answers, a short explanation. Questions that only make sense to a French audience are offered in French only. If you spot a mistake, <a href="${infoUrl('en', 'contact')}">let us know</a> and it will be fixed quickly.</p>
<h2>Free, no sign-up</h2>
<p>No account is needed. The site is funded by advertising and by donations from players who want to support it. To learn about data, read the <a href="${infoUrl('en', 'privacy')}">privacy policy</a>.</p>` }),
  },
  contact: {
    fr: () => ({ title: 'Contact | QuizzMatch', desc: 'Une question, une erreur dans un quiz, une idée de nouveau quiz ? Écris à l\'équipe de QuizzMatch.', body: `<h1>Contact</h1>
<p class="lead">Une erreur dans une question, une idée de nouveau quiz, une remarque sur le site ? Écris-nous, chaque message est lu.</p>
<form id="cf"><input name="nom" maxlength="60" placeholder="Ton prénom ou pseudo (facultatif)" aria-label="Prénom ou pseudo"><input name="contact" maxlength="120" placeholder="Ton e-mail, si tu veux une réponse (facultatif)" aria-label="E-mail" type="email"><textarea name="message" required minlength="5" maxlength="2000" placeholder="Ton message" aria-label="Message"></textarea><button type="submit">Envoyer</button><p class="note" id="cfm" role="status"></p></form>
<p class="note">Pour signaler une erreur, indique le nom du quiz et la question concernée. Les informations envoyées servent uniquement à te répondre (voir la <a href="${infoUrl('fr', 'privacy')}">politique de confidentialité</a>).</p>
${formJs('fr')}` }),
    en: () => ({ title: 'Contact | QuizzMatch', desc: 'A question, a mistake in a quiz, an idea for a new quiz? Write to the QuizzMatch team.', body: `<h1>Contact</h1>
<p class="lead">A mistake in a question, an idea for a new quiz, a comment about the site? Write to us, every message is read.</p>
<form id="cf"><input name="nom" maxlength="60" placeholder="Your first name or nickname (optional)" aria-label="Name or nickname"><input name="contact" maxlength="120" placeholder="Your email, if you'd like a reply (optional)" aria-label="Email" type="email"><textarea name="message" required minlength="5" maxlength="2000" placeholder="Your message" aria-label="Message"></textarea><button type="submit">Send</button><p class="note" id="cfm" role="status"></p></form>
<p class="note">To report a mistake, give the name of the quiz and the question. What you send is only used to reply to you (see the <a href="${infoUrl('en', 'privacy')}">privacy policy</a>).</p>
${formJs('en')}` }),
  },
  privacy: {
    fr: () => ({ title: 'Politique de confidentialité | QuizzMatch', desc: 'Quelles données QuizzMatch utilise, pourquoi, et comment les contrôler : classement, publicité, mesure d\'audience.', body: `<h1>Politique de confidentialité</h1>
<p class="note">Dernière mise à jour : ${UPDATED.fr}</p>
<h2>En résumé</h2>
<p>QuizzMatch ne demande aucun compte. Nous collectons le moins de données possible : un pseudo et des scores si tu choisis d'apparaître au classement, et des mesures d'audience anonymes. La publicité est fournie par Google.</p>
<h2>Données gardées sur ton appareil</h2>
<p>Tes records, ton pseudo et ta langue sont enregistrés dans le stockage local de ton navigateur. Ils ne quittent pas ton appareil, sauf pour le classement décrit ci-dessous. Tu peux les effacer en vidant les données du site dans ton navigateur.</p>
<h2>Classement et duels</h2>
<p>Si tu choisis un pseudo, ton pseudo, le quiz joué et ton score sont envoyés au classement public, hébergé par Supabase. Ces informations sont visibles par tous les joueurs : n'utilise pas ton nom complet. Les duels en direct échangent seulement ton pseudo et ton score avec ton adversaire, sans les conserver.</p>
<h2>Formulaire de contact</h2>
<p>Les messages envoyés depuis la page Contact (et ton e-mail, si tu le donnes) sont conservés uniquement pour te répondre, puis supprimés au bout de 12 mois au plus.</p>
<h2>Mesure d'audience</h2>
<p>Nous utilisons Cloudflare Web Analytics pour compter les visites. Cet outil ne dépose pas de cookie et ne sert pas à te suivre d'un site à l'autre.</p>
<h2>Publicité</h2>
<p>Le site peut afficher des annonces fournies par Google AdSense. Google et ses partenaires peuvent utiliser des cookies pour diffuser des annonces en fonction de tes visites sur ce site et sur d'autres sites. Dans l'Union européenne, ton consentement est demandé avant tout cookie publicitaire. Tu peux gérer la personnalisation des annonces sur <a href="https://adssettings.google.com" rel="noopener">adssettings.google.com</a> et en savoir plus sur <a href="https://policies.google.com/technologies/ads" rel="noopener">la façon dont Google utilise les données</a>.</p>
<h2>Dons</h2>
<p>Les dons passent par Ko-fi et son prestataire de paiement. QuizzMatch ne voit jamais tes informations bancaires.</p>
<h2>Tes droits</h2>
<p>Conformément au RGPD, tu peux demander l'accès, la correction ou la suppression de tes données (par exemple ton pseudo au classement) en nous écrivant depuis la <a href="${infoUrl('fr', 'contact')}">page Contact</a>. Tu peux aussi saisir la CNIL.</p>` }),
    en: () => ({ title: 'Privacy policy | QuizzMatch', desc: 'What data QuizzMatch uses, why, and how to control it: leaderboard, advertising, analytics.', body: `<h1>Privacy policy</h1>
<p class="note">Last updated: ${UPDATED.en}</p>
<h2>In short</h2>
<p>QuizzMatch needs no account. We collect as little data as possible: a nickname and scores if you choose to appear on the leaderboard, and anonymous visit statistics. Advertising is provided by Google.</p>
<h2>Data kept on your device</h2>
<p>Your best scores, nickname and language are stored in your browser's local storage. They stay on your device, except for the leaderboard described below. You can clear them by deleting the site's data in your browser.</p>
<h2>Leaderboard and duels</h2>
<p>If you pick a nickname, your nickname, the quiz played and your score are sent to the public leaderboard, hosted by Supabase. Every player can see them, so don't use your full name. Live duels only exchange your nickname and score with your opponent, without storing them.</p>
<h2>Contact form</h2>
<p>Messages sent from the Contact page (and your email, if you give it) are kept only to reply to you, then deleted after 12 months at most.</p>
<h2>Analytics</h2>
<p>We use Cloudflare Web Analytics to count visits. It sets no cookie and does not track you across sites.</p>
<h2>Advertising</h2>
<p>The site may show ads provided by Google AdSense. Google and its partners may use cookies to serve ads based on your visits to this and other sites. In the European Union, your consent is asked before any advertising cookie. You can manage ad personalisation at <a href="https://adssettings.google.com" rel="noopener">adssettings.google.com</a> and learn <a href="https://policies.google.com/technologies/ads" rel="noopener">how Google uses data</a>.</p>
<h2>Donations</h2>
<p>Donations go through Ko-fi and its payment provider. QuizzMatch never sees your bank details.</p>
<h2>Your rights</h2>
<p>Under the GDPR you can ask to access, correct or delete your data (for example your leaderboard nickname) by writing to us from the <a href="${infoUrl('en', 'contact')}">Contact page</a>. You can also complain to your data protection authority.</p>` }),
  },
  legal: {
    fr: () => ({ title: 'Mentions légales | QuizzMatch', desc: 'Éditeur, hébergement et propriété intellectuelle du site QuizzMatch.', body: `<h1>Mentions légales</h1>
<h2>Éditeur</h2>
<p>QuizzMatch (quizzmatch.com) est un site personnel édité à titre non professionnel par un particulier. Pour toute demande, utilise la <a href="${infoUrl('fr', 'contact')}">page Contact</a>.</p>
<h2>Hébergement</h2>
<p>Le site est hébergé par GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis. Le classement est hébergé par Supabase. Le nom de domaine est géré via Cloudflare, Inc.</p>
<h2>Propriété intellectuelle</h2>
<p>Les questions, explications et textes du site sont la propriété de QuizzMatch. Toute reproduction en masse sans autorisation est interdite. Les noms de marques, d'œuvres ou de personnes cités dans les questions appartiennent à leurs propriétaires respectifs et sont utilisés à titre d'information.</p>
<h2>Responsabilité</h2>
<p>Les questions sont vérifiées avec soin, mais une erreur reste possible. Signale-la-nous et elle sera corrigée. Les liens vers d'autres sites sont fournis pour information ; QuizzMatch n'est pas responsable de leur contenu.</p>
<h2>Données personnelles</h2>
<p>Voir la <a href="${infoUrl('fr', 'privacy')}">politique de confidentialité</a>.</p>` }),
    en: () => ({ title: 'Legal notice | QuizzMatch', desc: 'Publisher, hosting and intellectual property of the QuizzMatch website.', body: `<h1>Legal notice</h1>
<h2>Publisher</h2>
<p>QuizzMatch (quizzmatch.com) is a personal website published on a non-professional basis by a private individual. For any request, use the <a href="${infoUrl('en', 'contact')}">Contact page</a>.</p>
<h2>Hosting</h2>
<p>The site is hosted by GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. The leaderboard is hosted by Supabase. The domain name is managed through Cloudflare, Inc.</p>
<h2>Intellectual property</h2>
<p>The questions, explanations and texts on this site belong to QuizzMatch. Copying them in bulk without permission is not allowed. Brand names, works and people mentioned in questions belong to their respective owners and are used for information.</p>
<h2>Liability</h2>
<p>Questions are carefully checked, but a mistake is always possible. Tell us and it will be fixed. Links to other sites are given for information; QuizzMatch is not responsible for their content.</p>
<h2>Personal data</h2>
<p>See the <a href="${infoUrl('en', 'privacy')}">privacy policy</a>.</p>` }),
  },
};
function formJs(lang) {
  const ok = lang === 'en' ? 'Thanks, your message has been sent.' : 'Merci, ton message est bien envoyé.';
  const ko = lang === 'en' ? 'Sending failed. Please try again in a moment.' : 'L\'envoi n\'a pas marché. Réessaie dans un instant.';
  return `<script>
document.getElementById('cf').addEventListener('submit', async e => {
  e.preventDefault(); const f = e.target, m = document.getElementById('cfm'), b = f.querySelector('button'); b.disabled = true;
  const d = { nom: f.nom.value.trim() || null, contact: f.contact.value.trim() || null, message: f.message.value.trim() };
  try { const r = await fetch('${SB}', { method: 'POST', headers: { apikey: '${SBK}', 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify(d) });
    if (!r.ok) throw 0; f.reset(); m.textContent = ${JSON.stringify(ok)}; } catch (_) { m.textContent = ${JSON.stringify(ko)}; }
  b.disabled = false;
});
</script>`;
}

const CAT_TEXT = {
  fr: { culture: 'Culture générale, histoire, géographie, sciences, espace, mythologie : des quiz pour réviser ses classiques et apprendre une anecdote à chaque question.',
        sport: 'Football, basket, Jeux olympiques et jeux vidéo : teste tes connaissances sur les grands champions, les records et les règles.',
        fun: 'Cinéma, séries, musique, mangas, emojis, calcul mental : des quiz légers pour s\'amuser seul ou entre amis.',
        vie: 'Code de la route, cuisine, technologie, corps humain : des quiz utiles pour la vie de tous les jours.',
        langues: 'Anglais et espagnol : vocabulaire de base, expressions et faux amis, pour progresser en jouant.',
        perso: 'Des tests de personnalité rapides et sans mauvaise réponse, à comparer avec tes amis.' },
  en: { culture: 'General knowledge, history, geography, science, space, mythology: quizzes to brush up on the classics and learn a fact with every question.',
        sport: 'Football, basketball, the Olympics and video games: test what you know about the great champions, records and rules.',
        fun: 'Film, TV series, music, manga, emoji and mental maths: light quizzes to enjoy alone or with friends.',
        vie: 'Driving rules, cooking, technology and the human body: useful quizzes for everyday life.',
        langues: 'English and Spanish: basic vocabulary, expressions and false friends, to improve while playing.',
        perso: 'Quick personality tests with no wrong answers, to compare with your friends.' } };
function catPage(lang, c) {
  const D = lang === 'en' ? EN : FR, fr = lang !== 'en', ks = KEYS.filter(k => D.QUIZ[k].cat === c.id);
  const title = fr ? `Quiz ${c.name} gratuits : ${ks.length} quiz | QuizzMatch` : `Free ${c.name} quizzes: ${ks.length} quizzes | QuizzMatch`;
  const desc = CAT_TEXT[lang][c.id] || '';
  const body = `<nav class="crumbs"><a href="${url(lang)}">QuizzMatch</a> › ${c.emo} ${esc(c.name)}</nav>
<h1>${c.emo} ${esc(c.name)}</h1>
<p class="lead">${esc(desc)}</p>
<ul class="cards">${ks.map(k => { const q = D.QUIZ[k], n = q.qs.filter(x => lang !== 'en' || !x.frOnly).length;
    return `<li><a href="${url(lang, k)}"><b>${q.emo} ${esc(q.name)}</b><small>${esc(q.sub)} · ${n} questions</small></a></li>`; }).join('')}</ul>
<h2>${fr ? 'Autres catégories' : 'Other categories'}</h2>
<ul class="chips">${D.CATS.filter(o => o.id !== c.id).map(o => `<li><a href="${catUrl(lang, o.id)}">${o.emo} ${esc(o.name)}</a></li>`).join('')}</ul>`;
  const ld = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: c.name, description: desc, inLanguage: lang, url: catUrl(lang, c.id),
    hasPart: ks.map(k => ({ '@type': 'Quiz', name: D.QUIZ[k].name, url: url(lang, k) })) };
  return shell(lang, { title, desc, url: catUrl(lang, c.id), fr: catUrl('fr', c.id), en: catUrl('en', c.id), body, ld });
}

const urls = [SITE];
for (const lang of ['fr', 'en']) {
  const D = lang === 'en' ? EN : FR;
  for (const id in INFO_PAGES) { const o = INFO_PAGES[id][lang](D); write(infoUrl(lang, id), shell(lang, { ...o, url: infoUrl(lang, id), fr: infoUrl('fr', id), en: infoUrl('en', id) })); urls.push(infoUrl(lang, id)); }
  for (const c of D.CATS) { write(catUrl(lang, c.id), catPage(lang, c)); urls.push(catUrl(lang, c.id)); }
}
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
const nav = `<!--LIENS--><details class="allq"><summary>Toutes les pages · All pages</summary>`
  + `<p>QuizzMatch : ${games(FR).length} quiz gratuits et plus de ${cnt(FR, 'fr')} questions, en trois niveaux, à jouer seul ou entre amis.</p>`
  + `<ul>${FR.CATS.map(c => `<li><a href="categorie/${c.id}/">${c.emo} ${esc(c.name)}</a></li>`).join('')}${KEYS.map(k => `<li><a href="${k}/">${FR.QUIZ[k].emo} ${esc(FR.QUIZ[k].name)}</a></li>`).join('')}</ul>`
  + `<ul>${EN.CATS.map(c => `<li><a href="en/category/${c.id}/" hreflang="en">${c.emo} ${esc(c.name)}</a></li>`).join('')}${KEYS.map(k => `<li><a href="en/${k}/" hreflang="en">${EN.QUIZ[k].emo} ${esc(EN.QUIZ[k].name)}</a></li>`).join('')}</ul>`
  + `<ul><li><a href="a-propos/">À propos</a></li><li><a href="contact/">Contact</a></li><li><a href="confidentialite/">Confidentialité</a></li><li><a href="mentions-legales/">Mentions légales</a></li><li><a href="en/about/" hreflang="en">About</a></li><li><a href="en/privacy/" hreflang="en">Privacy</a></li></ul></details><!--/LIENS-->`;
const idx = path.join(DIR, 'index.html'); let html = fs.readFileSync(idx, 'utf8');
html = html.includes('<!--LIENS-->') ? html.replace(/<!--LIENS-->[\s\S]*?<!--\/LIENS-->/, nav) : html.replace('<canvas id="fx"', nav + '\n<canvas id="fx"');
const homeDesc = `${games(FR).length} quiz gratuits, 3 niveaux, plus de ${(Math.floor(nQ(FR) / 100) * 100).toLocaleString('fr-FR')} questions : culture générale, drapeaux, capitales, foot, séries, mangas, langues, tests de personnalité. Joue et défie tes amis.`;
html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${homeDesc}">`)
  .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${homeDesc}">`)
  .replace(/<title>[^<]*<\/title>/, '<title>QuizzMatch : quiz gratuits de culture générale à jouer entre amis</title>');
const siteLd = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'QuizzMatch', url: SITE, inLanguage: ['fr', 'en'], description: homeDesc })}</script>`;
html = html.includes('<!--SITELD-->') ? html.replace(/<!--SITELD-->[\s\S]*?<!--\/SITELD-->/, `<!--SITELD-->${siteLd}<!--/SITELD-->`) : html.replace('</head>', `<!--SITELD-->${siteLd}<!--/SITELD-->\n</head>`);
fs.writeFileSync(idx, html);
console.log(urls.length, 'pages dans le plan du site');
