/* Tests de personnalité : « p | question | 4 réponses || en anglais », puis 4 profils « P | nom | description || en anglais ».
   La réponse n° 1 compte pour le profil 1, la n° 2 pour le profil 2, etc. */
BANQUE_META.heros = { cat: 'perso', type: 'perso', emo: '🦸', color: '#c0392b', fr: ['Quel super-héros es-tu ?', 'Test de personnalité'], en: ['Which superhero are you?', 'Personality test'] };
BANQUE.heros = `
p | Ton super-pouvoir idéal : | La super-force | Une intelligence géniale | L'invisibilité | La super-vitesse || Your ideal superpower: | Super strength | Genius intelligence | Invisibility | Super speed
p | Un ami a un problème : | Je fonce l'aider | Je trouve une solution logique | J'agis discrètement, sans rien dire | Je lui remonte le moral avec une blague || A friend is in trouble: | I rush to help | I find a logical solution | I act quietly, without a word | I cheer them up with a joke
p | Ton QG secret : | Une tour en plein centre-ville | Un laboratoire high-tech | Une grotte cachée | Nulle part, je bouge tout le temps || Your secret HQ: | A tower in the city centre | A high-tech lab | A hidden cave | Nowhere, I'm always on the move
p | Ton plus grand défaut : | Je veux protéger tout le monde | Je réfléchis trop | Je garde tout pour moi | Je ne tiens pas en place || Your biggest flaw: | I want to protect everyone | I overthink | I keep everything to myself | I can't sit still
p | Ton accessoire : | Un bouclier | Une armure connectée | Une cape noire | Des baskets ultra-légères || Your gear: | A shield | Smart armour | A black cape | Ultra-light trainers
p | Ta devise : | « Personne ne reste derrière » | « Il y a toujours une solution » | « J'agis dans l'ombre » | « Plus vite, plus fort, plus fun » || Your motto: | "No one gets left behind" | "There's always a solution" | "I work in the shadows" | "Faster, stronger, more fun"
P | Le Protecteur 🛡️ | Loyal et courageux, tu fais passer les autres avant toi. Avec toi, tes amis se sentent en sécurité. || The Protector 🛡️ | Loyal and brave, you put others first. Your friends feel safe with you.
P | Le Génie 🧠 | Inventif et malin, tu résous les problèmes avant que les autres les voient venir. Ton arme, c'est ton cerveau. || The Genius 🧠 | Inventive and clever, you solve problems before others see them coming. Your weapon is your brain.
P | L'Ombre 🦇 | Mystérieux et stratège, tu observes, tu prépares, puis tu frappes au bon moment. On ne te voit jamais venir. || The Shadow 🦇 | Mysterious and strategic, you watch, plan, then strike at the right moment. No one sees you coming.
P | L'Éclair ⚡ | Rapide, drôle et plein d'énergie, tu mets de l'ambiance partout. Attention à ne pas foncer sans réfléchir. || The Flash ⚡ | Fast, funny and full of energy, you liven up every room. Just don't rush in without thinking.
`;
BANQUE_META.animal = { cat: 'perso', type: 'perso', emo: '🦁', color: '#b9770e', fr: ['Quel animal es-tu ?', 'Test de personnalité'], en: ['Which animal are you?', 'Personality test'] };
BANQUE.animal = `
p | Ton week-end idéal : | Organiser une sortie pour tout le groupe | Une journée à la plage entre amis | Rester tranquille à la maison | Lire ou apprendre quelque chose de nouveau || Your ideal weekend: | Planning an outing for the whole group | A day at the beach with friends | Staying in, nice and quiet | Reading or learning something new
p | Dans un groupe, tu es plutôt : | La personne qui décide | La personne qui fait rire | La personne qui fait sa vie | La personne qui écoute et conseille || In a group, you're more: | The one who decides | The one who makes people laugh | The one who does their own thing | The one who listens and advises
p | Ton moment préféré de la journée : | Le matin, plein d'énergie | L'après-midi, avec du monde | La sieste | La nuit, au calme || Your favourite time of day: | Morning, full of energy | Afternoon, with people around | Nap time | Night, when it's quiet
p | Face à un problème : | Je prends les choses en main | J'en parle à mes amis | Je me débrouille seul | J'analyse avant d'agir || Faced with a problem: | I take charge | I talk to my friends | I sort it out alone | I think it through first
p | Ton plat préféré : | Un bon steak | Des fruits de mer | Un plat réconfortant sous un plaid | Une spécialité que je n'ai jamais goûtée || Your favourite food: | A good steak | Seafood | Comfort food under a blanket | A dish I've never tried before
p | Ce qui te décrit le mieux : | Le courage | La bonne humeur | L'indépendance | La sagesse || What describes you best: | Courage | Good mood | Independence | Wisdom
P | Le Lion 🦁 | Né pour mener, tu as du charisme et du courage. Les autres te suivent naturellement. || The Lion 🦁 | Born to lead, you have charisma and courage. Others naturally follow you.
P | Le Dauphin 🐬 | Joyeux et sociable, tu adores être entouré. Ta bonne humeur est contagieuse. || The Dolphin 🐬 | Cheerful and sociable, you love being around people. Your good mood is contagious.
P | Le Chat 🐈 | Indépendant et un peu mystérieux, tu fais les choses à ta façon. Et tu adores le confort. || The Cat 🐈 | Independent and a little mysterious, you do things your way. And you love comfort.
P | Le Hibou 🦉 | Calme et curieux, tu observes avant d'agir. On vient souvent te demander conseil. || The Owl 🦉 | Calm and curious, you observe before acting. People often come to you for advice.
`;
BANQUE_META.metier = { cat: 'perso', type: 'perso', emo: '💼', color: '#2e86c1', fr: ['Quel métier est fait pour toi ?', 'Test de personnalité'], en: ['Which job is made for you?', 'Personality test'] };
BANQUE.metier = `
p | À l'école, ta matière préférée : | Les arts plastiques | La biologie | L'économie | Les maths et la physique || At school, your favourite subject: | Art | Biology | Economics | Maths and physics
p | Ton cadeau rêvé : | Une tablette à dessin | Un voyage humanitaire | Une formation pour créer ton entreprise | Un kit de robotique || Your dream present: | A drawing tablet | A volunteering trip | A course to start your own business | A robotics kit
p | Dans un projet de groupe : | J'ai les idées | Je veille à ce que tout le monde aille bien | Je mène l'équipe | Je règle les problèmes techniques || In a group project: | I come up with the ideas | I make sure everyone's okay | I lead the team | I fix the technical problems
p | Ce qui te motive le plus : | Créer quelque chose de beau | Aider les autres | Réussir et gagner | Comprendre comment ça marche || What motivates you most: | Creating something beautiful | Helping others | Succeeding and winning | Understanding how things work
p | Ton lieu de travail idéal : | Un atelier ou un studio | Un hôpital ou une association | Un bureau en ville | Un labo ou un chantier || Your ideal workplace: | A workshop or studio | A hospital or charity | An office in town | A lab or a building site
p | Ton appli préférée : | Pinterest | Une appli de méditation | Une appli de bourse | Une appli de programmation || Your favourite app: | Pinterest | A meditation app | A stock market app | A coding app
P | Le Créatif 🎨 | Designer, graphiste, réalisateur ou architecte : tu as besoin d'imaginer et de créer chaque jour. || The Creative 🎨 | Designer, illustrator, film-maker or architect: you need to imagine and create every day.
P | Le Soignant 🩺 | Infirmier, médecin, éducateur ou psychologue : tu te sens utile quand tu aides les autres. || The Carer 🩺 | Nurse, doctor, teacher or psychologist: you feel useful when you help others.
P | L'Entrepreneur 💼 | Chef d'entreprise, commercial ou manager : tu aimes les défis, décider et réussir. || The Entrepreneur 💼 | Business owner, salesperson or manager: you love challenges, deciding and succeeding.
P | L'Ingénieur 🔧 | Développeur, ingénieur ou scientifique : tu veux comprendre, construire et résoudre. || The Engineer 🔧 | Developer, engineer or scientist: you want to understand, build and solve.
`;
