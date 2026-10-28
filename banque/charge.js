/* Ajoute les questions du dossier banque/ aux quiz, dans la langue du joueur.
   Chargé après questions*.js, niveaux.js et les fichiers banque/<quiz>.js, une fois applyEnglish() et applyLevels() passés.
   BANQUE_META décrit les quiz qui n'existent que dans banque/ (nom, catégorie, profils des tests). */
function addBank(lang) {
  const en = lang === 'en';
  for (const k in BANQUE_META) {
    if (QUIZ[k]) continue;
    const m = BANQUE_META[k];
    QUIZ[k] = { cat: m.cat, emo: m.emo, color: m.color, name: en ? m.en[0] : m.fr[0], sub: en ? m.en[1] : m.fr[1], qs: [] };
    if (m.type) QUIZ[k].type = m.type;
  }
  for (const k in BANQUE) {
    const q = QUIZ[k]; if (!q) continue;
    for (const line of BANQUE[k].trim().split('\n')) {
      const [frPart, enPart] = line.split(' || '), fr = frPart.split(' | ').map(s => s.trim()), e = (enPart || '').split(' | ').map(s => s.trim());
      const tag = fr.shift(), lv = tag[0], frOnly = tag.includes('~');
      if (lv === 'P') { (q.profiles = q.profiles || []).push(en ? e : fr); continue; }   // profil d'un test de personnalité
      const src = en ? e : fr;
      let x;
      if (q.type === 'perso') x = [src[0], src.slice(1, 5)];
      else if (q.type === 'vf') x = [src[0], null, fr[1] === 'V' ? 0 : 1, en ? e[1] : fr[2]];
      else x = [src[0] === '=' ? fr[0] : src[0], src.slice(1, 5), 0, src[5]];
      x.lv = lv; if (frOnly && en) x.frOnly = true;
      q.qs.push(x);
    }
  }
}
