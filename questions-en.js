/* English version. A line starting with ~ is France-specific and is skipped for English players.
    Same quizzes, same order and same answer positions as the French files.
   Per quiz: "= name | subtitle", then one line per question:
   multiple choice "question | a | b | c | d | explanation", true/false "statement | explanation",
   personality test "question | a | b | c | d" then "P profile | description". */
const EN_CATS = { culture: 'Knowledge', sport: 'Sport & games', fun: 'Movies & music', vie: 'Everyday life', perso: 'Personality' };
const EN = {
culture: `= General knowledge | The great classic
What is the capital of Australia? | Sydney | Melbourne | Canberra | Perth | Canberra was chosen as a compromise between Sydney and Melbourne.
~What is the longest river in France? | The Seine | The Loire | The Rhône | The Garonne | The Loire is about 1,000 km long.
How many bones does an adult skeleton have? | 106 | 206 | 306 | 156 | Babies have more: some fuse together as we grow.
Which planet is closest to the Sun? | Venus | Mars | Mercury | Earth | Mercury, the smallest planet in the solar system.
Who painted the Mona Lisa? | Michelangelo | Leonardo da Vinci | Raphael | Picasso | It hangs in the Louvre, in Paris.
What is the chemical symbol for gold? | Go | Ag | Au | Gd | Au comes from the Latin "aurum".
In what year did humans first walk on the Moon? | 1959 | 1969 | 1979 | 1989 | Neil Armstrong, in July 1969.
What is the largest ocean in the world? | Atlantic | Indian | Arctic | Pacific | The Pacific covers about a third of the planet.
How many sides does a hexagon have? | 5 | 6 | 7 | 8 | It's also France's nickname, because of its shape.
Which language has the most native speakers? | English | Spanish | Mandarin | Hindi | Mandarin Chinese, ahead of Spanish.
What is the highest mountain in the world? | Everest | K2 | Mont Blanc | Kilimanjaro | About 8,849 m, in the Himalayas.
How many days are there in a leap year? | 366 | 365 | 364 | 360 | February 29 comes back every 4 years.
What is the currency of Japan? | The yen | The won | The yuan | The baht | The won is Korean, the yuan Chinese.
Who wrote "Les Misérables"? | Victor Hugo | Émile Zola | Honoré de Balzac | Molière | Published in 1862.
What is the smallest country in the world? | Vatican City | Monaco | San Marino | Malta | Less than half a square kilometre, right in Rome.
How many minutes are there in a day? | 1,440 | 1,240 | 1,640 | 960 | 24 hours × 60 minutes.
What colour do you get by mixing blue and yellow? | Green | Purple | Orange | Brown | Purple is blue + red.
Who composed "The Magic Flute"? | Mozart | Beethoven | Bach | Vivaldi | An opera from 1791.
Who wrote "The Little Prince"? | Antoine de Saint-Exupéry | Jules Verne | Albert Camus | Victor Hugo | One of the most translated books in the world.
In which city is the Christ the Redeemer statue? | Rio de Janeiro | São Paulo | Lisbon | Buenos Aires | On top of Corcovado mountain, in Brazil.
Which metal is liquid at room temperature? | Mercury | Lead | Iron | Tin | It used to be put in thermometers.
How many letters are in the Latin alphabet used in English and French? | 26 | 24 | 28 | 30 | From A to Z.
Which instrument measures temperature? | A thermometer | A barometer | An anemometer | A seismograph | A barometer measures air pressure.
Who wrote "Romeo and Juliet"? | William Shakespeare | Molière | Jean Racine | Charles Dickens | An English play from the late 16th century.
How many seconds are there in an hour? | 3,600 | 360 | 6,000 | 1,000 | 60 minutes × 60 seconds.
What is the official language of Brazil? | Portuguese | Spanish | Brazilian | English | Brazil was a Portuguese colony.
How many cards are in a standard deck, without jokers? | 52 | 32 | 54 | 48 | 54 with the two jokers.
Which famous museum is in Paris? | The Louvre | The Prado | The Uffizi | The Hermitage | The Prado is in Madrid, the Uffizi in Florence.
What does the Richter scale measure? | The strength of earthquakes | Wind speed | Rainfall | Volcano heat | It measures the magnitude of an earthquake.
Who discovered penicillin? | Alexander Fleming | Louis Pasteur | Marie Curie | Robert Koch | In 1928: the first antibiotic.
How many zeros are in a million? | 6 | 5 | 7 | 9 | 1,000,000.
Which detective was created by Arthur Conan Doyle? | Sherlock Holmes | Hercule Poirot | Arsène Lupin | Inspector Maigret | Poirot was created by Agatha Christie.
What is the capital of Egypt? | Cairo | Alexandria | Luxor | Giza | The largest city in the Arab world.
How many years are in a millennium? | 1,000 | 100 | 10,000 | 500 | A century is 100 years.
~What is celebrated on May 1 in France? | Labour Day | National Day | Armistice Day | The music festival | The music festival is on June 21.
What is the longest bone in the human body? | The femur | The tibia | The humerus | The radius | The thigh bone.
In which country are the pyramids of Giza? | Egypt | Mexico | Peru | Jordan | Near Cairo, at the edge of the desert.
How many colours are traditionally counted in a rainbow? | 7 | 5 | 6 | 9 | Red, orange, yellow, green, blue, indigo, violet.
Which painter cut off part of his own ear? | Vincent van Gogh | Pablo Picasso | Claude Monet | Salvador Dalí | In 1888, in Arles.
What is the name of the great bell of the clock at the Houses of Parliament in London? | Big Ben | Tower Bridge | London Eye | Buckingham | The name is often used for the whole tower.
`,
histoire: `= History | Kings, wars and revolutions
In what year was the Bastille stormed? | 1689 | 1789 | 1815 | 1848 | July 14, 1789, now France's national day.
Who was crowned Emperor of the French in 1804? | Louis XVI | Napoleon Bonaparte | Charlemagne | Louis-Philippe | Crowned at Notre-Dame de Paris.
In what year did the Second World War end? | 1918 | 1939 | 1945 | 1962 | May 8, 1945 in Europe, September in Asia.
In what year did the Berlin Wall fall? | 1961 | 1975 | 1989 | 1991 | November 9, 1989.
Who reached the Americas in 1492? | Magellan | Christopher Columbus | Vasco da Gama | Marco Polo | He thought he had reached the Indies.
Which king was nicknamed the Sun King? | Louis XIII | Louis XIV | Louis XV | Henry IV | He built the Palace of Versailles.
For what event was the Eiffel Tower built? | The Olympic Games | The 1889 World's Fair | Napoleon's coronation | The end of a war | It was meant to be taken down after 20 years.
Which pharaoh's tomb was found almost intact in 1922? | Ramesses II | Khufu | Tutankhamun | Cleopatra | Discovered by archaeologist Howard Carter.
~Who was the first president of France's Fifth Republic? | François Mitterrand | Charles de Gaulle | Georges Pompidou | Jacques Chirac | Elected in December 1958, he took office in January 1959.
In which war did Joan of Arc fight? | The Hundred Years' War | The Crusades | The Thirty Years' War | The 1870 war | Against the English, in the 15th century.
Which king was guillotined on January 21, 1793? | Louis XVI | Louis XIV | Louis XV | Charles X | During the French Revolution.
In what year did the First World War begin? | 1914 | 1912 | 1918 | 1939 | It ended on November 11, 1918.
Where did Napoleon die? | On the island of Saint Helena | On the island of Elba | In Paris | In Corsica | In exile, in 1821, in the middle of the Atlantic.
Who was the first person in space? | Yuri Gagarin | Neil Armstrong | Buzz Aldrin | John Glenn | April 12, 1961, for the USSR.
Which civilisation built Machu Picchu? | The Incas | The Aztecs | The Maya | The Olmecs | In Peru, in the 15th century.
Who was the main author of the US Declaration of Independence? | Thomas Jefferson | George Washington | Abraham Lincoln | Benjamin Franklin | Adopted on July 4, 1776.
~In what year did French women vote for the first time? | 1945 | 1918 | 1936 | 1968 | Right granted in 1944, first vote in April 1945.
Who was the first Roman emperor? | Augustus | Julius Caesar | Nero | Caligula | Julius Caesar was never emperor.
Which liner sank in 1912 after hitting an iceberg? | The Titanic | The Lusitania | The Queen Mary | The Normandie | On its maiden voyage.
Who gave the "I have a dream" speech? | Martin Luther King | Malcolm X | Nelson Mandela | Barack Obama | In Washington, in 1963.
Which country was Nelson Mandela president of? | South Africa | Kenya | Nigeria | Zimbabwe | From 1994 to 1999, after 27 years in prison.
~In what year did euro coins and notes arrive in France? | 2002 | 1999 | 1995 | 2005 | January 1, 2002.
Where did the June 6, 1944 landings take place? | In Normandy | In Provence | In Brittany | In Italy | D-Day, on five Normandy beaches.
Who was crowned emperor in the year 800? | Charlemagne | Clovis | Hugh Capet | Pepin the Short | Crowned in Rome by the Pope.
Which city was the capital of the Byzantine Empire? | Constantinople | Rome | Athens | Alexandria | Today's Istanbul.
Who invented movable-type printing in Europe? | Gutenberg | Leonardo da Vinci | Galileo | Isaac Newton | Around 1450, in Mainz.
Which country launched the first artificial satellite, Sputnik? | The USSR | The United States | China | France | In 1957.
How long did the Hundred Years' War actually last? | 116 years | 100 years | 99 years | 130 years | From 1337 to 1453.
Who led Free France during the Second World War? | Charles de Gaulle | Philippe Pétain | Jean Moulin | Georges Clemenceau | From London, after the appeal of June 18, 1940.
In what year did Algeria become independent? | 1962 | 1954 | 1958 | 1968 | After the Évian Accords.
Who was the first Black president of the United States? | Barack Obama | Joe Biden | Colin Powell | Bill Clinton | Elected in 2008.
Which navigator led the first expedition around the world? | Ferdinand Magellan | Vasco da Gama | Christopher Columbus | James Cook | Magellan died on the way; his crew finished the voyage in 1522.
~Who led the abolition of slavery in France in 1848? | Victor Schœlcher | Jules Ferry | Robespierre | Napoleon III | The decree of April 27, 1848.
~Jules Ferry is known for making school in France… | Free, secular and compulsory | Paid | Boys only | Optional | Laws of 1881 and 1882.
~Who led the abolition of the death penalty in France in 1981? | Robert Badinter | Simone Veil | Jacques Chirac | François Mitterrand | Robert Badinter, Minister of Justice, carried the law.
~In what year did paid holidays begin in France? | 1936 | 1919 | 1945 | 1968 | Under the Popular Front.
Which Greek city was famous for its warriors? | Sparta | Athens | Corinth | Delphi | Athens was better known for democracy and philosophy.
Who was the Roman god of war? | Mars | Jupiter | Neptune | Mercury | The red planet is named after him.
Which Roman emperor built a wall across Britain? | Hadrian | Augustus | Nero | Trajan | Hadrian's Wall, around 122 AD.
Which queen of Egypt is famous for her relationship with Julius Caesar and Mark Antony? | Cleopatra | Nefertiti | Hatshepsut | Nefertari | The last queen of ancient Egypt.
`,
geo: `= Geography | Capitals, countries and rivers
What is the capital of Canada? | Toronto | Montreal | Ottawa | Vancouver | Ottawa, in Ontario.
What is the capital of Morocco? | Casablanca | Rabat | Marrakech | Fez | Casablanca is the largest city, but Rabat is the capital.
What is the largest country in the world by area? | Canada | China | United States | Russia | More than 17 million km².
What is the largest hot desert in the world? | Gobi | Sahara | Kalahari | Atacama | It covers much of North Africa.
Which country is shaped like a boot? | Greece | Portugal | Italy | Croatia | With Sicily as the ball at its toe.
What is the longest river in Africa? | The Congo | The Niger | The Nile | The Zambezi | It flows through Egypt.
What is the capital of Japan? | Osaka | Kyoto | Tokyo | Seoul | Seoul is the capital of South Korea.
Which country has the largest population? | China | India | United States | Indonesia | India overtook China in 2023.
What is the capital of Turkey? | Istanbul | Ankara | Izmir | Antalya | Istanbul is the largest city, Ankara the capital.
On which continent is Brazil? | Africa | South America | North America | Oceania | It's the largest country in South America.
What is the capital of Italy? | Rome | Milan | Naples | Turin | Nicknamed the Eternal City.
What is the largest country in Africa by area? | Algeria | DR Congo | Sudan | Libya | Since South Sudan split off in 2011.
What is the capital of Germany? | Berlin | Munich | Frankfurt | Hamburg | Capital of reunified Germany since 1990.
What is the capital of Portugal? | Lisbon | Porto | Faro | Coimbra | On the Tagus river.
What is the capital of the United States? | Washington | New York | Los Angeles | Chicago | New York is the largest city, not the capital.
Which ocean borders the west coast of France? | The Atlantic | The Pacific | The Indian Ocean | The Arctic | From Brittany to the Basque Country.
What is the highest mountain in Africa? | Kilimanjaro | Mount Kenya | Toubkal | Mount Cameroon | About 5,895 m, in Tanzania.
What is the capital of Algeria? | Algiers | Oran | Constantine | Annaba | Nicknamed Algiers the White.
What is the capital of Senegal? | Dakar | Saint-Louis | Thiès | Bamako | Bamako is the capital of Mali.
What is the capital of Tunisia? | Tunis | Sfax | Sousse | Carthage | Carthage is an ancient city next to it.
Which sea separates Europe from Africa? | The Mediterranean | The Black Sea | The Red Sea | The Baltic Sea | It also borders the south of France.
In which country is Marrakech? | Morocco | Tunisia | Algeria | Egypt | Nicknamed the Red City.
What is the capital of Belgium? | Brussels | Antwerp | Liège | Bruges | It also hosts many European institutions.
Which city is the "federal city" of Switzerland? | Bern | Zurich | Geneva | Lausanne | Zurich and Geneva are bigger, but the government sits in Bern.
Which mountain range separates France from Spain? | The Pyrenees | The Alps | The Jura | The Vosges | The Alps border Italy and Switzerland.
~Which French island is nicknamed the Isle of Beauty? | Corsica | Réunion | Martinique | Belle-Île | In the Mediterranean.
In which ocean is Réunion Island? | The Indian Ocean | The Atlantic | The Pacific | The Mediterranean | East of Madagascar.
Buenos Aires is the capital of which country? | Argentina | Chile | Uruguay | Brazil | On the Río de la Plata.
What is the capital of Russia? | Moscow | Saint Petersburg | Kyiv | Minsk | Kyiv is the capital of Ukraine, Minsk of Belarus.
What is the smallest continent? | Oceania | Europe | Antarctica | South America | With Australia and the Pacific islands.
Which city is nicknamed "the Big Apple"? | New York | Chicago | Los Angeles | Miami | A nickname used since the 1920s.
~How many departments does France have, overseas included? | 101 | 95 | 96 | 110 | 96 in mainland France and 5 overseas.
What is the capital of China? | Beijing | Shanghai | Hong Kong | Guangzhou | Shanghai is the largest city.
In which country is the Suez Canal? | Egypt | Panama | Turkey | Saudi Arabia | It links the Mediterranean to the Red Sea.
What is the largest island in the world? | Greenland | Madagascar | Borneo | Iceland | Australia is counted as a continent.
Which country is called the Land of the Rising Sun? | Japan | China | South Korea | Thailand | In the east of Asia, where the sun rises.
What is the official capital of Côte d'Ivoire? | Yamoussoukro | Abidjan | Bouaké | Dakar | Abidjan remains the largest city and economic centre.
Which strait separates Spain from Morocco? | The Strait of Gibraltar | The Bosphorus | The Strait of Dover | The Strait of Messina | About 14 km wide at its narrowest.
What is the capital of Spain? | Madrid | Barcelona | Seville | Valencia | In the centre of the country.
Which river flows through Paris? | The Seine | The Loire | The Marne | The Rhône | It reaches the English Channel at Le Havre.
`,
sciences: `= Science & the human body | For curious minds
Which organ pumps blood around the body? | The liver | The heart | The lungs | The kidneys | It beats about 100,000 times a day.
Which gas do plants absorb to live? | Oxygen | Nitrogen | Carbon dioxide | Helium | They release oxygen through photosynthesis.
What is the chemical formula of water? | CO2 | H2O | O2 | NaCl | Two hydrogen atoms and one oxygen atom.
Roughly how fast does light travel? | 300 km/s | 3,000 km/s | 300,000 km/s | 3 million km/s | It takes about 8 minutes to reach us from the Sun.
Which planet is called the red planet? | Jupiter | Mars | Venus | Saturn | Because of the iron oxide in its soil.
How many chromosomes does a human have? | 23 | 46 | 48 | 64 | 23 pairs.
What is the largest organ of the human body? | The liver | The brain | The skin | The intestine | It weighs several kilos in an adult.
At what temperature does water boil at sea level? | 90 °C | 100 °C | 110 °C | 120 °C | In the mountains, it boils at a lower temperature.
Who came up with the theory of relativity? | Isaac Newton | Albert Einstein | Marie Curie | Galileo | With the famous formula E = mc².
Which blood type is the universal red blood cell donor? | A+ | AB+ | O negative | B negative | It can be given to almost anyone in an emergency.
How many planets are in the solar system? | 8 | 9 | 7 | 10 | Pluto was reclassified as a dwarf planet in 2006.
What is the largest planet in the solar system? | Jupiter | Saturn | Earth | Neptune | More than 1,000 Earths could fit inside it.
What is the chemical symbol for iron? | Fe | Fr | Ir | F | From the Latin "ferrum".
Which element has the symbol Na? | Sodium | Nitrogen | Neon | Nickel | From the Latin "natrium". Salt is sodium chloride.
How many teeth does an adult have, wisdom teeth included? | 32 | 28 | 30 | 36 | 28 without the four wisdom teeth.
What is the unit of electrical power? | The watt | The volt | The ampere | The ohm | The volt measures voltage, the ampere current.
How long does Earth take to go around the Sun? | About 365 days | 24 hours | 30 days | 10 years | In 24 hours, it spins once on itself.
Which scientist is linked to the law of gravity and the apple? | Isaac Newton | Albert Einstein | Galileo | Nicolaus Copernicus | Legend says an apple fell on him.
How many Nobel Prizes did Marie Curie win? | 2 | 1 | 3 | 0 | Physics in 1903, chemistry in 1911.
What is DNA for? | Carrying genetic information | Digestion | Carrying oxygen | Moving muscles | It's the "instruction manual" of every living thing.
Roughly what is the speed of sound in air? | 340 m/s | 34 m/s | 3,400 m/s | 300,000 km/s | About 1,200 km/h. 300,000 km/s is light.
Which organ filters blood to make urine? | The kidneys | The liver | The stomach | The lungs | We have two of them.
Roughly how many litres of blood does an adult have? | 5 litres | 2 litres | 10 litres | 15 litres | Between 4.5 and 6 litres depending on size.
Which vitamin does the body make thanks to sunlight? | Vitamin D | Vitamin C | Vitamin A | Vitamin B12 | It helps fix calcium in the bones.
What is the basic unit of every living thing? | The cell | The atom | The organ | The muscle | Our body has tens of trillions of them.
Which instrument do we use to observe the stars? | A telescope | A microscope | A stethoscope | A periscope | A microscope is for seeing the very small.
Which gas is most common in the air? | Nitrogen | Oxygen | Carbon dioxide | Hydrogen | About 78% nitrogen and 21% oxygen.
What is the pH of pure water? | 7 | 0 | 14 | 1 | 7 is neutral: neither acidic nor basic.
How many degrees are in a right angle? | 90° | 45° | 180° | 360° | A full turn is 360°.
What is the hottest planet in the solar system? | Venus | Mercury | Mars | Jupiter | Its thick atmosphere traps heat: over 450 °C.
How many chambers does the human heart have? | 4 | 2 | 3 | 6 | Two atria and two ventricles.
What are shooting stars really? | Dust burning up in the atmosphere | Falling stars | Satellites | Planes | They burn up at high speed, very high in the sky.
Which unit measures how loud a sound is? | The decibel | The hertz | The lux | The watt | Long exposure above 85 dB damages hearing.
Which force keeps us on the ground? | Gravity | Magnetism | Friction | Pressure | The same force keeps the Moon going around Earth.
At what temperature does water freeze? | 0 °C | -10 °C | 4 °C | 10 °C | It turns into ice.
Which organ lets us breathe? | The lungs | The heart | The liver | The stomach | They pass oxygen into the blood.
Which scientist developed the rabies vaccine? | Louis Pasteur | Alexander Fleming | Marie Curie | Claude Bernard | In 1885.
Which part of the body contains the smallest bone? | The ear | The hand | The foot | The nose | The stapes is about 3 mm long.
What is the layer of gases around Earth called? | The atmosphere | The crust | The core | The ocean | It protects us and lets us breathe.
What is the closest star to Earth? | The Sun | Proxima Centauri | Sirius | The North Star | Proxima Centauri is the closest after the Sun.
`,
animaux: `= Animals | The wild world
What is the largest animal in the world? | The elephant | The blue whale | The giraffe | The whale shark | It can be more than 25 metres long.
How many legs does a spider have? | 6 | 8 | 10 | 12 | Insects have 6, spiders 8.
What is the fastest land animal? | The lion | The cheetah | The horse | The antelope | It can sprint at over 100 km/h.
What is a baby cow called? | A foal | A calf | A lamb | A kid | A foal is a baby horse.
Which mammal can fly? | The squirrel | The bat | The lemur | The owl | Owls fly too, but they are birds.
How many hearts does an octopus have? | 1 | 2 | 3 | 8 | And its blood is blue.
A dolphin is… | A fish | A mammal | A reptile | An amphibian | It breathes air and feeds its young with milk.
Which animal is the symbol of France? | The eagle | The lion | The rooster | The bear | The Gallic rooster.
What do bees make? | Milk | Honey | Silk | Sugar | From flower nectar.
Which animal can sleep standing up? | The horse | The cat | The dog | The rabbit | Its legs lock so it doesn't fall.
What is the largest bird in the world? | The ostrich | The condor | The golden eagle | The albatross | It can be 2.5 m tall but cannot fly.
What is a baby horse called? | A foal | A calf | A kid | A cub | A cub is a baby bear or lion.
How many legs does an insect have? | 6 | 8 | 4 | 10 | Spiders, with 8, are not insects.
Which animal makes silk? | The silkworm | The garden spider | The bee | The ant | It's the caterpillar of a moth, the silk moth.
What does the giant panda mainly eat? | Bamboo | Fish | Fruit | Meat | It eats for up to a dozen hours a day.
What is the largest cat in the world? | The tiger | The lion | The jaguar | The leopard | A Siberian tiger can weigh over 300 kg.
How many humps does a dromedary have? | 1 | 2 | 3 | 0 | The Bactrian camel has two.
Which reptile can change colour? | The chameleon | The crocodile | The tortoise | The iguana | To communicate and control its temperature.
Which flightless bird lives in Antarctica? | The penguin | The auk | The puffin | The seagull | Auks and puffins can fly.
In which country do koalas live in the wild? | Australia | South Africa | Brazil | India | They eat eucalyptus leaves.
Which animal hangs in trees all its life and moves very slowly? | The sloth | The koala | The howler monkey | The lemur | It comes down from its tree about once a week.
What does the whale shark mainly eat? | Plankton | Seals | Dolphins | Seaweed | Despite its size, it's harmless to humans.
How many compartments does a cow's stomach have? | 4 | 1 | 2 | 6 | It's a ruminant: it chews its food twice.
Which mammal lays eggs? | The platypus | The kangaroo | The bat | The dolphin | It lives in Australia and has a duck's bill.
A kangaroo is a… | Marsupial | Rodent | Feline | Primate | It carries its baby in a pouch.
What is the fastest animal in the world, when diving? | The peregrine falcon | The cheetah | The golden eagle | The swordfish | It goes over 300 km/h in a dive.
Which animal has the longest neck? | The giraffe | The camel | The ostrich | The llama | Yet it has 7 neck vertebrae, like us.
How do bees tell each other where to find flowers? | With a dance | With cries | With colours | They don't communicate | The waggle dance shows direction and distance.
How many arms does a starfish usually have? | 5 | 4 | 6 | 8 | Some species have many more.
What is a baby goat called? | A kid | A lamb | A calf | A foal | A lamb is a baby sheep.
What is a female wild boar called? | A sow | A doe | A mare | A vixen | A doe is a female deer, a vixen a female fox.
What is a female deer called? | A doe | A sow | A ewe | A mare | A mare is a female horse.
Which animal hibernates in winter? | The marmot | The horse | The fox | The cat | It can sleep for up to 6 months.
Which animal is the WWF's symbol? | The giant panda | The tiger | The polar bear | The elephant | The logo has existed since 1961.
Where does the clownfish live? | In a sea anemone | In dead coral | In the sand | In a cave | It's protected from the anemone's venom.
What is a group of wolves called? | A pack | A herd | A school | A swarm | A school is for fish.
What is the heaviest land animal? | The African elephant | The hippopotamus | The rhinoceros | The giraffe | It can weigh more than 6 tonnes.
How many legs does a crab have, claws included? | 10 | 8 | 6 | 12 | It's a decapod: "ten feet".
Which animal is known for building dams? | The beaver | The otter | The coypu | The muskrat | With branches it gnaws.
Which bird can fly backwards? | The hummingbird | The eagle | The sparrow | The parrot | Its wings beat up to 80 times per second.
`,
vraifaux: `= True or false | Common myths
The Great Wall of China can be seen with the naked eye from the Moon. | False: it's far too narrow to be seen from that far.
A shark is a fish. | True: unlike the dolphin, it is a fish.
A tomato is a fruit. | True for botanists: it contains seeds.
Napoleon was much shorter than the men of his time. | False: he was about 1.69 m, a normal height back then.
Water boils at 100 °C at the top of Everest. | False: up there, it boils at around 70 °C.
Bats are blind. | False: they can see, and also find their way using ultrasound.
The Sun is a star. | True: it's even the closest star to us.
We only use 10% of our brain. | False: every area of the brain is used.
Goldfish have a 3-second memory. | False: they can remember things for months.
Diamond is made of carbon. | True: like the graphite in pencils.
Lightning never strikes the same place twice. | False: tall buildings and lightning rods are hit often.
Ostriches bury their heads in the sand when scared. | False: they lie flat on the ground or run away.
Chocolate is dangerous for dogs. | True: it contains theobromine, which is toxic to them.
Blood is blue in the veins. | False: it is always red, just darker in the veins.
The Eiffel Tower is slightly taller in summer. | True: the metal expands with heat, by a few centimetres.
On Venus, a day lasts longer than a year. | True: it spins very slowly on itself.
Humans lived at the same time as dinosaurs. | False: tens of millions of years separate them.
Spiders are insects. | False: they are arachnids, with 8 legs.
A whale is a fish. | False: it's a mammal that breathes air.
Sound travels faster in water than in air. | True: about 1,500 m/s in water versus 340 m/s in air.
An octopus has three hearts. | True: one for the body, two for the gills.
The Sahara is the largest desert in the world. | False: it's Antarctica, a cold desert. The Sahara is the largest hot desert.
Bananas grow on trees. | False: the banana plant is a giant herb.
Camels store water in their humps. | False: their humps are full of fat.
A fresh egg sinks to the bottom of a glass of water. | True: an egg that floats is no longer fresh.
Lions live in the jungle. | False: they mainly live in the savanna.
The Moon makes its own light. | False: it reflects the Sun's light.
Hair and nails keep growing after death. | False: the skin shrinks, which gives that impression.
The colour red makes bulls angry. | False: it's the movement of the cape that makes them charge.
Seawater freezes at 0 °C. | False: because of the salt, it freezes at around -2 °C.
Dolphins sleep with half of their brain awake. | True: that way they can come up to breathe.
Glass is a liquid that flows very slowly. | False: it's a solid. Old stained-glass windows were uneven from the start.
Everest is the highest mountain above sea level. | True: about 8,849 m.
The Pacific is the smallest ocean. | False: it's the largest. The smallest is the Arctic.
Diamonds and coal are made of the same element. | True: both are carbon.
Penguins live at the North Pole. | False: they live in the Southern Hemisphere.
Snails have teeth. | True: thousands of tiny teeth on a kind of tongue.
Cows have four stomachs. | True: more precisely, one stomach with four compartments.
The Great Wall of China is a single continuous wall. | False: it's a set of walls built in different eras.
The brain itself can't feel pain. | True: it has no pain receptors, which is why some surgery is done awake.
`,
foot: `= Football | World Cup, clubs, legends
Who won the 2018 World Cup? | Croatia | France | Belgium | Brazil | 4-2 against Croatia in the final.
Who won the 2022 World Cup? | France | Argentina | Morocco | Croatia | Argentina beat France on penalties.
Which player has won 8 Ballon d'Or awards? | Cristiano Ronaldo | Lionel Messi | Michel Platini | Zinédine Zidane | An all-time record.
~Which club is nicknamed "les Gones"? | AS Saint-Étienne | OGC Nice | Olympique Lyonnais | FC Nantes | "Gone" means "kid" in Lyon slang.
How many players per team are on the pitch at kick-off? | 9 | 10 | 11 | 12 | 10 outfield players and a goalkeeper.
How long is a match without extra time? | 80 minutes | 90 minutes | 100 minutes | 120 minutes | Two 45-minute halves, plus added time.
Which country won Euro 2016? | France | Germany | Portugal | Spain | 1-0 against France, in extra time.
Who was the first African Ballon d'Or winner? | Samuel Eto'o | Didier Drogba | George Weah | Sadio Mané | George Weah, in 1995.
~"Le Classique" is a match between which clubs? | OL and ASSE | PSG and OM | OM and OL | PSG and OL | The big match between Paris and Marseille.
Which countries hosted the 2026 World Cup? | Qatar | Spain, Portugal, Morocco | USA, Canada, Mexico | Brazil | The first World Cup with 48 teams.
Which country has won the most World Cups? | Brazil | Germany | Italy | Argentina | 5 titles: 1958, 1962, 1970, 1994 and 2002.
In what year did France win its first World Cup? | 1998 | 1984 | 2006 | 2018 | 3-0 against Brazil, at the Stade de France.
Who scored two headers in the 1998 World Cup final? | Zinédine Zidane | Thierry Henry | Emmanuel Petit | Lilian Thuram | Emmanuel Petit scored the third.
~The Stade Vélodrome is the home of which club? | Olympique de Marseille | Paris Saint-Germain | OGC Nice | Girondins de Bordeaux | PSG play at the Parc des Princes.
How many points is a league win worth? | 3 | 2 | 1 | 4 | A draw is worth 1 point.
Which player is nicknamed "CR7"? | Cristiano Ronaldo | Ronaldinho | Ronaldo Nazário | Cristian Romero | CR for Cristiano Ronaldo, and his shirt number 7.
Which competition brings together Europe's best clubs? | The Champions League | The French Cup | Ligue 1 | The World Cup | With its famous anthem.
Which club has won the most Champions League titles? | Real Madrid | FC Barcelona | AC Milan | Bayern Munich | More than 15 titles.
How long is extra time? | 2 × 15 minutes | 2 × 10 minutes | 2 × 20 minutes | 1 × 30 minutes | Then penalties if it's still a draw.
What does a red card mean? | The player is sent off | A simple warning | A penalty | The end of the match | Two yellow cards also make a red.
In which country is the Premier League played? | England | Spain | Italy | Germany | La Liga is Spanish, Serie A Italian.
Which country was Pelé from? | Brazil | Argentina | Portugal | Uruguay | The only player to win 3 World Cups.
Against which country did Maradona score the "Hand of God" goal in 1986? | England | Germany | France | Brazil | In the World Cup quarter-final.
At which club did Kylian Mbappé start his professional career? | AS Monaco | PSG | Real Madrid | Stade Rennais | French champion with Monaco in 2017.
~How many teams have been in Ligue 1 since 2023? | 18 | 20 | 16 | 22 | It used to have 20.
Which country hosted the 2022 World Cup? | Qatar | Russia | Brazil | Saudi Arabia | The first one played in winter.
How often is the World Cup held? | Every 4 years | Every 2 years | Every year | Every 5 years | Like the Euros.
Where is the goalkeeper allowed to handle the ball? | In their own penalty area | Anywhere on the pitch | In their own half | Nowhere | Except from a deliberate back-pass kicked by a teammate.
Which magazine created the Ballon d'Or? | France Football | L'Équipe | So Foot | Onze Mondial | In 1956.
Which national team is nicknamed the Squadra Azzurra? | Italy | Spain | Argentina | Portugal | "The blue team".
Which was the first African country to reach a World Cup semi-final? | Morocco | Senegal | Cameroon | Ghana | In 2022, in Qatar.
How far from the goal is a penalty taken? | 11 metres | 9 metres | 16 metres | 20 metres | The penalty spot is 11 m from the goal line.
Who captained France's 1998 world champions? | Didier Deschamps | Zinédine Zidane | Marcel Desailly | Laurent Blanc | He also won the 2018 World Cup as coach.
Who won the 2018 Ballon d'Or? | Luka Modrić | Kylian Mbappé | Cristiano Ronaldo | Antoine Griezmann | He ended 10 years of Messi-Ronaldo dominance.
With which club did Zidane win three Champions Leagues in a row as coach? | Real Madrid | Juventus | Bayern Munich | PSG | In 2016, 2017 and 2018.
Which country won Euro 2024? | Spain | England | France | Germany | 2-1 against England in the final.
Which country won Euro 2020, played in 2021? | Italy | England | Portugal | France | On penalties against England, at Wembley.
How many substitutions can a team make in an official match today? | 5 | 3 | 4 | 7 | The rule went from 3 to 5 after 2020.
~Which French club is nicknamed "les Verts" (the Greens)? | AS Saint-Étienne | FC Nantes | RC Lens | AJ Auxerre | The French club with 10 league titles.
Who organises the Club World Cup and the big global tournaments? | FIFA | UEFA | LFP | IOC | UEFA runs Europe, the IOC the Olympics.
`,
jeux: `= Video games | From consoles to legends
What is the name of Nintendo's moustached plumber? | Luigi | Mario | Wario | Toad | Luigi is his brother.
In which game do you build a world out of blocks? | Fortnite | Minecraft | Roblox | Tetris | The best-selling game in history.
What is the name of the hero of "The Legend of Zelda"? | Zelda | Link | Ganon | Epona | Zelda is the princess.
Which company created Fortnite? | Activision | Ubisoft | Epic Games | Riot Games | Epic Games, released in 2017.
EA Sports FC took over from which series? | PES | FIFA | Football Manager | Rocket League | The name changed in 2023.
Which yellow Pokémon is the series' mascot? | Eevee | Pikachu | Charmander | Jigglypuff | An Electric-type Pokémon.
Which company makes the PlayStation? | Microsoft | Nintendo | Sony | Sega | The first one came out in 1994.
In which game is the city of Los Santos? | Watch Dogs | GTA V | Call of Duty | Far Cry | Inspired by Los Angeles.
Sonic is… | A fox | A hedgehog | A hare | A cat | A very fast blue hedgehog.
In which country was Tetris invented? | Japan | United States | Soviet Union | South Korea | By Alexey Pajitnov, in 1984.
What is the name of Mario's brother? | Luigi | Wario | Toad | Yoshi | Dressed in green.
Which hybrid Nintendo console came out in 2017? | The Switch | The Wii U | The 3DS | The GameCube | You can play it on the TV or handheld.
Which green monster explodes in Minecraft? | The Creeper | The Enderman | The Zombie | The Ghast | With its famous "tsss…".
Which company makes the Xbox? | Microsoft | Sony | Nintendo | Sega | The first Xbox came out in 2001.
What is the Fortnite mode where 100 players fight to the last one called? | Battle royale | Deathmatch | Capture the flag | Story mode | The last survivor wins.
Which Riot Games title pits two teams of 5 champions against each other? | League of Legends | Dota 2 | Overwatch | Valorant | Valorant is also by Riot, but it's a shooter.
In which game do you play the adventurer Lara Croft? | Tomb Raider | Uncharted | Far Cry | Resident Evil | Released in 1996.
What is the name of the princess Mario often has to rescue? | Peach | Zelda | Daisy | Rosalina | Zelda is the princess of another series.
Who is Mario's great enemy? | Bowser | Ganon | Wario | Donkey Kong | The king of the Koopas.
How many squares are on a chessboard? | 64 | 32 | 81 | 100 | 8 rows × 8 columns.
In chess, which piece moves in an L shape? | The knight | The bishop | The rook | The queen | It's the only piece that can jump over others.
~In French Monopoly, which is the most expensive street? | Rue de la Paix | Champs-Élysées | Avenue Foch | Boulevard de Belleville | Boulevard de Belleville is the cheapest.
What is Konami's football game PES called today? | eFootball | EA Sports FC | Football Manager | FIFA Street | The name changed in 2021.
Which country is the publisher Ubisoft from? | France | Canada | Japan | United States | Founded in Brittany in 1986.
Which Ubisoft series features assassins throughout history? | Assassin's Creed | Far Cry | Watch Dogs | Splinter Cell | The first game came out in 2007.
In which Supercell game do you build a village and join a clan? | Clash of Clans | Brawl Stars | Hay Day | Boom Beach | Released on mobile in 2012.
In Among Us, what do you have to find out? | Who the impostor is | The hidden treasure | The way out of the maze | The secret code | The impostors sabotage the ship.
In which Nintendo racing game do you throw shells? | Mario Kart | Need for Speed | Gran Turismo | Forza | The blue shell targets first place.
What colour is Pac-Man? | Yellow | Red | Blue | Green | The ghosts are red, pink, blue and orange.
Which Pokémon is number 1 in the Pokédex? | Bulbasaur | Pikachu | Charmander | Squirtle | Pikachu is number 25.
In which card game must you shout its name when you have one card left? | UNO | Mille Bornes | War | Solitaire | Otherwise, you draw two penalty cards.
In Rocket League, what do the cars play? | Football | Basketball | Golf | Tennis | With a giant ball.
Which company made the Game Boy? | Nintendo | Sony | Sega | Atari | Released in 1989.
In which game do you play Kratos, a Spartan warrior? | God of War | Assassin's Creed | Diablo | Dark Souls | A PlayStation series.
In Candy Crush, what do you have to line up? | Sweets | Fruit | Gems | Bubbles | At least three sweets of the same colour.
In which game do you catch Pokémon in real streets with your phone? | Pokémon GO | Pokémon Red | Pokémon Stadium | Pokémon Snap | Released in 2016, in augmented reality.
Which little green dinosaur does Mario ride? | Yoshi | Rex | Dino | Spike | He swallows enemies with his tongue.
Which game has 5v5 matches with "agents" who have special powers? | Valorant | Fortnite | Minecraft | Rocket League | A Riot Games shooter released in 2020.
In international draughts on a 100-square board, how many pieces does each player have? | 20 | 12 | 16 | 24 | International draughts is played on a 10 × 10 board.
Which Sony console came out in 2020? | The PlayStation 5 | The PlayStation 4 | The PS Vita | The PlayStation 3 | Released in November 2020.
`,
cine: `= Movies & TV | Cult films and series
Who directed Titanic and Avatar? | Steven Spielberg | James Cameron | Christopher Nolan | Ridley Scott | Two of the highest-grossing films ever.
In which series do we follow chemistry teacher Walter White? | Narcos | Breaking Bad | Dexter | Ozark | Aired from 2008 to 2013.
In which city is the series Friends set? | Los Angeles | Chicago | New York | Boston | Their café is called Central Perk.
~Who plays Driss in the French film "The Intouchables"? | Jamel Debbouze | Omar Sy | Kev Adams | Ahmed Sylla | He won the César for best actor.
Which Netflix series follows Assane Diop, gentleman thief? | Lupin | Money Heist | Validé | Marseille | Inspired by Arsène Lupin.
Which actor plays Jack Sparrow? | Orlando Bloom | Johnny Depp | Brad Pitt | Tom Cruise | In Pirates of the Caribbean.
In which animated film do we meet Woody and Buzz Lightyear? | Cars | Toy Story | Shrek | Finding Nemo | The first fully computer-animated feature film.
"May the Force be with you" comes from which saga? | Star Trek | Star Wars | The Matrix | Avengers | Created by George Lucas.
Which 2021 Korean series features deadly games? | Alice in Borderland | Squid Game | Kingdom | Sweet Home | A worldwide record on Netflix.
~What are the French film awards called? | The Oscars | The Césars | The Molières | The Victoires | The Molières are for theatre.
Who directed "Jurassic Park"? | Steven Spielberg | James Cameron | George Lucas | Peter Jackson | Released in 1993.
In which saga do we hear "No, I am your father"? | Star Wars | Star Trek | The Lord of the Rings | The Matrix | In "The Empire Strikes Back", 1980.
What is Shrek? | An ogre | A troll | A giant | A dragon | A green ogre who lives in a swamp.
In which saga do we find the wizard Gandalf? | The Lord of the Rings | Harry Potter | Narnia | Game of Thrones | Based on J.R.R. Tolkien's books.
Which actor played Iron Man in the Marvel films? | Robert Downey Jr. | Chris Evans | Chris Hemsworth | Mark Ruffalo | Chris Evans played Captain America.
In "Ratatouille", what does Remy the rat dream of? | Becoming a chef | Becoming a singer | Travelling to New York | Becoming a painter | In a great Paris restaurant.
~Which Dany Boon film is set in the north of France? | Welcome to the Sticks | The Intouchables | Les Bronzés | The Dinner Game | Over 20 million tickets sold in France in 2008.
Who is Asterix's best friend? | Obelix | Dogmatix | Getafix | Vitalstatistix | He fell into the magic potion as a baby.
~In which city is the film "Taxi" set? | Marseille | Paris | Nice | Lyon | Produced by Luc Besson.
Which actor plays Dom Toretto in "Fast & Furious"? | Vin Diesel | Dwayne Johnson | Jason Statham | Paul Walker | Paul Walker played Brian O'Conner.
Who plays the Joker in the 2019 film "Joker"? | Joaquin Phoenix | Heath Ledger | Jared Leto | Jack Nicholson | Oscar for best actor.
Which series is set on the continent of Westeros? | Game of Thrones | The Witcher | Vikings | The Crown | Based on George R. R. Martin's books.
In which fictional town is "Stranger Things" set? | Hawkins | Springfield | Riverdale | Gotham | In Indiana, in the 1980s.
Which country is the series "Money Heist" (La Casa de papel) from? | Spain | Mexico | Italy | Argentina | The robbers are named after cities.
Who created Mickey Mouse? | Walt Disney | Hayao Miyazaki | Tex Avery | Hergé | With Ub Iwerks, in 1928.
Which Pixar film takes place inside a girl's head, with Joy and Sadness? | Inside Out | Soul | Coco | Toy Story | Called "Vice-versa" in French.
Which country is "Parasite", Best Picture at the 2020 Oscars, from? | South Korea | Japan | China | Thailand | The first non-English-language film to win that Oscar.
In which city is the Palme d'Or awarded? | Cannes | Venice | Berlin | Deauville | At the Cannes festival, every May.
Who plays Jack in "Titanic"? | Leonardo DiCaprio | Brad Pitt | Matt Damon | Tom Hanks | Opposite Kate Winslet.
What is Tintin's dog called? | Snowy | Dogmatix | Pluto | Rin Tin Tin | Dogmatix is Obelix's dog.
What is the name of Harry Potter's school? | Hogwarts | Beauxbatons | Durmstrang | Ilvermorny | "Poudlard" in French.
What is the name of Harry Potter's great villain? | Voldemort | Sauron | Darth Vader | Grindelwald | "He-Who-Must-Not-Be-Named".
Who is the Minions' master in "Despicable Me"? | Gru | The Joker | Vector | Megamind | The Minions speak their own language.
On which world is "Avatar" set? | Pandora | Tatooine | Arrakis | Krypton | More precisely a moon, Pandora.
What is Black Panther's fictional country? | Wakanda | Zamunda | Latveria | Sokovia | A very advanced African kingdom.
In which Paris neighbourhood is "Amélie" set? | Montmartre | Le Marais | Saint-Germain | La Défense | Starring Audrey Tautou.
In which town do the Simpsons live? | Springfield | Shelbyville | South Park | Quahog | Quahog is the Griffins' town.
Which Japanese studio made "Spirited Away"? | Studio Ghibli | Toei Animation | Pixar | DreamWorks | Directed by Hayao Miyazaki.
What is the name of the lion who is Simba's father? | Mufasa | Scar | Nala | Rafiki | Scar is his brother.
~Which 2011 film stars Omar Sy and François Cluzet? | The Intouchables | Sink or Swim | The Visitors | Serial (Bad) Weddings | The story of an unlikely friendship.
`,
emoji: `= Guess the movie | The film hidden in the emojis
🦁👑🌅 | The Jungle Book | The Lion King | Madagascar | Tarzan | Simba, Mufasa and Scar.
🚢🧊💔 | Titanic | Pirates of the Caribbean | Life of Pi | Moana | Jack and Rose.
🧙‍♂️⚡👓 | The Lord of the Rings | Harry Potter | Merlin | Doctor Strange | The wizard with the lightning scar.
🦖🏝️🚙 | King Kong | Jurassic Park | Godzilla | Ice Age | Directed by Steven Spielberg.
🐠🔍🌊 | Finding Nemo | The Little Mermaid | Jaws | Moana | A clownfish dad looks for his son.
❄️👸⛄ | Tangled | Frozen | Cinderella | Brave | Elsa, Anna and Olaf.
🤖❤️🌱 | Terminator | WALL-E | Big Hero 6 | Robots | A little robot cleans up an abandoned Earth.
🦇🌃🃏 | Batman | Spider-Man | Iron Man | Venom | Facing the Joker.
🕷️🧑🏙️ | Ant-Man | Spider-Man | Black Widow | Daredevil | Peter Parker, the spider-man.
👻🚫📞 | Ghostbusters | Casper | Beetlejuice | Scream | "Who you gonna call?"
🐭👨‍🍳🍲 | Ratatouille | Mickey | The Chef | Lady and the Tramp | A rat who cooks in Paris.
🐼🥋 | Kung Fu Panda | Brave | Mulan | The Lion King | Po, the warrior panda.
👽📞🏠 | E.T. the Extra-Terrestrial | Men in Black | Lilo & Stitch | Close Encounters of the Third Kind | "E.T. phone home."
🦈🏊😱 | Jaws | Finding Nemo | Titanic | Waterworld | The film that scared a generation away from the sea.
🍫🏭🎩 | Charlie and the Chocolate Factory | Hansel and Gretel | Ratatouille | Chocolat | Featuring Willy Wonka.
🧞🪔🐒 | Aladdin | The Jungle Book | Sinbad | Hercules | The genie of the lamp and Abu the monkey.
🐉🛡️👦 | How to Train Your Dragon | Shrek | Peter Pan | Raya | Hiccup and his dragon Toothless.
🧜‍♀️🐠🦀 | The Little Mermaid | Moana | Finding Nemo | Ponyo | Ariel, Flounder and Sebastian.
🏎️⚡🏁 | Cars | Fast & Furious | Speed Racer | Turbo | Lightning McQueen.
🎈🏠👴 | Up | Toy Story | Coco | The Good Dinosaur | A house flies away with balloons.
🦍🏙️✈️ | King Kong | Godzilla | Planet of the Apes | Rampage | A giant gorilla on top of a skyscraper.
👸🍎🧙‍♀️ | Snow White | Sleeping Beauty | Tangled | Cinderella | The poisoned apple.
💍🌋🧝 | The Lord of the Rings | Harry Potter | Narnia | The Hobbit | The ring must be destroyed in Mount Doom.
🕶️💊🐇 | The Matrix | Alice in Wonderland | Inception | Men in Black | Red pill or blue pill?
🏴‍☠️🦜⚓ | Pirates of the Caribbean | Peter Pan | Hook | Treasure Island | Jack Sparrow.
🤡🎈🚲 | It | Joker | The Circus | Dumbo | Pennywise the clown.
🔨⚡👑 | Thor | Iron Man | Hulk | Black Panther | The Norse god of thunder.
🛡️⭐🇺🇸 | Captain America | Superman | Wonder Woman | Iron Man | The star-spangled shield.
🧑‍🚀🥔🔴 | The Martian | Interstellar | Gravity | Apollo 13 | He grows potatoes on Mars.
🐻🐯👦🌴 | The Jungle Book | Tarzan | The Lion King | Life of Pi | Mowgli, Baloo and Shere Khan.
👗👠🕛 | Cinderella | Snow White | Beauty and the Beast | Tangled | She must be home before midnight.
🥊🏃🪜 | Rocky | The Karate Kid | Million Dollar Baby | Raging Bull | He runs up the Philadelphia steps.
🧊🦣🐿️ | Ice Age | Frozen | Dinosaur | The Good Dinosaur | Manny the mammoth and Scrat the squirrel.
🦁🦓🦒🗽 | Madagascar | The Lion King | Zootopia | Jumanji | Animals from the New York zoo.
🤖🚗🔫 | Transformers | Terminator | RoboCop | Cars | Robots that turn into cars.
🏠🎄👦🪤 | Home Alone | The Grinch | Santa Claus Is a Stinker | The Polar Express | Kevin sets traps for the burglars.
💚👹🏰 | Shrek | Hulk | The Grinch | Monsters, Inc. | A green ogre rescues a princess.
🐟🔵🤔 | Finding Dory | Moana | Shark Tale | The Little Mermaid | The blue fish who forgets everything.
🧸🍯🐝 | Winnie the Pooh | Paddington | Ted | Bambi | The bear who loves honey.
🎃💀🎄 | The Nightmare Before Christmas | Coco | Corpse Bride | Halloween | Jack Skellington discovers Christmas.
`,
musique: `= Music | Rap, pop and legends
~Which city is the French rapper Jul from? | Paris | Lyon | Marseille | Toulouse | One of France's best-selling artists.
~The French rap duo PNL is made up of… | Two cousins | Two brothers | Two childhood friends | A father and son | Ademo and N.O.S.
What nationality is Stromae? | French | Swiss | Belgian | Canadian | He's from Brussels.
Which instrument did Chopin play? | The violin | The piano | The guitar | The flute | A Polish composer who settled in Paris.
Daft Punk was a… duo | English | American | French | German | Known for their robot helmets.
What is Michael Jackson's nickname? | The King of Rock | The King of Pop | The Prince of Funk | The Emperor of Disco | His album Thriller is one of the best-selling ever.
With which song did Aya Nakamura break through in 2018? | Pookie | Djadja | Copines | Jolie nana | A hit heard all over the world.
How many strings does a classical guitar have? | 4 | 5 | 6 | 12 | A bass usually has 4.
~With which group did French rapper Nekfeu first break through? | 1995 | Sexion d'Assaut | IAM | NTM | With Alpha Wann and Areno Jaz.
Which music style is linked to Bob Marley? | Jazz | Reggae | Blues | Soul | From Jamaica.
Who sings "Formidable"? | Stromae | Gims | Angèle | Christophe Maé | Released in 2013.
Which band sings "Bohemian Rhapsody"? | Queen | The Beatles | Pink Floyd | Led Zeppelin | With Freddie Mercury.
Which city were the Beatles from? | Liverpool | London | Manchester | Dublin | In England.
How many notes are in the scale, from C to B? | 7 | 8 | 5 | 12 | C, D, E, F, G, A, B.
Which Édith Piaf song is known all over the world? | La Vie en rose | Ne me quitte pas | La Bohème | Les Champs-Élysées | "Ne me quitte pas" is by Jacques Brel.
~Which French singer was nicknamed "the idol of the young"? | Johnny Hallyday | Eddy Mitchell | Claude François | Michel Sardou | He sang for more than 50 years.
Which instrument usually has 88 keys? | The piano | The organ | The accordion | The synthesizer | 52 white and 36 black.
~Which group was Gims part of? | Sexion d'Assaut | 1995 | IAM | Psy 4 de la rime | With Lefa, Black M and others.
Which country is Angèle from? | Belgium | France | Switzerland | Canada | Like Stromae, she's from Belgium.
Which singer is called "the King"? | Elvis Presley | Michael Jackson | Frank Sinatra | Chuck Berry | The King of rock 'n' roll.
Which group was Beyoncé in before going solo? | Destiny's Child | Spice Girls | TLC | The Pussycat Dolls | An American group of the 2000s.
Which island is Rihanna from? | Barbados | Jamaica | Cuba | Haiti | In the Caribbean.
Which singer did the huge "Eras Tour"? | Taylor Swift | Beyoncé | Adele | Dua Lipa | One of the highest-grossing tours in history.
Which great composer went deaf? | Ludwig van Beethoven | Mozart | Chopin | Bach | He kept composing anyway.
Who composed "The Four Seasons"? | Antonio Vivaldi | Mozart | Beethoven | Bach | An Italian composer.
~Which festival takes place on June 21 in France? | The Fête de la musique | National Day | Rock Midsummer | Cinema Day | Created in 1982.
With which singer did Daft Punk make "Get Lucky"? | Pharrell Williams | Bruno Mars | The Weeknd | Justin Timberlake | With Nile Rodgers on guitar.
David Guetta is… | A French DJ | A Belgian rapper | A Canadian singer | A Swiss pianist | Famous all over the world.
Which instrument did Louis Armstrong play? | The trumpet | The saxophone | The piano | The drums | A jazz legend.
How many musicians are in a quartet? | 4 | 3 | 5 | 8 | A trio has 3, a quintet 5.
Which country is Céline Dion from? | Canada | France | Belgium | Switzerland | From Quebec.
Who sings "Hello" and "Rolling in the Deep"? | Adele | Rihanna | Lady Gaga | Amy Winehouse | A British singer.
Which American city is Eminem from? | Detroit | New York | Los Angeles | Chicago | As told in the film "8 Mile".
Which country is the band BTS from? | South Korea | Japan | China | Philippines | The best-known K-pop group.
Which country is Ed Sheeran from? | The United Kingdom | Ireland | Australia | The United States | Known for "Shape of You".
~Who sings "Dernière danse"? | Indila | Aya Nakamura | Zaz | Louane | A 2013 hit.
Which country is Shakira from? | Colombia | Mexico | Spain | Argentina | Born in Barranquilla.
~Which city is the French rapper Orelsan from? | Caen | Rouen | Lille | Rennes | He talks about it in several songs.
What does a drummer play? | The drums | The bass | The keyboard | The violin | With bass drum, snare and cymbals.
~Which French rapper is known for "92i"? | Booba | Kaaris | Rohff | Niska | Named after his département, Hauts-de-Seine.
`,
lyon: `= Lyon & France | Traboules, bouchons and regions
Which two rivers meet in Lyon? | The Seine and the Marne | The Rhône and the Saône | The Loire and the Allier | The Rhône and the Isère | They meet in the Confluence district.
When is the Festival of Lights in Lyon? | In July | In October | In December | In March | Around December 8.
What is the basilica on Lyon's hill called? | Sacré-Cœur | Fourvière | Notre-Dame de la Garde | Saint-Jean | Notre-Dame de Fourvière.
What is a "traboule"? | A Lyon dish | A passage through buildings | A puppet | A bridge | Found in Old Lyon and Croix-Rousse.
Who invented the cinematograph in Lyon? | The Lumière brothers | The Pathé brothers | Gustave Eiffel | Louis Pasteur | The Lumière brothers, in 1895.
What is a traditional Lyon restaurant called? | A brasserie | A bouchon | A guinguette | An estaminet | Serving quenelles and sausage in brioche.
What is the number of the Rhône département? | 13 | 38 | 69 | 42 | The 69.
How many regions does mainland France have? | 11 | 13 | 18 | 22 | Since the 2016 reform.
What is the highest mountain in France? | Mont Ventoux | Mont Blanc | Puy de Dôme | Vignemale | In the Alps.
What is the motto of France? | Liberty, Equality, Fraternity | Work, Family, Homeland | Unity, Strength, Progress | Peace and Justice | It's written on town halls and schools.
Which Lyon hill is called "the hill that works"? | Croix-Rousse | Fourvière | Montchat | La Duchère | Fourvière is "the hill that prays".
The "canuts" were workers in which trade? | Silk | Coal | Wine | Steel | They worked on looms in Croix-Rousse.
What is the famous Lyon puppet called? | Guignol | Pinocchio | Punch | Harlequin | Created by Laurent Mourguet around 1808.
Which big Lyon park has a free zoo? | Parc de la Tête d'Or | Parc de Gerland | Parc de Parilly | Parc des Hauteurs | One of the largest city parks in France.
On which square is the statue of Louis XIV? | Place Bellecour | Place des Terreaux | Place Carnot | Place Jean-Macé | One of the largest squares in Europe.
In which town is Olympique Lyonnais' stadium? | Décines-Charpieu | Villeurbanne | Vénissieux | Gerland | Opened in 2016.
What is the business district with the tower nicknamed "the Pencil"? | Part-Dieu | Confluence | Gerland | Vaise | The main high-speed train station is there too.
Which Lyon chef was nicknamed the "pope of gastronomy"? | Paul Bocuse | Alain Ducasse | Joël Robuchon | Cyril Lignac | His restaurant is in Collonges-au-Mont-d'Or.
Since what year has Lyon's historic site been a UNESCO World Heritage site? | 1998 | 1975 | 2008 | 2015 | Old Lyon, Fourvière, the Presqu'île and the slopes of Croix-Rousse.
What was Lyon called in Roman times? | Lugdunum | Lutetia | Massilia | Burdigala | Lutetia is Paris; Massilia, Marseille.
Which ancient monuments are found on Fourvière hill? | Roman theatres | A castle | A pyramid | Greek arenas | They still host concerts in summer.
Which writer born in Lyon gave his name to the airport? | Antoine de Saint-Exupéry | Victor Hugo | Jules Verne | Frédéric Dard | The author of "The Little Prince".
Which pink tart is a Lyon speciality? | Praline tart | Tarte Tatin | Lemon tart | Bourdaloue tart | Made with crushed pink pralines.
How many metro lines does Lyon have? | 4 | 2 | 6 | 8 | Lines A, B, C and D.
Where does Lyon rank among France's largest cities? | 3rd | 2nd | 4th | 5th | After Paris and Marseille.
Which region is Lyon in? | Auvergne-Rhône-Alpes | Bourgogne-Franche-Comté | Provence-Alpes-Côte d'Azur | Occitanie | Lyon is its regional capital.
What do Lyon residents put on their windowsills on December 8? | Lumignons (candles) | Flags | Christmas lights | Chinese lanterns | Small candles in glasses.
Which river runs at the foot of Fourvière hill? | The Saône | The Rhône | The Isère | The Ain | The Rhône runs on the other side of the Presqu'île.
Which city is nicknamed the Pink City? | Toulouse | Lyon | Marseille | Bordeaux | Because of the colour of its bricks.
Which city is nicknamed the Phocaean City? | Marseille | Nice | Toulon | Montpellier | Founded by Greeks from Phocaea.
What is the name of the woman who symbolises the French Republic? | Marianne | Jeanne | Liberty | Gauloise | Her bust is in every town hall.
What is the French national anthem? | La Marseillaise | Le Chant des partisans | L'Internationale | La Carmagnole | Written in 1792 by Rouget de Lisle.
In which city does the European Parliament sit? | Strasbourg | Brussels | Luxembourg | Geneva | Some sessions are also held in Brussels.
Which region is Mont-Saint-Michel in? | Normandy | Brittany | Pays de la Loire | Hauts-de-France | Right on the border with Brittany.
What is the largest city in Brittany? | Rennes | Brest | Nantes | Quimper | Nantes is in the Pays de la Loire.
Roughly how many people live in France? | 68 million | 45 million | 85 million | 100 million | Overseas territories included.
What are kids called in Lyon slang? | Les gones | Les minots | Les marmots | Les gosses | "Minot" is the Marseille word.
Which footbridge links the Presqu'île to Old Lyon near the courthouse? | The Palais de Justice footbridge | The Lafayette bridge | The Pasteur bridge | The Université bridge | It crosses the Saône.
Which Lyon cured meat is baked in dough? | Sausage in brioche | Parsley ham | Rosette | Black pudding | Often served in warm slices.
Which river reaches Lyon coming from Switzerland? | The Rhône | The Saône | The Loire | The Doubs | It flows out of Lake Geneva.
`,
code: `= French driving test | The exam's trick questions
In France, what is the motorway speed limit in dry weather, with more than 3 years of licence? | 110 km/h | 120 km/h | 130 km/h | 150 km/h | It drops to 110 km/h in the rain.
And on the motorway in the rain? | 90 km/h | 100 km/h | 110 km/h | 130 km/h | And 50 km/h everywhere if visibility is under 50 m.
What is the speed limit in built-up areas, unless signed otherwise? | 30 km/h | 50 km/h | 70 km/h | 80 km/h | Many cities have moved to 30 km/h on some streets.
On the motorway, a new driver is limited to: | 100 km/h | 110 km/h | 120 km/h | 130 km/h | During the probationary period.
Maximum blood alcohol level during the probationary licence? | 0.2 g per litre of blood | 0.5 g per litre of blood | 0.8 g per litre of blood | No limit | In practice, zero drinks.
A triangular sign pointing down means: | Danger | Stop | Give way | No entry | Slow down and let others pass.
Steady amber light: what should you do? | Speed up to get through | Stop, unless it's dangerous | Honk | Go if nobody is coming | Amber means stop, unless you can't safely.
What is the minimum safety gap with the vehicle in front? | 1 second | 2 seconds | 5 seconds | 10 metres | At least 2 seconds, more in bad weather.
At a junction with no sign or light, who has priority? | The one coming from the left | The one coming from the right | The fastest | The biggest vehicle | That's "priority to the right".
At a stop sign, you must: | Slow right down | Come to a full stop at the line | Stop only if a car is coming | Honk | A full stop is required, even on an empty road.
What does a round red sign with a white bar mean? | No entry | No parking | End of restriction | Road closed for works | You can't enter this street.
What shape is the Stop sign? | Octagonal | Round | Triangular | Square | 8 sides, so it can be recognised even from behind.
Is the seat belt compulsory in the back? | Yes, always | No, never | Only on the motorway | Only at night | Compulsory in the back since 1990.
Speed limit on a two-way road without a central divider, outside built-up areas? | 80 km/h | 70 km/h | 90 km/h | 100 km/h | Unless a sign allows 90 km/h.
Speed limit on a dual carriageway outside built-up areas? | 110 km/h | 90 km/h | 100 km/h | 130 km/h | 100 km/h in the rain.
How many points does a probationary licence start with? | 6 | 12 | 8 | 3 | It goes up to 12 after the probationary period without offences.
What is the maximum number of points on a driving licence? | 12 | 10 | 15 | 20 | The maximum is 12 points.
How long is the probationary period without accompanied driving? | 3 years | 1 year | 2 years | 5 years | 2 years after accompanied driving.
Maximum blood alcohol level for a full licence? | 0.5 g per litre of blood | 0.2 g per litre of blood | 0.8 g per litre of blood | 1 g per litre of blood | That's 0.25 mg per litre of exhaled air.
What's the penalty for holding your phone while driving? | €135 and 3 points | Just €35 | A simple warning | 1 point | Even when stopped in a traffic jam.
How many points do you lose for running a red light? | 4 | 1 | 2 | 6 | Plus a €135 fine.
Which equipment is compulsory in the car? | A hi-vis vest and a warning triangle | A fire extinguisher | A first-aid kit | A spare wheel | The vest must be reachable from the seat.
In French, "les codes" are… | Dipped headlights | Full beam | Side lights | Fog lights | Full beam is "pleins phares".
Can you cross a solid white line? | No | Yes, to overtake | Yes, at night | Yes, if the road is empty | Don't cross it or straddle it.
What does a yellow diamond sign mean? | Priority road | Danger | End of road | Roundabout | You have priority at junctions.
Who has priority at a roundabout with "Give way" at the entry? | Those already on the roundabout | Those entering | Those coming from the right | Lorries | This is the case for most roundabouts.
When can you use the hard shoulder? | Only in an emergency | To overtake | In traffic jams | To make a phone call | Breakdown, illness or accident.
At what age can you take the car licence in France since 2024? | 17 | 16 | 18 | 15 | You can drive alone from 17.
From what age can you start accompanied driving in France? | 15 | 14 | 16 | 17 | With a supervisor who has held a licence for at least 5 years.
What does a triangular sign with a red border mean? | A danger | An obligation | A ban | Information | It warns of a danger: bend, roadworks, animals…
What is the speed limit in a shared zone ("zone de rencontre")? | 20 km/h | 10 km/h | 30 km/h | 50 km/h | Pedestrians have priority there.
A pedestrian is waiting at a zebra crossing. What do you do? | Stop to let them cross | Honk | Go quickly before them | Flash your lights | Not giving way costs 6 points.
What does a flashing amber light mean? | Proceed with caution | Mandatory stop | Speed up | The junction is closed | Normal priority rules apply.
Can you honk in town? | Only in case of immediate danger | Always | To say hello | Only at night | Otherwise it's an offence.
When should you use rear fog lights? | In fog or snow | In light rain | At night | In tunnels | Otherwise they dazzle other drivers.
After how long does a new car have its first roadworthiness test (contrôle technique)? | 4 years | 2 years | 5 years | 10 years | Then every 2 years.
When must you use your indicator? | Before every change of direction | Only on the motorway | Only if there are cars around | After turning | Even on an empty road.
A bus is leaving its stop in town with its indicator on. What do you do? | Let it pull out | Overtake it quickly | Honk | Speed up | It has priority in this case.
What is the minimum distance when overtaking a bicycle in town? | 1 metre | 50 cm | 2 metres | 3 metres | 1.5 m outside built-up areas.
From what age can a child normally sit in the front? | 10 | 5 | 8 | 14 | With exceptions, using a suitable seat and the airbag switched off.
`,
cuisine: `= World food | Dishes and specialities
Which country does pizza come from? | Spain | Italy | Greece | United States | From Naples, to be precise.
What is the main ingredient of guacamole? | Tomato | Avocado | Cucumber | Pepper | A recipe from Mexico.
Which Lyon speciality is eaten with Nantua sauce? | Quenelle | Cervelle de canut | Tablier de sapeur | Praline | Often served baked.
Where does couscous come from? | The Middle East | The Maghreb | Italy | India | On UNESCO's heritage list.
Which cheese goes into tartiflette? | Comté | Reblochon | Camembert | Brie | A speciality from Savoie.
Which country does sushi come from? | China | Korea | Japan | Thailand | Made with vinegared rice.
What is a tagine? | A spice | A dish slow-cooked in a clay pot | A dessert | A drink | The word means both the dish and the pot.
Which country does paella come from? | Portugal | Mexico | Spain | Italy | From the Valencia region.
Chocolate is made from which bean? | Coffee | Cocoa | Vanilla | Soy | Grown mainly in West Africa.
The hamburger is named after which city? | New York | Hamburg | Hamilton | London | A city in Germany.
Which French region does ratatouille come from? | Provence | Alsace | Brittany | Normandy | From Nice, to be precise.
Which French region does camembert come from? | Normandy | Savoie | Auvergne | Jura | A cow's milk cheese.
Which city does bouillabaisse come from? | Marseille | Nice | Bordeaux | Brest | A fish soup.
Which French region does choucroute (sauerkraut dish) come from? | Alsace | Brittany | Provence | Corsica | Fermented cabbage and cured meats.
Which French region does cassoulet come from? | The South-West | Alsace | Brittany | Normandy | From Castelnaudary, Toulouse or Carcassonne.
What flour is used for the savoury Breton galette? | Buckwheat | Wheat | Corn | Rice | Also called "black wheat".
What milk is Roquefort made from? | Sheep's milk | Cow's milk | Goat's milk | Buffalo milk | Aged in caves in the Aveyron.
What is the main ingredient of hummus? | Chickpeas | Lentils | Kidney beans | Broad beans | With sesame paste.
Which ingredient is NOT in a real Italian carbonara? | Cream | Egg | Pecorino cheese | Pepper | The Roman recipe uses no cream.
Saffron comes from… | A flower | A root | A tree | A shellfish | The crocus's stigmas: the most expensive spice in the world.
What makes bread rise? | Yeast | Salt | Sugar | Oil | Or sourdough.
When was the French baguette added to UNESCO's list? | In 2022 | In 1995 | In 2010 | In 2018 | The craft and culture of the baguette.
Which country does doner kebab come from? | Turkey | Greece | Lebanon | Germany | It became very popular in Germany.
Which country do nems (fried spring rolls) come from? | Vietnam | China | Japan | Thailand | Fried rolls.
Which drink is in tiramisu? | Coffee | Tea | Hot chocolate | Coconut milk | An Italian dessert with mascarpone.
Which country does pastilla come from? | Morocco | Turkey | Lebanon | Spain | A sweet and savoury pastry.
Mafé is a dish made with… | Peanut paste | Coconut milk | Crème fraîche | Cheese | A West African recipe.
Which country does thieboudienne come from? | Senegal | Cameroon | Mali | Côte d'Ivoire | Rice with fish, the national dish.
Which country does kimchi come from? | Korea | Japan | China | Vietnam | Fermented, spicy cabbage.
Which country does ramen come from? | Japan | Korea | China | Thailand | A noodle soup that became a cult dish.
Which country do traditional tacos come from? | Mexico | Spain | United States | Argentina | With a corn tortilla.
Which green, spicy paste comes with sushi? | Wasabi | Pesto | Ginger | Mustard | The ginger served with it is pink or beige.
Which vegetable is the base of gratin dauphinois? | Potato | Courgette | Cauliflower | Leek | A speciality from the Dauphiné, near Grenoble.
What is butter made from? | Milk cream | Oil | Cheese | Eggs | The cream is churned.
Which country is famous for maple syrup? | Canada | Switzerland | Norway | Ireland | Quebec produces most of it.
What is white chocolate made with? | Cocoa butter | Cocoa powder | Flour | Just vanilla | It contains no cocoa solids.
Which herb is the base of pesto? | Basil | Parsley | Mint | Coriander | With pine nuts, parmesan and olive oil.
What are the main ingredients of quiche lorraine? | Eggs, cream and bacon | Tomatoes and cheese | Salmon and spinach | Leeks and goat's cheese | No cheese in the original recipe.
Which Savoie dish is eaten by dipping bread in melted cheese? | Fondue | Raclette | Tartiflette | Croziflette | Raclette is eaten with potatoes.
Which Italian cheese traditionally tops pizza? | Mozzarella | Parmesan | Ricotta | Gorgonzola | For the Margherita pizza.
`,
tech: `= Tech & internet | Apps, networks and computers
Who founded Microsoft with Paul Allen? | Steve Jobs | Bill Gates | Elon Musk | Jeff Bezos | In 1975.
What does "www" stand for? | World Wide Web | Wide Web World | Web World Wireless | World Wireless Web | The worldwide web.
Which company makes the iPhone? | Samsung | Google | Apple | Huawei | The first one came out in 2007.
Who founded Facebook? | Mark Zuckerberg | Jack Dorsey | Larry Page | Evan Spiegel | In 2004, at Harvard University.
1 gigabyte is about… | 10 megabytes | 100 megabytes | 1,000 megabytes | 1 million megabytes | And 1,000 GB is about 1 terabyte.
What is Wi-Fi for? | Wireless charging | Connecting to the internet without a cable | Video calls | Protecting against viruses | It uses radio waves.
What was Twitter's logo before X? | A bird | A cat | An arrow | A fish | A blue bird.
What is the most used search engine in the world? | Bing | Yahoo | Google | Qwant | It handles billions of searches a day.
Which language is used to write the structure of a web page? | HTML | Excel | Photoshop | MP3 | With CSS for the style.
Which country is the company behind TikTok from? | United States | Japan | China | South Korea | ByteDance, a Chinese company.
Who founded Apple with Steve Wozniak? | Steve Jobs | Bill Gates | Tim Cook | Elon Musk | In 1976, in a garage.
Who founded Amazon? | Jeff Bezos | Elon Musk | Larry Page | Jack Ma | It started as an online bookshop.
Which company develops Android? | Google | Apple | Microsoft | Samsung | Samsung uses it on its phones.
What does "AI" stand for? | Artificial intelligence | Advanced internet | Automatic IT | Animated image | Programs that learn from data.
Which company created ChatGPT? | OpenAI | Google | Meta | Microsoft | Released at the end of 2022.
How many bits are in a byte? | 8 | 2 | 10 | 16 | A bit is 0 or 1.
What is "phishing"? | A fake message to steal information | A video game | A Wi-Fi network | An antivirus | A scam that "fishes" for your data.
What makes a good password? | Long and varied | Your date of birth | "123456" | The same everywhere | Ideally, a different password for every site.
Which group owns WhatsApp and Instagram? | Meta | Google | Apple | Microsoft | Facebook's group.
Which company owns YouTube? | Google | Meta | Amazon | Microsoft | Bought in 2006.
What is a "bug" in computing? | An error in a program | A virus | A cable | A keyboard | The word means "insect" in English.
~What is the @ symbol called in French? | Arobase | Esperluette | Dièse | Tilde | The "esperluette" is the &.
What is Bluetooth for? | Connecting devices wirelessly at short range | Charging the battery | Internet everywhere | Protecting against viruses | Earbuds, speakers, watches…
What is a pixel? | A dot in an image | A virus | A cable | A program | A Full HD screen has about 2 million of them.
What does the Ctrl + C shortcut do? | Copy | Paste | Cut | Close | Ctrl + V to paste.
What does the Ctrl + Z shortcut do? | Undo | Save | Print | Zoom | Handy after a mistake.
Which language is used to style web pages? | CSS | HTML | Python | SQL | Colours, fonts, layout…
Who invented the World Wide Web? | Tim Berners-Lee | Bill Gates | Steve Jobs | Mark Zuckerberg | In 1989, at CERN, near Geneva.
What is Linux? | A free operating system | A web browser | A social network | A video game | It runs most of the internet's servers.
What is Google's web browser? | Chrome | Safari | Edge | Firefox | Safari is Apple's, Edge is Microsoft's.
What is a QR code? | A square barcode | A password | A virus | A currency | You scan it with your camera.
What is a VPN for? | Encrypting your connection | Saving battery | Printing | Downloading games | It routes your connection through another server.
Which country is Samsung from? | South Korea | Japan | China | Taiwan | Founded in 1938.
What does "storing in the cloud" mean? | Keeping your files on the internet | Putting them on a USB stick | Printing them | Deleting them | On servers you can reach from anywhere.
What does a processor do? | Does the computer's calculations | Stores photos | Displays the picture | Cools the computer | It's the computer's "brain".
What is 5G? | A generation of mobile network | A graphics card | A video format | A console | Faster than 4G.
Which social network uses "snaps"? | Snapchat | TikTok | X | LinkedIn | Photos that disappear.
Who founded SpaceX and runs Tesla? | Elon Musk | Jeff Bezos | Bill Gates | Tim Cook | SpaceX was founded in 2002.
Which company makes Ryzen processors? | AMD | Intel | Nvidia | Qualcomm | Intel's competitor.
Roughly how much is a kilobyte? | 1,000 bytes | 100 bytes | 10 bytes | 1 million bytes | Kilo means a thousand.
`,
anglais: `= French words | Vocabulary and false friends
What does « pomme » mean? | Apricot | Apple | Pineapple | Pear | Une pomme par jour…
What does « librairie » mean? | Library | Bookshop | Freedom | Book | False friend: a library is « bibliothèque ».
What does « actuellement » mean? | Actually | Currently | Actively | Soon | False friend: "actually" is « en fait ».
How do you say "I'm hungry" in French? | J'ai froid | J'ai faim | J'ai peur | J'ai sommeil | « J'ai froid » means I'm cold.
How do you say "I went" in French? | Je vais | J'irai | Je suis allé | J'allais | Je vais (I go), j'irai (I will go).
What does « jeudi » mean? | Tuesday | Wednesday | Thursday | Friday | Mardi is Tuesday.
What does « pas cher » mean? | Cheap | Chic | Happy | Fast | The opposite is « cher ».
What does the French word « sensible » mean? | Sensible | Sensitive | Sensual | Fragile | False friend: "sensible" is « raisonnable » in French.
What is the plural of « œil » (eye)? | Œils | Œiles | Yeux | Œillets | An irregular plural.
What does « à plus tard » mean? | I see you | See you later | Look at me | Good night | Often shortened to « à plus ».
What does « papillon » mean? | Butterfly | Pillow | Poppy | Puppy | Also used for a bow tie: « nœud papillon ».
What does « mercredi » mean? | Wednesday | Monday | Tuesday | Saturday | Lundi, mardi, mercredi…
What does « cuisine » mean? | Kitchen | Bedroom | Living room | Garden | It also means cooking.
What does « emprunter » mean? | To borrow | To lend | To buy | To sell | To lend is « prêter ».
What does « éventuellement » mean? | Possibly | Eventually | Evidently | Often | False friend: "eventually" is « finalement ».
What does « déception » mean? | Disappointment | Deception | Decision | Reception | False friend: "deception" is « tromperie ».
What does « souris » mean? | Mouse | Smile | House | Moss | A smile is « un sourire ».
What does « dents » mean? | Teeth | Dents | Tents | Hands | « Une dent », « des dents ».
What does « manger » mean? | To eat | To manage | To hang | To walk | « Bon appétit ! »
What does « acheter » mean? | To buy | To catch | To ache | To bring | To sell is « vendre ».
What does « fatigué » mean? | Tired | Fat | Thirsty | Hurried | « Je suis fatigué » : I'm tired.
What does « Quel âge as-tu ? » mean? | How old are you? | How are you? | Where do you live? | What's your name? | Answer: « J'ai 20 ans ».
What does « Enchanté » mean when meeting someone? | Nice to meet you | Enchanted forest | Good night | Enjoy your meal | Said when meeting someone.
What does « la météo » mean? | The weather forecast | The winter | The wind | The weekend | « Quel temps fait-il ? » : what's the weather like?
What does « laid » mean? | Ugly | Kind | Weird | Sad | Milk is « lait ».
What does « fraise » mean? | Strawberry | Raspberry | Phrase | Cherry | A raspberry is « une framboise ».
What does « poulet » mean? | Chicken | Pool | Bullet | Pullover | Kitchen is « cuisine ».
What does « de rien » mean? | You're welcome | Nothing to do | You're nice | Come in | The answer to « merci ».
What does « déjeuner » mean? | Lunch | Breakfast | Dinner | Snack | Breakfast is « petit-déjeuner ».
What does « hier » mean? | Yesterday | Here | Today | Tomorrow | Tomorrow is « demain ».
What does « neveu » mean? | Nephew | Niece | Cousin | Grandson | Niece is « nièce ».
What does « gâteau » mean? | Cake | Gate | Castle | Hat | A castle is « château ».
What does « assoiffé » mean? | Thirsty | Hungry | Thirty | Tired | Thirty is « trente ».
What does « un rhume » mean? | A cold | A rum | A room | A rhyme | « J'ai un rhume » : I have a cold.
What does « pluie » mean? | Rain | Queen | Train | Snow | Snow is « neige ».
What does « gagner » mean? | To win | To drink | To come | To want | To lose is « perdre ».
What does « cher » mean? | Expensive | Cheap | Chair | Cheer | Cheap is « pas cher ».
What does « salle de bain » mean? | Bathroom | Bedroom | Attic | Dining room | The toilet is « les toilettes ».
What does « être en retard » mean? | To be late | To be retired | To be tired | To be light | « Désolé, je suis en retard. »
What does « plage » mean? | Beach | Page | Peach | Plague | A peach is « une pêche ».
`,
conducteur: `= What kind of driver are you? | Personality test
The light turns amber 20 metres ahead: | I brake gently | I speed up, I'll make it | I check my mirror before deciding | What light?
Your music in the car: | Calm stuff, podcasts | Rap, full blast | Nothing, I'm focused | I change track every 30 seconds
Someone cuts you up: | I let it go, no big deal | Horn and headlights | I keep my distance | I didn't even see them
To park: | I take the first wide space | As close as possible, even double-parked | Perfect parallel park in one go | I drive around for 20 minutes
You're running late: | I let them know and get there when I get there | I make up the time on the road | I always leave early | I only notice when I arrive
Your friends say about you behind the wheel: | "So chill" | "Hold on tight" | "We're safe" | "Missed the exit again"
P The Zen One 🧘 | Nothing gets to you on the road. Your passengers sleep like babies. Just careful not to daydream too much.
P The Rusher ⚡ | Always flat out, always late. Your licence points are trembling. Breathe, the road isn't going anywhere.
P The Pro 🎯 | Mirrors, gaps, perfect parking: you drive like it's the exam. Instructors dream of students like you.
P The Scatterbrain 🌀 | Missed exits, forgotten indicator, ignored GPS. You always get there… eventually. Put your phone down.
`,
vacances: `= Which holiday is made for you? | Personality test
Your ideal wake-up time on holiday: | 6 am for a hike | 11 am, straight to the beach | 8 am to visit a museum | Wake up? I get home at 6 am
In your suitcase, you can't forget: | My hiking boots | My swimsuit and sunscreen | My guidebook and camera | My best party outfit
Your perfect meal: | A sandwich on a mountain top | A barbecue with your feet in the sand | A small local restaurant | Street food at 2 am
Your holiday photo: | A wild landscape | A sunset over the sea | A famous monument | The whole gang at a party
Your budget goes on: | Sports activities | A rental facing the sea | Tours and museums | Nights out and clubs
Your favourite way to travel: | On foot or by bike | By boat | By train | Late-night taxi
P The Adventurer 🏔️ | Mountains, hiking, wild nature: you want thrills. Think the Alps, Iceland or a trek in Morocco's Atlas.
P The Beach King 🏖️ | Sun, sea and zero stress. Corsica, Greece or Tunisia are waiting for you and your towel.
P The City Explorer 🏛️ | Museums, little streets and good food spots. Rome, Lisbon or Istanbul are made for you.
P The Night Owl 🪩 | Partying comes first. Barcelona, Ibiza or Berlin, and you sleep on the plane.
`
};
/* Applique la version anglaise sur QUIZ (même ordre, mêmes bonnes réponses). Un quiz dont le nombre de lignes ne correspond pas reste en français. */
function applyEnglish() {
  for (const c of CATS) if (EN_CATS[c.id]) c.name = EN_CATS[c.id];
  for (const k in EN) {
    const q = QUIZ[k]; if (!q) continue;
    const lines = EN[k].trim().split('\n'), [name, sub] = lines.shift().slice(2).split(' | ');
    const prof = lines.filter(l => l.startsWith('P ')), qs = lines.filter(l => !l.startsWith('P '));
    if (qs.length !== q.qs.length || (q.profiles && prof.length !== q.profiles.length)) { console.warn('EN incomplet :', k); continue; }
    q.name = name; q.sub = sub;
    q.qs = q.qs.map((old, i) => { const fr = qs[i].startsWith('~'), p = qs[i].replace(/^~/, '').split(' | ');
      const x = q.type === 'vf' ? [p[0], null, old[2], p[1]] : q.type === 'perso' ? [p[0], p.slice(1, 5)] : [p[0], p.slice(1, 5), old[2], p[5]];
      if (fr) x.frOnly = true;   // question trop centrée sur la France : pas posée aux joueurs anglophones
      return x; });
    if (q.profiles) q.profiles = prof.map(l => l.slice(2).split(' | '));
  }
}
