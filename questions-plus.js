/* Questions supplémentaires : une par ligne, « question | bonne réponse | faux 1 | faux 2 | faux 3 | explication ».
   Vrai/Faux : « affirmation | V ou F | explication ». Les choix sont mélangés à chaque partie. */
const PLUS = {
culture: `
Quel est le plus haut sommet du monde ? | L'Everest | Le K2 | Le mont Blanc | Le Kilimandjaro | Environ 8 849 m, dans l'Himalaya.
Combien de jours compte une année bissextile ? | 366 | 365 | 364 | 360 | Le 29 février revient tous les 4 ans.
Quelle est la monnaie du Japon ? | Le yen | Le won | Le yuan | Le baht | Le won est coréen, le yuan chinois.
Qui a écrit « Les Misérables » ? | Victor Hugo | Émile Zola | Honoré de Balzac | Molière | Publié en 1862.
Quel est le plus petit pays du monde ? | Le Vatican | Monaco | Saint-Marin | Malte | Moins d'un demi-kilomètre carré, en plein Rome.
Combien de minutes y a-t-il dans une journée ? | 1 440 | 1 240 | 1 640 | 960 | 24 heures × 60 minutes.
Quelle couleur obtient-on en mélangeant du bleu et du jaune ? | Du vert | Du violet | De l'orange | Du marron | Le violet, c'est bleu + rouge.
Qui a composé « La Flûte enchantée » ? | Mozart | Beethoven | Bach | Vivaldi | Un opéra de 1791.
Qui a écrit « Le Petit Prince » ? | Antoine de Saint-Exupéry | Jules Verne | Albert Camus | Victor Hugo | L'un des livres les plus traduits au monde.
Dans quelle ville se trouve la statue du Christ Rédempteur ? | Rio de Janeiro | São Paulo | Lisbonne | Buenos Aires | Au sommet du Corcovado, au Brésil.
Quel métal est liquide à température ambiante ? | Le mercure | Le plomb | Le fer | L'étain | On en mettait autrefois dans les thermomètres.
Combien de lettres compte l'alphabet français ? | 26 | 24 | 28 | 30 | De A à Z.
Quel instrument mesure la température ? | Le thermomètre | Le baromètre | L'anémomètre | Le sismographe | Le baromètre mesure la pression de l'air.
Qui a écrit « Roméo et Juliette » ? | William Shakespeare | Molière | Jean Racine | Charles Dickens | Une pièce de théâtre anglaise de la fin du XVIe siècle.
Combien y a-t-il de secondes dans une heure ? | 3 600 | 360 | 6 000 | 1 000 | 60 minutes × 60 secondes.
Quelle est la langue officielle du Brésil ? | Le portugais | L'espagnol | Le brésilien | L'anglais | Le Brésil était une colonie portugaise.
Combien de cartes compte un jeu classique, sans les jokers ? | 52 | 32 | 54 | 48 | 54 avec les deux jokers ; le jeu de belote en a 32.
Quel célèbre musée se trouve à Paris ? | Le Louvre | Le Prado | Les Offices | L'Ermitage | Le Prado est à Madrid, les Offices à Florence.
Que mesure l'échelle de Richter ? | La force des séismes | La vitesse du vent | La quantité de pluie | La chaleur des volcans | On parle de la magnitude d'un tremblement de terre.
Qui a découvert la pénicilline ? | Alexander Fleming | Louis Pasteur | Marie Curie | Robert Koch | En 1928 : le premier antibiotique.
Combien de zéros y a-t-il dans un million ? | 6 | 5 | 7 | 9 | 1 000 000.
Quel détective a été créé par Arthur Conan Doyle ? | Sherlock Holmes | Hercule Poirot | Arsène Lupin | Le commissaire Maigret | Poirot est l'œuvre d'Agatha Christie.
Quelle est la capitale de l'Égypte ? | Le Caire | Alexandrie | Louxor | Gizeh | La plus grande ville du monde arabe.
Combien d'années y a-t-il dans un millénaire ? | 1 000 | 100 | 10 000 | 500 | Un siècle, c'est 100 ans.
Que fête-t-on le 1er mai en France ? | La fête du Travail | La fête nationale | L'Armistice | La fête de la musique | La fête de la musique, c'est le 21 juin.
Quel est le plus long os du corps humain ? | Le fémur | Le tibia | L'humérus | Le radius | L'os de la cuisse.
Dans quel pays se trouvent les pyramides de Gizeh ? | L'Égypte | Le Mexique | Le Pérou | La Jordanie | Près du Caire, au bord du désert.
Combien de couleurs compte-t-on traditionnellement dans l'arc-en-ciel ? | 7 | 5 | 6 | 9 | Rouge, orange, jaune, vert, bleu, indigo, violet.
Quel peintre a coupé une partie de son oreille ? | Vincent van Gogh | Pablo Picasso | Claude Monet | Salvador Dalí | En 1888, à Arles.
Comment s'appelle la grande cloche de l'horloge du Parlement de Londres ? | Big Ben | Tower Bridge | London Eye | Buckingham | On donne souvent ce nom à toute la tour.
`,
histoire: `
Quel roi a été guillotiné le 21 janvier 1793 ? | Louis XVI | Louis XIV | Louis XV | Charles X | Pendant la Révolution française.
En quelle année a commencé la Première Guerre mondiale ? | 1914 | 1912 | 1918 | 1939 | Elle s'est terminée le 11 novembre 1918.
Où Napoléon est-il mort ? | Sur l'île de Sainte-Hélène | Sur l'île d'Elbe | À Paris | En Corse | En exil, en 1821, en plein océan Atlantique.
Qui a été le premier homme à aller dans l'espace ? | Youri Gagarine | Neil Armstrong | Buzz Aldrin | John Glenn | Le 12 avril 1961, pour l'URSS.
Quelle civilisation a construit le Machu Picchu ? | Les Incas | Les Aztèques | Les Mayas | Les Olmèques | Au Pérou, au XVe siècle.
Qui est le principal auteur de la Déclaration d'indépendance des États-Unis ? | Thomas Jefferson | George Washington | Abraham Lincoln | Benjamin Franklin | Adoptée le 4 juillet 1776.
En quelle année les Françaises ont-elles voté pour la première fois ? | 1945 | 1918 | 1936 | 1968 | Droit accordé en 1944, premier vote en avril 1945.
Qui a été le premier empereur romain ? | Auguste | Jules César | Néron | Caligula | Jules César n'a jamais été empereur.
Quel paquebot a coulé en 1912 après avoir heurté un iceberg ? | Le Titanic | Le Lusitania | Le Queen Mary | Le Normandie | Lors de son premier voyage.
Qui a prononcé le discours « I have a dream » ? | Martin Luther King | Malcolm X | Nelson Mandela | Barack Obama | À Washington, en 1963.
De quel pays Nelson Mandela a-t-il été président ? | L'Afrique du Sud | Le Kenya | Le Nigeria | Le Zimbabwe | De 1994 à 1999, après 27 ans de prison.
En quelle année les pièces et billets en euros sont-ils arrivés en France ? | 2002 | 1999 | 1995 | 2005 | Le 1er janvier 2002.
Où a eu lieu le débarquement du 6 juin 1944 ? | En Normandie | En Provence | En Bretagne | En Italie | Le D-Day, sur cinq plages normandes.
Qui a été couronné empereur en l'an 800 ? | Charlemagne | Clovis | Hugues Capet | Pépin le Bref | Couronné à Rome par le pape.
Quelle ville était la capitale de l'Empire byzantin ? | Constantinople | Rome | Athènes | Alexandrie | Aujourd'hui Istanbul.
Qui a inventé l'imprimerie à caractères mobiles en Europe ? | Gutenberg | Léonard de Vinci | Galilée | Isaac Newton | Vers 1450, à Mayence.
Quel pays a lancé le premier satellite artificiel, Spoutnik ? | L'URSS | Les États-Unis | La Chine | La France | En 1957.
Combien de temps a réellement duré la guerre de Cent Ans ? | 116 ans | 100 ans | 99 ans | 130 ans | De 1337 à 1453.
Qui a dirigé la France libre pendant la Seconde Guerre mondiale ? | Charles de Gaulle | Philippe Pétain | Jean Moulin | Georges Clemenceau | Depuis Londres, après l'appel du 18 juin 1940.
En quelle année l'Algérie est-elle devenue indépendante ? | 1962 | 1954 | 1958 | 1968 | Après les accords d'Évian.
Qui a été le premier président noir des États-Unis ? | Barack Obama | Joe Biden | Colin Powell | Bill Clinton | Élu en 2008.
Quel navigateur a lancé la première expédition autour du monde ? | Fernand de Magellan | Vasco de Gama | Christophe Colomb | James Cook | Magellan est mort en route ; son équipage a terminé le voyage en 1522.
Qui a porté l'abolition de l'esclavage en France en 1848 ? | Victor Schœlcher | Jules Ferry | Robespierre | Napoléon III | Le décret du 27 avril 1848.
Jules Ferry est connu pour avoir rendu l'école… | Gratuite, laïque et obligatoire | Payante | Réservée aux garçons | Facultative | Lois de 1881 et 1882.
Qui a fait abolir la peine de mort en France en 1981 ? | Robert Badinter | Simone Veil | Jacques Chirac | François Mitterrand | Robert Badinter, ministre de la Justice, a porté la loi.
En quelle année sont apparus les congés payés en France ? | 1936 | 1919 | 1945 | 1968 | Sous le Front populaire.
Quelle cité grecque était célèbre pour ses guerriers ? | Sparte | Athènes | Corinthe | Delphes | Athènes était plutôt connue pour la démocratie et la philosophie.
Qui était le dieu romain de la guerre ? | Mars | Jupiter | Neptune | Mercure | La planète rouge porte son nom.
Quel empereur romain a fait construire un mur en Grande-Bretagne ? | Hadrien | Auguste | Néron | Trajan | Le mur d'Hadrien, vers 122.
Quelle reine d'Égypte est célèbre pour sa relation avec Jules César et Marc Antoine ? | Cléopâtre | Néfertiti | Hatchepsout | Néfertari | La dernière reine de l'Égypte antique.
`,
geo: `
Quelle est la capitale de l'Italie ? | Rome | Milan | Naples | Turin | Surnommée la Ville éternelle.
Quel est le plus grand pays d'Afrique par la superficie ? | L'Algérie | La RD Congo | Le Soudan | La Libye | Depuis la séparation du Soudan du Sud en 2011.
Quelle est la capitale de l'Allemagne ? | Berlin | Munich | Francfort | Hambourg | Capitale de l'Allemagne réunifiée depuis 1990.
Quelle est la capitale du Portugal ? | Lisbonne | Porto | Faro | Coimbra | Au bord du Tage.
Quelle est la capitale des États-Unis ? | Washington | New York | Los Angeles | Chicago | New York est la plus grande ville, pas la capitale.
Quel océan borde la côte ouest de la France ? | L'Atlantique | Le Pacifique | L'océan Indien | L'Arctique | De la Bretagne au Pays basque.
Quelle est la plus haute montagne d'Afrique ? | Le Kilimandjaro | Le mont Kenya | Le Toubkal | Le mont Cameroun | Environ 5 895 m, en Tanzanie.
Quelle est la capitale de l'Algérie ? | Alger | Oran | Constantine | Annaba | Surnommée Alger la Blanche.
Quelle est la capitale du Sénégal ? | Dakar | Saint-Louis | Thiès | Bamako | Bamako est la capitale du Mali.
Quelle est la capitale de la Tunisie ? | Tunis | Sfax | Sousse | Carthage | Carthage est une ville antique voisine.
Quelle mer sépare l'Europe de l'Afrique ? | La Méditerranée | La mer Noire | La mer Rouge | La mer Baltique | Elle borde aussi le sud de la France.
Dans quel pays se trouve Marrakech ? | Le Maroc | La Tunisie | L'Algérie | L'Égypte | Surnommée la ville ocre.
Quelle est la capitale de la Belgique ? | Bruxelles | Anvers | Liège | Bruges | Elle accueille aussi de nombreuses institutions européennes.
Quelle ville est la « ville fédérale » de la Suisse ? | Berne | Zurich | Genève | Lausanne | Zurich et Genève sont plus grandes, mais le gouvernement siège à Berne.
Quelle chaîne de montagnes sépare la France de l'Espagne ? | Les Pyrénées | Les Alpes | Le Jura | Les Vosges | Les Alpes sont à la frontière avec l'Italie et la Suisse.
Quelle île française est surnommée l'île de Beauté ? | La Corse | La Réunion | La Martinique | Belle-Île | En Méditerranée.
Dans quel océan se trouve l'île de La Réunion ? | L'océan Indien | L'Atlantique | Le Pacifique | La Méditerranée | À l'est de Madagascar.
Buenos Aires est la capitale de quel pays ? | L'Argentine | Le Chili | L'Uruguay | Le Brésil | Au bord du Río de la Plata.
Quelle est la capitale de la Russie ? | Moscou | Saint-Pétersbourg | Kiev | Minsk | Kiev est la capitale de l'Ukraine, Minsk celle de la Biélorussie.
Quel est le plus petit continent ? | L'Océanie | L'Europe | L'Antarctique | L'Amérique du Sud | Avec l'Australie et les îles du Pacifique.
Quelle ville est surnommée « la Grosse Pomme » ? | New York | Chicago | Los Angeles | Miami | « The Big Apple ».
Combien la France compte-t-elle de départements, outre-mer compris ? | 101 | 95 | 96 | 110 | 96 en métropole et 5 en outre-mer.
Quelle est la capitale de la Chine ? | Pékin | Shanghai | Hong Kong | Canton | Shanghai est la plus grande ville.
Dans quel pays se trouve le canal de Suez ? | L'Égypte | Le Panama | La Turquie | L'Arabie saoudite | Il relie la Méditerranée à la mer Rouge.
Quelle est la plus grande île du monde ? | Le Groenland | Madagascar | Bornéo | L'Islande | L'Australie est considérée comme un continent.
Quel pays est surnommé le pays du Soleil-Levant ? | Le Japon | La Chine | La Corée du Sud | La Thaïlande | À l'est de l'Asie, là où le soleil se lève.
Quelle est la capitale officielle de la Côte d'Ivoire ? | Yamoussoukro | Abidjan | Bouaké | Dakar | Abidjan reste la plus grande ville et le centre économique.
Quel détroit sépare l'Espagne du Maroc ? | Le détroit de Gibraltar | Le Bosphore | Le pas de Calais | Le détroit de Messine | Environ 14 km de large au plus étroit.
Quelle est la capitale de l'Espagne ? | Madrid | Barcelone | Séville | Valence | Au centre du pays.
Quel fleuve traverse Paris ? | La Seine | La Loire | La Marne | Le Rhône | Elle se jette dans la Manche au Havre.
`,
sciences: `
Combien de planètes compte le système solaire ? | 8 | 9 | 7 | 10 | Pluton a été classée planète naine en 2006.
Quelle est la plus grande planète du système solaire ? | Jupiter | Saturne | La Terre | Neptune | On pourrait y loger plus de 1 000 Terre.
Quel est le symbole chimique du fer ? | Fe | Fr | Ir | F | Du latin « ferrum ».
Quel élément a pour symbole Na ? | Le sodium | L'azote | Le néon | Le nickel | Du latin « natrium ». Le sel, c'est du chlorure de sodium.
Combien de dents a un adulte, dents de sagesse comprises ? | 32 | 28 | 30 | 36 | 28 sans les quatre dents de sagesse.
Quelle est l'unité de la puissance électrique ? | Le watt | Le volt | L'ampère | L'ohm | Le volt mesure la tension, l'ampère l'intensité.
Combien de temps met la Terre pour faire le tour du Soleil ? | Environ 365 jours | 24 heures | 30 jours | 10 ans | En 24 heures, elle tourne sur elle-même.
Quel savant est associé à la loi de la gravitation et à la pomme ? | Isaac Newton | Albert Einstein | Galilée | Nicolas Copernic | Selon la légende, une pomme lui serait tombée dessus.
Combien de prix Nobel Marie Curie a-t-elle reçus ? | 2 | 1 | 3 | 0 | Physique en 1903, chimie en 1911.
À quoi sert l'ADN ? | À porter l'information génétique | À digérer | À transporter l'oxygène | À faire bouger les muscles | C'est le « mode d'emploi » de chaque être vivant.
Quelle est, environ, la vitesse du son dans l'air ? | 340 m/s | 34 m/s | 3 400 m/s | 300 000 km/s | Environ 1 200 km/h. 300 000 km/s, c'est la lumière.
Quel organe filtre le sang pour fabriquer l'urine ? | Les reins | Le foie | L'estomac | Les poumons | On en a deux.
Combien de litres de sang a un adulte, environ ? | 5 litres | 2 litres | 10 litres | 15 litres | Entre 4,5 et 6 litres selon la taille.
Quelle vitamine le corps fabrique-t-il grâce au soleil ? | La vitamine D | La vitamine C | La vitamine A | La vitamine B12 | Elle aide à fixer le calcium dans les os.
Quelle est l'unité de base de tout être vivant ? | La cellule | L'atome | L'organe | Le muscle | Notre corps en compte des dizaines de milliers de milliards.
Avec quel instrument observe-t-on les étoiles ? | Un télescope | Un microscope | Un stéthoscope | Un périscope | Le microscope sert à voir l'infiniment petit.
Quel gaz est le plus présent dans l'air ? | L'azote | L'oxygène | Le dioxyde de carbone | L'hydrogène | Environ 78 % d'azote et 21 % d'oxygène.
Quel est le pH de l'eau pure ? | 7 | 0 | 14 | 1 | 7, c'est neutre : ni acide ni basique.
Combien de degrés mesure un angle droit ? | 90° | 45° | 180° | 360° | Un tour complet fait 360°.
Quelle est la planète la plus chaude du système solaire ? | Vénus | Mercure | Mars | Jupiter | Son atmosphère épaisse piège la chaleur : plus de 450 °C.
Combien de cavités compte le cœur humain ? | 4 | 2 | 3 | 6 | Deux oreillettes et deux ventricules.
Que sont vraiment les étoiles filantes ? | Des poussières qui brûlent dans l'atmosphère | Des étoiles qui tombent | Des satellites | Des avions | Elles se consument à grande vitesse, très haut dans le ciel.
Quelle unité mesure l'intensité d'un son ? | Le décibel | Le hertz | Le lux | Le watt | Au-delà de 85 dB, une exposition prolongée abîme l'oreille.
Quelle force nous retient au sol ? | La gravité | Le magnétisme | Le frottement | La pression | La même force fait tourner la Lune autour de la Terre.
À quelle température l'eau gèle-t-elle ? | 0 °C | -10 °C | 4 °C | 10 °C | Elle devient de la glace.
Quel organe permet de respirer ? | Les poumons | Le cœur | Le foie | L'estomac | Ils font passer l'oxygène dans le sang.
Quel savant a mis au point le vaccin contre la rage ? | Louis Pasteur | Alexander Fleming | Marie Curie | Claude Bernard | En 1885.
Quelle partie du corps contient le plus petit os ? | L'oreille | La main | Le pied | Le nez | L'étrier mesure environ 3 mm.
Comment s'appelle le mélange de gaz qui entoure la Terre ? | L'atmosphère | La croûte terrestre | Le noyau | L'océan | Elle nous protège et nous permet de respirer.
Quelle est l'étoile la plus proche de la Terre ? | Le Soleil | Proxima du Centaure | Sirius | L'étoile polaire | Proxima du Centaure est la plus proche après le Soleil.
`,
animaux: `
Quel est le plus grand oiseau du monde ? | L'autruche | Le condor | L'aigle royal | L'albatros | Elle peut mesurer 2,5 m mais ne vole pas.
Comment s'appelle le petit du cheval ? | Le poulain | Le veau | Le chevreau | L'ânon | L'ânon est le petit de l'âne.
Combien de pattes a un insecte ? | 6 | 8 | 4 | 10 | Les araignées, qui en ont 8, ne sont pas des insectes.
Quel animal fabrique la soie ? | Le ver à soie | L'araignée des jardins | L'abeille | La fourmi | C'est la chenille d'un papillon, le bombyx.
Que mange principalement le panda géant ? | Du bambou | Du poisson | Des fruits | De la viande | Jusqu'à une douzaine d'heures de repas par jour.
Quel est le plus grand félin du monde ? | Le tigre | Le lion | Le jaguar | Le léopard | Le tigre de Sibérie peut dépasser 300 kg.
Combien de bosses a un dromadaire ? | 1 | 2 | 3 | 0 | Le chameau, lui, en a deux.
Quel reptile peut changer de couleur ? | Le caméléon | Le crocodile | La tortue | L'iguane | Pour communiquer et réguler sa température.
Quel oiseau qui ne vole pas vit en Antarctique ? | Le manchot | Le pingouin | Le macareux | La mouette | Les pingouins, eux, savent voler.
Dans quel pays vit le koala à l'état sauvage ? | L'Australie | L'Afrique du Sud | Le Brésil | L'Inde | Il mange des feuilles d'eucalyptus.
Quel animal passe sa vie suspendu aux arbres et bouge très lentement ? | Le paresseux | Le koala | Le singe hurleur | Le lémurien | Il descend de son arbre environ une fois par semaine.
De quoi se nourrit surtout le requin-baleine ? | De plancton | De phoques | De dauphins | D'algues | Malgré sa taille, il est inoffensif pour l'homme.
Combien de compartiments a l'estomac d'une vache ? | 4 | 1 | 2 | 6 | C'est un ruminant : elle mâche sa nourriture deux fois.
Quel mammifère pond des œufs ? | L'ornithorynque | Le kangourou | La chauve-souris | Le dauphin | Il vit en Australie, avec un bec de canard.
Le kangourou est un… | Marsupial | Rongeur | Félin | Primate | Il porte son petit dans une poche.
Quel est l'animal le plus rapide du monde, en piqué ? | Le faucon pèlerin | Le guépard | L'aigle royal | L'espadon | Il dépasse 300 km/h en piqué.
Quel animal a le plus long cou ? | La girafe | Le chameau | L'autruche | Le lama | Pourtant, elle a 7 vertèbres cervicales, comme nous.
Comment les abeilles s'indiquent-elles où trouver des fleurs ? | Par une danse | Par des cris | Par des couleurs | Elles ne communiquent pas | La danse frétillante indique la direction et la distance.
Combien de bras a le plus souvent une étoile de mer ? | 5 | 4 | 6 | 8 | Certaines espèces en ont bien plus.
Comment s'appelle le petit de la chèvre ? | Le chevreau | L'agneau | Le veau | Le poulain | L'agneau est le petit de la brebis.
Comment s'appelle la femelle du sanglier ? | La laie | La biche | La hase | La truie | La truie est la femelle du cochon, la hase celle du lièvre.
Comment s'appelle la femelle du cerf ? | La biche | La laie | La chevrette | La jument | La jument est la femelle du cheval.
Quel animal hiberne pendant l'hiver ? | La marmotte | Le cheval | Le renard | Le chat | Elle peut dormir jusqu'à 6 mois.
Quel animal est le symbole du WWF ? | Le panda géant | Le tigre | L'ours polaire | L'éléphant | Le logo existe depuis 1961.
Où vit le poisson-clown ? | Dans une anémone de mer | Dans un corail mort | Dans le sable | Dans une grotte | Il est protégé du venin de l'anémone.
Comment appelle-t-on un groupe de loups ? | Une meute | Un troupeau | Un banc | Une nuée | Un banc, c'est pour les poissons.
Quel est le plus gros animal terrestre ? | L'éléphant d'Afrique | L'hippopotame | Le rhinocéros | La girafe | Il peut peser plus de 6 tonnes.
Combien de pattes a un crabe, pinces comprises ? | 10 | 8 | 6 | 12 | C'est un décapode : « dix pieds ».
Quel animal est connu pour construire des barrages ? | Le castor | La loutre | Le ragondin | Le rat musqué | Avec des branches qu'il ronge.
Quel oiseau peut voler en arrière ? | Le colibri | L'aigle | Le moineau | Le perroquet | Ses ailes battent jusqu'à 80 fois par seconde.
`,
vraifaux: `
La foudre ne tombe jamais deux fois au même endroit. | F | Faux : les grands immeubles et les paratonnerres la reçoivent souvent.
Les autruches cachent leur tête dans le sable quand elles ont peur. | F | Faux : elles s'aplatissent au sol ou s'enfuient en courant.
Le chocolat est dangereux pour les chiens. | V | Vrai : il contient de la théobromine, toxique pour eux.
Le sang est bleu dans les veines. | F | Faux : il est toujours rouge, plus foncé dans les veines.
La tour Eiffel est un peu plus haute en été. | V | Vrai : le métal se dilate avec la chaleur, de quelques centimètres.
Sur Vénus, une journée dure plus longtemps qu'une année. | V | Vrai : elle tourne très lentement sur elle-même.
Les humains ont vécu en même temps que les dinosaures. | F | Faux : des dizaines de millions d'années les séparent.
Les araignées sont des insectes. | F | Faux : ce sont des arachnides, avec 8 pattes.
La baleine est un poisson. | F | Faux : c'est un mammifère qui respire de l'air.
Le son va plus vite dans l'eau que dans l'air. | V | Vrai : environ 1 500 m/s dans l'eau contre 340 m/s dans l'air.
La pieuvre a trois cœurs. | V | Vrai : un pour le corps, deux pour les branchies.
Le Sahara est le plus grand désert du monde. | F | Faux : c'est l'Antarctique, un désert froid. Le Sahara est le plus grand désert chaud.
Les bananes poussent sur des arbres. | F | Faux : le bananier est une plante herbacée géante.
Le chameau stocke de l'eau dans ses bosses. | F | Faux : ses bosses sont remplies de graisse.
Un œuf frais coule au fond d'un verre d'eau. | V | Vrai : un œuf qui flotte n'est plus frais.
Les lions vivent dans la jungle. | F | Faux : ils vivent surtout dans la savane.
La Lune produit sa propre lumière. | F | Faux : elle renvoie la lumière du Soleil.
Les cheveux et les ongles continuent de pousser après la mort. | F | Faux : c'est la peau qui se rétracte et donne cette impression.
Le rouge énerve les taureaux. | F | Faux : c'est le mouvement de la cape qui les fait charger.
L'eau de mer gèle à 0 °C. | F | Faux : à cause du sel, elle gèle vers -2 °C.
Les dauphins dorment avec une moitié du cerveau éveillée. | V | Vrai : ils peuvent ainsi remonter respirer.
Le verre est un liquide qui coule très lentement. | F | Faux : c'est un solide. Les vieux vitraux étaient irréguliers dès leur fabrication.
L'Everest est la plus haute montagne au-dessus du niveau de la mer. | V | Vrai : environ 8 849 m.
Le Pacifique est le plus petit océan. | F | Faux : c'est le plus grand. Le plus petit est l'Arctique.
Le diamant et le charbon sont faits du même élément. | V | Vrai : les deux sont du carbone.
Les manchots vivent au pôle Nord. | F | Faux : ils vivent dans l'hémisphère Sud.
Un escargot a des dents. | V | Vrai : des milliers de minuscules dents sur une sorte de langue.
Les vaches ont quatre estomacs. | V | Vrai : plus exactement, un estomac à quatre compartiments.
La Grande Muraille de Chine est une seule muraille continue. | F | Faux : c'est un ensemble de murs construits à différentes époques.
Le cerveau lui-même ne ressent pas la douleur. | V | Vrai : il n'a pas de capteurs de douleur, d'où certaines opérations éveillées.
`,
foot: `
Quel pays a gagné le plus de Coupes du monde ? | Le Brésil | L'Allemagne | L'Italie | L'Argentine | 5 titres : 1958, 1962, 1970, 1994 et 2002.
En quelle année la France a-t-elle gagné sa première Coupe du monde ? | 1998 | 1984 | 2006 | 2018 | 3-0 contre le Brésil, au Stade de France.
Qui a marqué deux buts de la tête en finale de la Coupe du monde 1998 ? | Zinédine Zidane | Thierry Henry | Emmanuel Petit | Lilian Thuram | Emmanuel Petit a marqué le troisième.
Le stade Vélodrome est le stade de quel club ? | L'Olympique de Marseille | Le Paris Saint-Germain | L'OGC Nice | Les Girondins de Bordeaux | Le PSG joue au Parc des Princes.
Combien de points rapporte une victoire en championnat ? | 3 | 2 | 1 | 4 | Un match nul rapporte 1 point.
Quel joueur est surnommé « CR7 » ? | Cristiano Ronaldo | Ronaldinho | Ronaldo Nazário | Cristian Romero | CR pour Cristiano Ronaldo, et le 7 de son maillot.
Quelle compétition réunit les meilleurs clubs d'Europe ? | La Ligue des champions | La Coupe de France | La Ligue 1 | La Coupe du monde | Avec son célèbre hymne.
Quel club a gagné le plus de Ligues des champions ? | Le Real Madrid | Le FC Barcelone | L'AC Milan | Le Bayern Munich | Plus de 15 titres.
Combien de temps durent les prolongations ? | 2 × 15 minutes | 2 × 10 minutes | 2 × 20 minutes | 1 × 30 minutes | Puis tirs au but en cas d'égalité.
Que signifie un carton rouge ? | Le joueur est expulsé | Un simple avertissement | Un penalty | La fin du match | Deux cartons jaunes donnent aussi un rouge.
Dans quel pays se joue la Premier League ? | L'Angleterre | L'Espagne | L'Italie | L'Allemagne | La Liga est espagnole, la Serie A italienne.
De quel pays était Pelé ? | Le Brésil | L'Argentine | Le Portugal | L'Uruguay | Seul joueur à avoir gagné 3 Coupes du monde.
Contre quel pays Maradona a-t-il marqué la « main de Dieu » en 1986 ? | L'Angleterre | L'Allemagne | La France | Le Brésil | En quart de finale de la Coupe du monde.
Dans quel club Kylian Mbappé a-t-il commencé sa carrière professionnelle ? | L'AS Monaco | Le PSG | Le Real Madrid | Le Stade rennais | Champion de France avec Monaco en 2017.
Combien d'équipes compte la Ligue 1 depuis 2023 ? | 18 | 20 | 16 | 22 | Elle en comptait 20 auparavant.
Quel pays a organisé la Coupe du monde 2022 ? | Le Qatar | La Russie | Le Brésil | L'Arabie saoudite | La première organisée en hiver.
Tous les combien a lieu la Coupe du monde ? | Tous les 4 ans | Tous les 2 ans | Tous les ans | Tous les 5 ans | Comme l'Euro.
Où le gardien a-t-il le droit de prendre le ballon à la main ? | Dans sa surface de réparation | Partout sur le terrain | Dans sa moitié de terrain | Nulle part | Sauf sur une passe en retour volontaire du pied d'un coéquipier.
Quel magazine a créé le Ballon d'or ? | France Football | L'Équipe | So Foot | Onze Mondial | En 1956.
Quelle équipe nationale est surnommée la Squadra Azzurra ? | L'Italie | L'Espagne | L'Argentine | Le Portugal | « L'équipe bleue ».
Quel pays a été le premier pays africain demi-finaliste d'une Coupe du monde ? | Le Maroc | Le Sénégal | Le Cameroun | Le Ghana | En 2022, au Qatar.
À combien de mètres du but se tire un penalty ? | 11 mètres | 9 mètres | 16 mètres | 20 mètres | Le point de penalty est à 11 m de la ligne de but.
Qui était le capitaine des Bleus champions du monde en 1998 ? | Didier Deschamps | Zinédine Zidane | Marcel Desailly | Laurent Blanc | Il a aussi gagné la Coupe du monde 2018 comme sélectionneur.
Qui a reçu le Ballon d'or 2018 ? | Luka Modrić | Kylian Mbappé | Cristiano Ronaldo | Antoine Griezmann | Il a mis fin à 10 ans de domination Messi-Ronaldo.
Avec quel club Zidane a-t-il gagné trois Ligues des champions d'affilée comme entraîneur ? | Le Real Madrid | La Juventus | Le Bayern Munich | Le PSG | En 2016, 2017 et 2018.
Quel pays a gagné l'Euro 2024 ? | L'Espagne | L'Angleterre | La France | L'Allemagne | 2-1 en finale contre l'Angleterre.
Quel pays a gagné l'Euro 2020, joué en 2021 ? | L'Italie | L'Angleterre | Le Portugal | La France | Aux tirs au but contre l'Angleterre, à Wembley.
Combien de remplacements une équipe peut-elle faire dans un match officiel aujourd'hui ? | 5 | 3 | 4 | 7 | La règle est passée de 3 à 5 après 2020.
Quel club français est surnommé « les Verts » ? | L'AS Saint-Étienne | Le FC Nantes | Le RC Lens | L'AJ Auxerre | Le club français aux 10 titres de champion.
Qui organise la Coupe du monde des clubs et les grands tournois mondiaux ? | La FIFA | L'UEFA | La LFP | Le CIO | L'UEFA s'occupe de l'Europe, le CIO des Jeux olympiques.
`,
jeux: `
Comment s'appelle le frère de Mario ? | Luigi | Wario | Toad | Yoshi | Habillé en vert.
Quelle console hybride Nintendo est sortie en 2017 ? | La Switch | La Wii U | La 3DS | La GameCube | Elle se joue sur la télé ou en portable.
Quel monstre vert explose dans Minecraft ? | Le Creeper | L'Enderman | Le Zombie | Le Ghast | Avec son célèbre « tsss… ».
Quelle entreprise fabrique la Xbox ? | Microsoft | Sony | Nintendo | Sega | La première Xbox est sortie en 2001.
Comment s'appelle le mode où 100 joueurs s'affrontent jusqu'au dernier dans Fortnite ? | Battle royale | Match à mort | Capture du drapeau | Mode histoire | Le dernier survivant gagne.
Quel jeu de Riot Games oppose deux équipes de 5 champions ? | League of Legends | Dota 2 | Overwatch | Valorant | Valorant est aussi de Riot, mais c'est un jeu de tir.
Dans quel jeu incarne-t-on l'aventurière Lara Croft ? | Tomb Raider | Uncharted | Far Cry | Resident Evil | Sorti en 1996.
Comment s'appelle la princesse que Mario doit souvent sauver ? | Peach | Zelda | Daisy | Rosalina | Zelda est la princesse d'une autre série.
Comment s'appelle le grand ennemi de Mario ? | Bowser | Ganon | Wario | Donkey Kong | Le roi des Koopa.
Combien de cases compte un échiquier ? | 64 | 32 | 81 | 100 | 8 lignes × 8 colonnes.
Aux échecs, quelle pièce se déplace en forme de L ? | Le cavalier | Le fou | La tour | La reine | C'est la seule pièce qui peut sauter par-dessus les autres.
Au Monopoly français, quelle est la rue la plus chère ? | La rue de la Paix | Les Champs-Élysées | L'avenue Foch | Le boulevard de Belleville | Le boulevard de Belleville est la moins chère.
Comment s'appelle aujourd'hui le jeu de football PES de Konami ? | eFootball | EA Sports FC | Football Manager | FIFA Street | Le nom a changé en 2021.
De quel pays vient l'éditeur Ubisoft ? | La France | Le Canada | Le Japon | Les États-Unis | Fondé en Bretagne en 1986.
Quelle série d'Ubisoft met en scène des assassins à travers l'histoire ? | Assassin's Creed | Far Cry | Watch Dogs | Splinter Cell | Le premier épisode est sorti en 2007.
Dans quel jeu de Supercell construit-on un village et rejoint-on un clan ? | Clash of Clans | Brawl Stars | Hay Day | Boom Beach | Sorti en 2012 sur mobile.
Dans Among Us, que faut-il découvrir ? | Qui est l'imposteur | Le trésor caché | La sortie du labyrinthe | Le code secret | Les imposteurs sabotent le vaisseau.
Dans quel jeu de course de Nintendo lance-t-on des carapaces ? | Mario Kart | Need for Speed | Gran Turismo | Forza | La carapace bleue vise le premier.
De quelle couleur est Pac-Man ? | Jaune | Rouge | Bleu | Vert | Les fantômes sont rouge, rose, bleu et orange.
Quel Pokémon porte le numéro 1 du Pokédex ? | Bulbizarre | Pikachu | Salamèche | Carapuce | Pikachu porte le numéro 25.
Quel jeu de cartes oblige à crier son nom quand il ne reste qu'une carte ? | UNO | Le Mille Bornes | La Bataille | Le Solitaire | Sinon, on pioche deux cartes de pénalité.
Dans Rocket League, à quoi jouent les voitures ? | Au football | Au basket | Au golf | Au tennis | Avec un ballon géant.
Quelle entreprise a fabriqué la Game Boy ? | Nintendo | Sony | Sega | Atari | Sortie en 1989.
Dans quel jeu incarne-t-on Kratos, un guerrier spartiate ? | God of War | Assassin's Creed | Diablo | Dark Souls | Une série de PlayStation.
Dans Candy Crush, que faut-il aligner ? | Des bonbons | Des fruits | Des pierres précieuses | Des bulles | Au moins trois bonbons de la même couleur.
Dans quel jeu combat-on avec des Pokémon dans la vraie rue grâce au téléphone ? | Pokémon GO | Pokémon Rouge | Pokémon Stadium | Pokémon Snap | Sorti en 2016, en réalité augmentée.
Quel petit dinosaure vert Mario chevauche-t-il ? | Yoshi | Rex | Dino | Spike | Il gobe ses ennemis avec sa langue.
Quel jeu propose des parties de 5 contre 5 avec des « agents » aux pouvoirs spéciaux ? | Valorant | Fortnite | Minecraft | Rocket League | Un jeu de tir de Riot Games sorti en 2020.
Au jeu de dames, combien de pions a chaque joueur sur un damier de 100 cases ? | 20 | 12 | 16 | 24 | Le jeu de dames international se joue sur 10 × 10 cases.
Quelle console Sony est sortie en 2020 ? | La PlayStation 5 | La PlayStation 4 | La PS Vita | La PlayStation 3 | Sortie en novembre 2020.
`,
cine: `
Qui a réalisé « Jurassic Park » ? | Steven Spielberg | James Cameron | George Lucas | Peter Jackson | Sorti en 1993.
Dans quelle saga entend-on « Non, je suis ton père » ? | Star Wars | Star Trek | Le Seigneur des anneaux | Matrix | Dans « L'Empire contre-attaque », en 1980.
Qu'est-ce que Shrek ? | Un ogre | Un troll | Un géant | Un dragon | Un ogre vert qui vit dans un marais.
Dans quelle saga trouve-t-on le magicien Gandalf ? | Le Seigneur des anneaux | Harry Potter | Narnia | Game of Thrones | D'après les livres de J.R.R. Tolkien.
Quel acteur a joué Iron Man dans les films Marvel ? | Robert Downey Jr. | Chris Evans | Chris Hemsworth | Mark Ruffalo | Chris Evans jouait Captain America.
Dans « Ratatouille », de quoi rêve le rat Rémy ? | Devenir chef cuisinier | Devenir chanteur | Voyager à New York | Devenir peintre | Dans un grand restaurant de Paris.
Quel film de Dany Boon se passe dans le Nord de la France ? | Bienvenue chez les Ch'tis | Intouchables | Les Bronzés | Le Dîner de cons | Plus de 20 millions d'entrées en 2008.
Qui est le meilleur ami d'Astérix ? | Obélix | Idéfix | Panoramix | Abraracourcix | Il est tombé dans la potion magique quand il était petit.
Dans quelle ville se passe le film « Taxi » ? | Marseille | Paris | Nice | Lyon | Produit par Luc Besson.
Quel acteur joue Dom Toretto dans « Fast & Furious » ? | Vin Diesel | Dwayne Johnson | Jason Statham | Paul Walker | Paul Walker jouait Brian O'Conner.
Qui joue le Joker dans le film « Joker » de 2019 ? | Joaquin Phoenix | Heath Ledger | Jared Leto | Jack Nicholson | Oscar du meilleur acteur.
Quelle série se déroule sur le continent de Westeros ? | Game of Thrones | The Witcher | Vikings | The Crown | Adaptée des livres de George R. R. Martin.
Dans quelle ville fictive se passe « Stranger Things » ? | Hawkins | Springfield | Riverdale | Gotham | Dans l'Indiana, dans les années 1980.
De quel pays vient la série « La Casa de papel » ? | L'Espagne | Le Mexique | L'Italie | L'Argentine | Les braqueurs portent des noms de villes.
Qui a créé Mickey Mouse ? | Walt Disney | Hayao Miyazaki | Tex Avery | Hergé | Avec Ub Iwerks, en 1928.
Quel film Pixar se passe dans la tête d'une jeune fille, avec Joie et Tristesse ? | Vice-versa | Soul | Coco | Toy Story | « Inside Out » en anglais.
De quel pays vient le film « Parasite », Oscar du meilleur film 2020 ? | La Corée du Sud | Le Japon | La Chine | La Thaïlande | Le premier film non anglophone à gagner cet Oscar.
Dans quelle ville est remise la Palme d'or ? | Cannes | Venise | Berlin | Deauville | Au festival de Cannes, chaque mois de mai.
Qui joue Jack dans « Titanic » ? | Leonardo DiCaprio | Brad Pitt | Matt Damon | Tom Hanks | Face à Kate Winslet.
Comment s'appelle le chien de Tintin ? | Milou | Idéfix | Pluto | Rantanplan | Idéfix est le chien d'Obélix.
Comment s'appelle l'école de Harry Potter ? | Poudlard | Beauxbâtons | Durmstrang | Ilvermorny | « Hogwarts » en anglais.
Comment s'appelle le grand méchant de Harry Potter ? | Voldemort | Sauron | Dark Vador | Grindelwald | « Celui-dont-on-ne-doit-pas-prononcer-le-nom ».
Qui sont les maîtres des Minions dans « Moi, moche et méchant » ? | Gru | Le Joker | Vector | Megamind | Les Minions parlent une langue à eux.
Sur quelle planète se passe « Avatar » ? | Pandora | Tatooine | Arrakis | Krypton | Plus exactement sur une lune, Pandora.
Quel pays imaginaire est celui de Black Panther ? | Le Wakanda | Le Zamunda | La Latvérie | La Sokovie | Un royaume africain très avancé.
Dans quel quartier de Paris se passe « Le Fabuleux Destin d'Amélie Poulain » ? | Montmartre | Le Marais | Saint-Germain | La Défense | Avec Audrey Tautou.
Dans quelle ville vivent les Simpson ? | Springfield | Shelbyville | South Park | Quahog | Quahog, c'est la ville des Griffin.
Quel studio japonais a produit « Le Voyage de Chihiro » ? | Le studio Ghibli | Toei Animation | Pixar | DreamWorks | Réalisé par Hayao Miyazaki.
Comment s'appelle le lion, père de Simba ? | Mufasa | Scar | Nala | Rafiki | Scar est son frère.
Quel film de 2011 met en scène Omar Sy et François Cluzet ? | Intouchables | Le Grand Bain | Les Visiteurs | Qu'est-ce qu'on a fait au Bon Dieu ? | L'histoire d'une amitié inattendue.
`,
emoji: `
🐭👨‍🍳🍲 | Ratatouille | Mickey | Le Chef | La Belle et le Clochard | Un rat cuisinier à Paris.
🐼🥋 | Kung Fu Panda | Rebelle | Mulan | Le Roi Lion | Po, le panda guerrier.
👽📞🏠 | E.T. l'extra-terrestre | Men in Black | Lilo et Stitch | Rencontres du troisième type | « E.T. téléphone maison. »
🦈🏊😱 | Les Dents de la mer | Le Monde de Nemo | Titanic | Waterworld | Le film qui a fait peur de la mer à toute une génération.
🍫🏭🎩 | Charlie et la chocolaterie | Hansel et Gretel | Ratatouille | Chocolat | Avec Willy Wonka.
🧞🪔🐒 | Aladdin | Le Livre de la jungle | Sinbad | Hercule | Le génie de la lampe et le singe Abu.
🐉🛡️👦 | Dragons | Shrek | Peter Pan | Raya | Harold et son dragon Krokmou.
🧜‍♀️🐠🦀 | La Petite Sirène | Vaiana | Le Monde de Nemo | Ponyo | Ariel, Polochon et Sébastien.
🏎️⚡🏁 | Cars | Fast & Furious | Speed Racer | Turbo | Flash McQueen.
🎈🏠👴 | Là-haut | Toy Story | Coco | Le Voyage d'Arlo | Une maison s'envole avec des ballons.
🦍🏙️✈️ | King Kong | Godzilla | La Planète des singes | Rampage | Un gorille géant en haut d'un gratte-ciel.
👸🍎🧙‍♀️ | Blanche-Neige | La Belle au bois dormant | Raiponce | Cendrillon | La pomme empoisonnée.
💍🌋🧝 | Le Seigneur des anneaux | Harry Potter | Narnia | Le Hobbit | L'anneau doit être détruit dans la Montagne du Destin.
🕶️💊🐇 | Matrix | Alice au pays des merveilles | Inception | Men in Black | Pilule rouge ou pilule bleue ?
🏴‍☠️🦜⚓ | Pirates des Caraïbes | Peter Pan | Hook | L'Île au trésor | Jack Sparrow.
🤡🎈🚲 | Ça | Joker | Le Cirque | Dumbo | Le clown Grippe-Sou.
🔨⚡👑 | Thor | Iron Man | Hulk | Black Panther | Le dieu nordique du tonnerre.
🛡️⭐🇺🇸 | Captain America | Superman | Wonder Woman | Iron Man | Le bouclier étoilé.
🧑‍🚀🥔🔴 | Seul sur Mars | Interstellar | Gravity | Apollo 13 | Il fait pousser des pommes de terre sur Mars.
🐻🐯👦🌴 | Le Livre de la jungle | Tarzan | Le Roi Lion | L'Odyssée de Pi | Mowgli, Baloo et Shere Khan.
👗👠🕛 | Cendrillon | Blanche-Neige | La Belle et la Bête | Raiponce | Elle doit rentrer avant minuit.
🥊🏃🪜 | Rocky | Karaté Kid | Million Dollar Baby | Raging Bull | Il monte les marches de Philadelphie en courant.
🧊🦣🐿️ | L'Âge de glace | La Reine des neiges | Dinosaure | Le Voyage d'Arlo | Manny le mammouth et Scrat l'écureuil.
🦁🦓🦒🗽 | Madagascar | Le Roi Lion | Zootopie | Jumanji | Des animaux du zoo de New York.
🤖🚗🔫 | Transformers | Terminator | Robocop | Cars | Des robots qui se transforment en voitures.
🏠🎄👦🪤 | Maman, j'ai raté l'avion ! | Le Grinch | Le Père Noël est une ordure | Le Pôle Express | Kevin piège les cambrioleurs.
💚👹🏰 | Shrek | Hulk | Le Grinch | Monstres et Cie | Un ogre vert délivre une princesse.
🐟🔵🤔 | Le Monde de Dory | Vaiana | Gang de requins | La Petite Sirène | Le poisson bleu qui oublie tout.
🧸🍯🐝 | Winnie l'Ourson | Paddington | Ted | Bambi | L'ours qui adore le miel.
🎃💀🎄 | L'Étrange Noël de Monsieur Jack | Coco | Les Noces funèbres | Halloween | Jack Skellington découvre Noël.
`,
musique: `
Qui chante « Formidable » ? | Stromae | Maître Gims | Angèle | Christophe Maé | Sorti en 2013.
Quel groupe chante « Bohemian Rhapsody » ? | Queen | The Beatles | Pink Floyd | Led Zeppelin | Avec Freddie Mercury.
De quelle ville venaient les Beatles ? | Liverpool | Londres | Manchester | Dublin | En Angleterre.
Combien de notes compte la gamme, de do à si ? | 7 | 8 | 5 | 12 | Do, ré, mi, fa, sol, la, si.
Quelle chanson d'Édith Piaf est connue dans le monde entier ? | La Vie en rose | Ne me quitte pas | La Bohème | Les Champs-Élysées | « Ne me quitte pas » est de Jacques Brel.
Quel chanteur était surnommé « l'idole des jeunes » ? | Johnny Hallyday | Eddy Mitchell | Claude François | Michel Sardou | Il a chanté pendant plus de 50 ans.
Quel instrument compte généralement 88 touches ? | Le piano | L'orgue | L'accordéon | Le synthétiseur | 52 blanches et 36 noires.
De quel groupe faisait partie Gims ? | Sexion d'Assaut | 1995 | IAM | Psy 4 de la rime | Avec Lefa, Black M et d'autres.
De quel pays vient Angèle ? | La Belgique | La France | La Suisse | Le Canada | Comme Stromae, elle vient de Belgique.
Quel chanteur est surnommé « le King » ? | Elvis Presley | Michael Jackson | Frank Sinatra | Chuck Berry | Le roi du rock 'n' roll.
De quel groupe Beyoncé faisait-elle partie avant sa carrière solo ? | Destiny's Child | Spice Girls | TLC | The Pussycat Dolls | Groupe américain des années 2000.
De quelle île vient Rihanna ? | La Barbade | La Jamaïque | Cuba | Haïti | Dans les Caraïbes.
Quelle chanteuse a fait la tournée géante « The Eras Tour » ? | Taylor Swift | Beyoncé | Adele | Dua Lipa | L'une des tournées qui ont rapporté le plus de l'histoire.
Quel grand compositeur est devenu sourd ? | Ludwig van Beethoven | Mozart | Chopin | Bach | Il a continué à composer malgré tout.
Qui a composé « Les Quatre Saisons » ? | Antonio Vivaldi | Mozart | Beethoven | Bach | Un compositeur italien.
Quelle fête a lieu le 21 juin en France ? | La Fête de la musique | La fête nationale | La Saint-Jean du rock | La fête du cinéma | Créée en 1982.
Avec quel chanteur Daft Punk a-t-il fait « Get Lucky » ? | Pharrell Williams | Bruno Mars | The Weeknd | Justin Timberlake | Avec Nile Rodgers à la guitare.
David Guetta est… | Un DJ français | Un rappeur belge | Un chanteur canadien | Un pianiste suisse | Connu dans le monde entier.
De quel instrument jouait Louis Armstrong ? | De la trompette | Du saxophone | Du piano | De la batterie | Une légende du jazz.
Combien de musiciens compte un quatuor ? | 4 | 3 | 5 | 8 | Un trio en compte 3, un quintette 5.
De quel pays vient Céline Dion ? | Le Canada | La France | La Belgique | La Suisse | Du Québec.
Qui chante « Hello » et « Rolling in the Deep » ? | Adele | Rihanna | Lady Gaga | Amy Winehouse | Une chanteuse britannique.
De quelle ville américaine vient Eminem ? | Detroit | New York | Los Angeles | Chicago | Raconté dans le film « 8 Mile ».
De quel pays vient le groupe BTS ? | La Corée du Sud | Le Japon | La Chine | Les Philippines | Le groupe de K-pop le plus connu.
De quel pays vient Ed Sheeran ? | Le Royaume-Uni | L'Irlande | L'Australie | Les États-Unis | Connu pour « Shape of You ».
Qui chante « Dernière danse » ? | Indila | Aya Nakamura | Zaz | Louane | Un tube de 2013.
De quel pays vient Shakira ? | La Colombie | Le Mexique | L'Espagne | L'Argentine | Née à Barranquilla.
De quelle ville vient le rappeur Orelsan ? | Caen | Rouen | Lille | Rennes | Il en parle dans plusieurs chansons.
De quel instrument joue un batteur ? | De la batterie | De la basse | Du clavier | Du violon | Avec grosse caisse, caisse claire et cymbales.
Quel rappeur français est connu pour le « 92i » ? | Booba | Kaaris | Rohff | Niska | Du nom de son département, les Hauts-de-Seine.
`,
lyon: `
Quelle colline de Lyon est surnommée « la colline qui travaille » ? | La Croix-Rousse | Fourvière | Montchat | La Duchère | Fourvière, c'est « la colline qui prie ».
Les canuts étaient des ouvriers de quel secteur ? | La soie | Le charbon | Le vin | L'acier | Ils travaillaient sur des métiers à tisser à la Croix-Rousse.
Comment s'appelle la célèbre marionnette lyonnaise ? | Guignol | Pinocchio | Polichinelle | Arlequin | Créée par Laurent Mourguet vers 1808.
Quel grand parc de Lyon possède un zoo gratuit ? | Le parc de la Tête d'Or | Le parc de Gerland | Le parc de Parilly | Le parc des Hauteurs | L'un des plus grands parcs urbains de France.
Sur quelle place se trouve la statue de Louis XIV ? | La place Bellecour | La place des Terreaux | La place Carnot | La place Jean-Macé | L'une des plus grandes places d'Europe.
Dans quelle commune se trouve le stade de l'OL ? | Décines-Charpieu | Villeurbanne | Vénissieux | Gerland | Inauguré en 2016.
Comment s'appelle le quartier d'affaires avec la tour surnommée « le Crayon » ? | La Part-Dieu | Confluence | Gerland | Vaise | La gare TGV principale y est aussi.
Quel chef lyonnais était surnommé le « pape de la gastronomie » ? | Paul Bocuse | Alain Ducasse | Joël Robuchon | Cyril Lignac | Son restaurant est à Collonges-au-Mont-d'Or.
Depuis quelle année le site historique de Lyon est-il classé à l'Unesco ? | 1998 | 1975 | 2008 | 2015 | Vieux Lyon, Fourvière, Presqu'île et pentes de la Croix-Rousse.
Quel était le nom de Lyon à l'époque romaine ? | Lugdunum | Lutèce | Massilia | Burdigala | Lutèce, c'est Paris ; Massilia, Marseille.
Quels monuments antiques trouve-t-on à Fourvière ? | Des théâtres romains | Un château fort | Une pyramide | Des arènes grecques | Ils accueillent encore des concerts l'été.
Quel écrivain né à Lyon a donné son nom à l'aéroport ? | Antoine de Saint-Exupéry | Victor Hugo | Jules Verne | Frédéric Dard | L'auteur du « Petit Prince ».
Quelle tarte de couleur rose est une spécialité lyonnaise ? | La tarte aux pralines | La tarte Tatin | La tarte au citron | La tarte bourdaloue | Avec des pralines roses concassées.
Combien de lignes de métro compte Lyon ? | 4 | 2 | 6 | 8 | Les lignes A, B, C et D.
Quelle est la place de Lyon parmi les plus grandes villes de France ? | 3e | 2e | 4e | 5e | Après Paris et Marseille.
Dans quelle région se trouve Lyon ? | Auvergne-Rhône-Alpes | Bourgogne-Franche-Comté | Provence-Alpes-Côte d'Azur | Occitanie | Lyon en est la capitale régionale.
Que posent les Lyonnais aux fenêtres le 8 décembre ? | Des lumignons | Des drapeaux | Des guirlandes de Noël | Des lanternes chinoises | De petites bougies dans des verres.
Quelle rivière passe au pied de la colline de Fourvière ? | La Saône | Le Rhône | L'Isère | L'Ain | Le Rhône passe de l'autre côté de la Presqu'île.
Quelle ville est surnommée la Ville rose ? | Toulouse | Lyon | Marseille | Bordeaux | À cause de la couleur de ses briques.
Quelle ville est surnommée la cité phocéenne ? | Marseille | Nice | Toulon | Montpellier | Fondée par des Grecs de Phocée.
Quel est le nom de la figure féminine qui représente la République ? | Marianne | Jeanne | Liberté | Gauloise | Son buste est dans chaque mairie.
Quel est l'hymne national français ? | La Marseillaise | Le Chant des partisans | L'Internationale | La Carmagnole | Écrite en 1792 par Rouget de Lisle.
Dans quelle ville siège le Parlement européen ? | Strasbourg | Bruxelles | Luxembourg | Genève | Certaines sessions ont aussi lieu à Bruxelles.
Dans quelle région se trouve le Mont-Saint-Michel ? | La Normandie | La Bretagne | Les Pays de la Loire | Les Hauts-de-France | À la limite de la Bretagne.
Quelle est la plus grande ville de Bretagne ? | Rennes | Brest | Nantes | Quimper | Nantes est dans les Pays de la Loire.
Combien d'habitants compte la France, environ ? | 68 millions | 45 millions | 85 millions | 100 millions | Outre-mer compris.
Quel est le surnom des enfants à Lyon ? | Les gones | Les minots | Les marmots | Les gosses | « Minot », c'est à Marseille.
Quel pont piéton relie la Presqu'île au Vieux Lyon près du palais de justice ? | La passerelle du Palais de Justice | Le pont Lafayette | Le pont Pasteur | Le pont de l'Université | Elle enjambe la Saône.
Quelle charcuterie lyonnaise se cuit dans une pâte ? | Le saucisson brioché | Le jambon persillé | La rosette | Le boudin | Souvent servi en tranches chaudes.
Quel fleuve arrive à Lyon en venant de Suisse ? | Le Rhône | La Saône | La Loire | Le Doubs | Il sort du lac Léman, à Genève.
`,
code: `
Que signifie un panneau rond rouge avec une barre blanche ? | Sens interdit | Stationnement interdit | Fin d'interdiction | Route barrée pour travaux | On ne peut pas entrer dans cette rue.
Quelle forme a le panneau Stop ? | Octogonale | Ronde | Triangulaire | Carrée | 8 côtés, pour le reconnaître même de dos.
La ceinture est-elle obligatoire à l'arrière ? | Oui, toujours | Non, jamais | Seulement sur autoroute | Seulement la nuit | Obligatoire à l'arrière depuis 1990.
Vitesse maximale sur une route à double sens sans séparateur, hors agglomération ? | 80 km/h | 70 km/h | 90 km/h | 100 km/h | Sauf si un panneau autorise 90 km/h.
Vitesse maximale sur une route à 2×2 voies séparées, hors agglomération ? | 110 km/h | 90 km/h | 100 km/h | 130 km/h | 100 km/h par temps de pluie.
Combien de points a un permis probatoire au départ ? | 6 | 12 | 8 | 3 | Il passe à 12 au bout de la période probatoire sans infraction.
Combien de points au maximum sur un permis de conduire ? | 12 | 10 | 15 | 20 | Le capital maximal est de 12 points.
Combien de temps dure la période probatoire sans conduite accompagnée ? | 3 ans | 1 an | 2 ans | 5 ans | 2 ans après une conduite accompagnée.
Taux d'alcool maximum pour un permis classique ? | 0,5 g par litre de sang | 0,2 g par litre de sang | 0,8 g par litre de sang | 1 g par litre de sang | Soit 0,25 mg par litre d'air expiré.
Que risque-t-on en tenant son téléphone en main au volant ? | 135 € et 3 points | 35 € seulement | Un simple avertissement | 1 point | Même à l'arrêt dans un bouchon.
Combien de points perd-on pour un feu rouge grillé ? | 4 | 1 | 2 | 6 | Plus 135 € d'amende.
Quels équipements sont obligatoires dans la voiture ? | Un gilet jaune et un triangle | Un extincteur | Une trousse de secours | Une roue de secours | Le gilet doit être accessible depuis le siège.
Les « codes », ce sont… | Les feux de croisement | Les feux de route | Les feux de position | Les feux de brouillard | Les feux de route sont les « pleins phares ».
Peut-on franchir une ligne blanche continue ? | Non | Oui pour doubler | Oui la nuit | Oui si la route est vide | On ne la franchit pas et on ne la chevauche pas.
Que signifie un panneau en losange jaune ? | Route prioritaire | Danger | Fin de route | Rond-point | On est prioritaire aux intersections.
Qui est prioritaire dans un rond-point avec « Cédez le passage » à l'entrée ? | Ceux déjà dans le rond-point | Ceux qui entrent | Ceux qui viennent de droite | Les camions | C'est le cas de la plupart des ronds-points.
Quand peut-on utiliser la bande d'arrêt d'urgence ? | Seulement en cas d'urgence | Pour doubler | Dans les bouchons | Pour téléphoner | Panne, malaise ou accident.
À quel âge peut-on passer le permis B, depuis 2024 ? | 17 ans | 16 ans | 18 ans | 15 ans | On peut conduire seul dès 17 ans.
À partir de quel âge peut-on commencer la conduite accompagnée ? | 15 ans | 14 ans | 16 ans | 17 ans | Avec un accompagnateur ayant au moins 5 ans de permis.
Que signifie un panneau triangulaire à bord rouge ? | Un danger | Une obligation | Une interdiction | Une indication | Il annonce un danger : virage, travaux, animaux…
Vitesse maximale dans une zone de rencontre ? | 20 km/h | 10 km/h | 30 km/h | 50 km/h | Les piétons y sont prioritaires.
Un piéton attend au bord d'un passage piéton. Que faire ? | S'arrêter pour le laisser traverser | Klaxonner | Passer vite avant lui | Faire un appel de phares | Ne pas céder le passage coûte 6 points.
Que signifie un feu orange clignotant ? | Passer avec prudence | S'arrêter obligatoirement | Accélérer | Le carrefour est fermé | Les règles de priorité s'appliquent.
Peut-on klaxonner en ville ? | Seulement en cas de danger immédiat | Toujours | Pour saluer quelqu'un | La nuit uniquement | Sinon, c'est une infraction.
Quand utiliser les feux de brouillard arrière ? | Par brouillard ou neige | Quand il pleut un peu | La nuit | Dans les tunnels | Ils éblouissent dans les autres cas.
Au bout de combien de temps une voiture neuve passe-t-elle son premier contrôle technique ? | 4 ans | 2 ans | 5 ans | 10 ans | Puis tous les 2 ans.
Quand faut-il mettre son clignotant ? | Avant chaque changement de direction | Seulement sur autoroute | Seulement s'il y a des voitures | Après avoir tourné | Même sur une route vide.
Un bus quitte son arrêt en agglomération et met son clignotant. Que faire ? | Le laisser partir | Le doubler vite | Klaxonner | Accélérer | Il est prioritaire dans ce cas.
Quelle distance minimum pour dépasser un vélo en agglomération ? | 1 mètre | 50 cm | 2 mètres | 3 mètres | 1,5 m hors agglomération.
À partir de quel âge un enfant peut-il, en principe, s'asseoir à l'avant ? | 10 ans | 5 ans | 8 ans | 14 ans | Sauf exceptions, avec un siège adapté et l'airbag désactivé.
`,
cuisine: `
De quelle région vient la ratatouille ? | La Provence | L'Alsace | La Bretagne | La Normandie | Plus précisément de Nice.
De quelle région vient le camembert ? | La Normandie | La Savoie | L'Auvergne | Le Jura | Un fromage au lait de vache.
De quelle ville vient la bouillabaisse ? | Marseille | Nice | Bordeaux | Brest | Une soupe de poissons.
De quelle région vient la choucroute ? | L'Alsace | La Bretagne | La Provence | La Corse | Du chou fermenté et de la charcuterie.
De quelle région vient le cassoulet ? | Le Sud-Ouest | L'Alsace | La Bretagne | La Normandie | De Castelnaudary, Toulouse ou Carcassonne.
Avec quelle farine fait-on la galette bretonne salée ? | Le sarrasin | Le blé | Le maïs | Le riz | On l'appelle aussi blé noir.
Avec quel lait fait-on le roquefort ? | Le lait de brebis | Le lait de vache | Le lait de chèvre | Le lait de bufflonne | Affiné dans des grottes de l'Aveyron.
Quel est l'ingrédient principal du houmous ? | Le pois chiche | La lentille | Le haricot rouge | La fève | Avec de la crème de sésame.
Quel ingrédient n'est PAS dans la vraie carbonara italienne ? | La crème | L'œuf | Le fromage pecorino | Le poivre | La recette romaine n'utilise pas de crème.
Le safran vient… | D'une fleur | D'une racine | D'un arbre | D'un coquillage | Les pistils du crocus : l'épice la plus chère au monde.
Qu'est-ce qui fait lever le pain ? | La levure | Le sel | Le sucre | L'huile | Ou le levain.
Quand la baguette française a-t-elle été inscrite à l'Unesco ? | En 2022 | En 1995 | En 2010 | En 2018 | Le savoir-faire et la culture de la baguette.
De quel pays vient le döner kebab ? | La Turquie | La Grèce | Le Liban | L'Allemagne | Il est devenu très populaire en Allemagne.
De quel pays viennent les nems ? | Le Vietnam | La Chine | Le Japon | La Thaïlande | Des rouleaux frits.
Quelle boisson contient le tiramisu ? | Du café | Du thé | Du chocolat chaud | Du lait de coco | Un dessert italien au mascarpone.
De quel pays vient la pastilla ? | Le Maroc | La Turquie | Le Liban | L'Espagne | Un feuilleté sucré-salé.
Le mafé est un plat à base de… | Pâte d'arachide | Lait de coco | Crème fraîche | Fromage | Une recette d'Afrique de l'Ouest.
De quel pays vient le thiéboudiène ? | Le Sénégal | Le Cameroun | Le Mali | La Côte d'Ivoire | Riz au poisson, plat national.
De quel pays vient le kimchi ? | La Corée | Le Japon | La Chine | Le Vietnam | Du chou fermenté et pimenté.
De quel pays viennent les ramens ? | Le Japon | La Corée | La Chine | La Thaïlande | Une soupe de nouilles devenue culte.
De quel pays viennent les tacos traditionnels ? | Le Mexique | L'Espagne | Les États-Unis | L'Argentine | Avec une galette de maïs.
Quelle pâte verte et piquante accompagne les sushis ? | Le wasabi | Le pesto | Le gingembre | La moutarde | Le gingembre servi avec est rose ou beige.
Quel légume est la base du gratin dauphinois ? | La pomme de terre | La courgette | Le chou-fleur | Le poireau | Une spécialité du Dauphiné, près de Grenoble.
Avec quoi fabrique-t-on le beurre ? | De la crème de lait | De l'huile | Du fromage | Des œufs | On baratte la crème.
Quel pays est célèbre pour son sirop d'érable ? | Le Canada | La Suisse | La Norvège | L'Irlande | Le Québec en produit la majorité.
Avec quoi est fait le chocolat blanc ? | Du beurre de cacao | De la poudre de cacao | De la farine | De la vanille seule | Il ne contient pas de pâte de cacao.
Quelle herbe est la base du pesto ? | Le basilic | Le persil | La menthe | La coriandre | Avec pignons, parmesan et huile d'olive.
Quels sont les principaux ingrédients de la quiche lorraine ? | Œufs, crème et lardons | Tomates et fromage | Saumon et épinards | Poireaux et chèvre | Sans fromage dans la recette d'origine.
Quel plat savoyard se mange en trempant du pain dans du fromage fondu ? | La fondue | La raclette | La tartiflette | La croziflette | La raclette se mange avec des pommes de terre.
Quel fromage italien recouvre traditionnellement la pizza ? | La mozzarella | Le parmesan | La ricotta | Le gorgonzola | Pour la pizza Margherita.
`,
tech: `
Qui a fondé Apple avec Steve Wozniak ? | Steve Jobs | Bill Gates | Tim Cook | Elon Musk | En 1976, dans un garage.
Qui a fondé Amazon ? | Jeff Bezos | Elon Musk | Larry Page | Jack Ma | Au départ, une librairie en ligne.
Quelle entreprise développe le système Android ? | Google | Apple | Microsoft | Samsung | Samsung l'utilise sur ses téléphones.
Que veut dire « IA » ? | Intelligence artificielle | Internet avancé | Informatique automatique | Image animée | Des programmes qui apprennent à partir de données.
Quelle entreprise a créé ChatGPT ? | OpenAI | Google | Meta | Microsoft | Sorti fin 2022.
Combien de bits y a-t-il dans un octet ? | 8 | 2 | 10 | 16 | Un bit vaut 0 ou 1.
Qu'est-ce que le « phishing » ? | Un faux message pour voler des informations | Un jeu vidéo | Un réseau Wi-Fi | Un antivirus | On l'appelle aussi hameçonnage.
Qu'est-ce qu'un bon mot de passe ? | Long et varié | Sa date de naissance | « 123456 » | Le même partout | Idéalement, un mot de passe différent pour chaque site.
À quel groupe appartiennent WhatsApp et Instagram ? | Meta | Google | Apple | Microsoft | Le groupe de Facebook.
À quelle entreprise appartient YouTube ? | Google | Meta | Amazon | Microsoft | Rachetée en 2006.
Qu'est-ce qu'un « bug » en informatique ? | Une erreur dans un programme | Un virus | Un câble | Un clavier | Le mot vient de l'anglais « insecte ».
Comment s'appelle le symbole @ ? | L'arobase | L'esperluette | Le dièse | Le tilde | L'esperluette, c'est le &.
À quoi sert le Bluetooth ? | À connecter des appareils sans fil de près | À recharger la batterie | À aller sur internet partout | À protéger des virus | Écouteurs, enceintes, montres…
Qu'est-ce qu'un pixel ? | Un point d'une image | Un virus | Un câble | Un logiciel | Un écran Full HD en compte environ 2 millions.
Que fait le raccourci Ctrl + C ? | Copier | Coller | Couper | Fermer | Ctrl + V pour coller.
Que fait le raccourci Ctrl + Z ? | Annuler | Enregistrer | Imprimer | Zoomer | Pratique après une erreur.
Quel langage sert à mettre en forme le style des pages web ? | CSS | HTML | Python | SQL | Couleurs, polices, positions…
Qui a inventé le World Wide Web ? | Tim Berners-Lee | Bill Gates | Steve Jobs | Mark Zuckerberg | En 1989, au CERN, près de Genève.
Qu'est-ce que Linux ? | Un système d'exploitation libre | Un navigateur | Un réseau social | Un jeu vidéo | Il fait tourner la plupart des serveurs d'internet.
Quel est le navigateur web de Google ? | Chrome | Safari | Edge | Firefox | Safari est celui d'Apple, Edge celui de Microsoft.
Qu'est-ce qu'un QR code ? | Un code-barres carré | Un mot de passe | Un virus | Une monnaie | On le scanne avec l'appareil photo.
À quoi sert un VPN ? | À chiffrer sa connexion | À accélérer la batterie | À imprimer | À télécharger des jeux | Il fait passer la connexion par un serveur intermédiaire.
De quel pays vient Samsung ? | La Corée du Sud | Le Japon | La Chine | Taïwan | Fondée en 1938.
Que veut dire « stocker dans le cloud » ? | Garder ses fichiers sur internet | Les mettre sur une clé USB | Les imprimer | Les supprimer | Sur des serveurs accessibles de partout.
Quel est le rôle d'un processeur ? | Faire les calculs de l'ordinateur | Stocker les photos | Afficher l'image | Refroidir l'ordinateur | C'est le « cerveau » de l'ordinateur.
Qu'est-ce que la 5G ? | Une génération de réseau mobile | Une carte graphique | Un format vidéo | Une console | Plus rapide que la 4G.
Quel réseau social utilise des « snaps » ? | Snapchat | TikTok | X | LinkedIn | Des photos qui disparaissent.
Qui a fondé SpaceX et dirige Tesla ? | Elon Musk | Jeff Bezos | Bill Gates | Tim Cook | SpaceX a été fondée en 2002.
Quelle entreprise fabrique les processeurs Ryzen ? | AMD | Intel | Nvidia | Qualcomm | Concurrent d'Intel.
Combien vaut environ un kilo-octet ? | 1 000 octets | 100 octets | 10 octets | 1 million d'octets | Kilo veut dire mille.
`,
anglais: `
Que veut dire « butterfly » ? | Papillon | Beurre | Mouche | Oiseau | Mot à mot : « mouche à beurre ».
Que veut dire « Wednesday » ? | Mercredi | Lundi | Mardi | Samedi | Monday, Tuesday, Wednesday…
Que veut dire « kitchen » ? | Cuisine | Chambre | Salon | Jardin | Bedroom : chambre ; living room : salon.
Que veut dire « to borrow » ? | Emprunter | Prêter | Acheter | Vendre | Prêter se dit « to lend ».
Que veut dire « eventually » ? | Finalement | Éventuellement | Évidemment | Souvent | Faux ami : « éventuellement » se dit « possibly ».
Que veut dire « deception » ? | Une tromperie | Une déception | Une décision | Une réception | Faux ami : une déception se dit « disappointment ».
Que veut dire « mouse » ? | Souris | Maison | Mousse | Bouche | Au pluriel : « mice ».
Quel est le pluriel de « tooth » ? | Teeth | Tooths | Teeths | Toothes | Comme foot → feet.
Quel est le passé de « eat » ? | Ate | Eated | Eaten | Eat | I eat, I ate, I have eaten.
Quel est le passé de « buy » ? | Bought | Buyed | Brought | Buy | « Brought » est le passé de « bring ».
Que veut dire « I'm tired » ? | Je suis fatigué | J'ai soif | J'ai froid | Je suis pressé | « Tired » : fatigué.
Que veut dire « How old are you? » ? | Quel âge as-tu ? | Comment vas-tu ? | Où habites-tu ? | Comment t'appelles-tu ? | On répond : « I'm 20 years old ».
Que veut dire « Nice to meet you » ? | Enchanté | Bonne nuit | À bientôt | Bon appétit | Quand on rencontre quelqu'un.
Que veut dire « weather » ? | La météo | L'hiver | Le vent | Le week-end | « What's the weather like? » : quel temps fait-il ?
Que veut dire « ugly » ? | Laid | Gentil | Bizarre | Triste | Le contraire est « beautiful ».
Que veut dire « strawberry » ? | Fraise | Framboise | Paille | Cerise | Une framboise se dit « raspberry ».
Que veut dire « chicken » ? | Poulet | Cuisine | Fromage | Chien | Kitchen, c'est la cuisine.
Que veut dire « You're welcome » ? | De rien | Bienvenue | Tu es gentil | Entre | La réponse à « thank you ».
Que veut dire « lunch » ? | Déjeuner | Petit-déjeuner | Dîner | Goûter | Breakfast : petit-déjeuner ; dinner : dîner.
Que veut dire « yesterday » ? | Hier | Aujourd'hui | Demain | La semaine dernière | Tomorrow : demain.
Que veut dire « nephew » ? | Neveu | Nièce | Cousin | Petit-fils | Nièce se dit « niece ».
Que veut dire « shy » ? | Timide | Brillant | Ciel | Malin | Le ciel se dit « sky ».
Que veut dire « thirsty » ? | Assoiffé | Affamé | Trente | Fatigué | Thirty, c'est trente.
Que veut dire « a cold » ? | Un rhume | Une glace | Une colle | Un collier | « I have a cold » : j'ai un rhume.
Que veut dire « rain » ? | Pluie | Reine | Train | Neige | La neige se dit « snow ».
Que veut dire « to win » ? | Gagner | Boire | Venir | Vouloir | Le passé est « won ».
Quel est le contraire de « cheap » ? | Expensive | Chip | Cheaper | Free | Free veut dire gratuit.
Que veut dire « bathroom » ? | Salle de bain | Chambre | Grenier | Salle à manger | Aux États-Unis, on l'utilise aussi pour les toilettes.
Que veut dire « to be late » ? | Être en retard | Être tard le soir | Être fatigué | Être léger | « Sorry I'm late » : désolé, je suis en retard.
Que veut dire « beach » ? | Plage | Hêtre | Pêche | Biche | La pêche (fruit) se dit « peach ».
`
};
for (const k in PLUS) {
  if (!QUIZ[k]) continue;
  for (const line of PLUS[k].trim().split('\n')) {
    const p = line.split(' | ').map(s => s.trim());
    if (QUIZ[k].type === 'vf') QUIZ[k].qs.push([p[0], null, p[1] === 'V' ? 0 : 1, p[2]]);
    else QUIZ[k].qs.push([p[0], p.slice(1, 5), 0, p[5]]);
  }
}
