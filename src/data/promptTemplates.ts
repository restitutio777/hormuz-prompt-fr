export interface SituationItem {
  id: string;
  label: string;
  promptText: string;
}

export interface SituationCategory {
  id: string;
  label: string;
  items: SituationItem[];
}

export const situationCategories: SituationCategory[] = [
  {
    id: 'mobilite',
    label: 'Mobilité',
    items: [
      { id: 'diesel', label: 'Véhicule diesel', promptText: 'Je roule au diesel' },
      { id: 'essence', label: 'Véhicule essence', promptText: 'Je roule à l\'essence' },
      { id: 'pendulaire', label: 'Navette quotidienne', promptText: 'Je fais la navette en voiture tous les jours pour le travail' },
      { id: 'rural', label: 'Zone rurale', promptText: 'J\'habite en zone rurale et dépends entièrement de la voiture' },
      { id: 'avion_prevu', label: 'Vol prévu', promptText: 'J\'ai un voyage en avion prévu dans les prochaines semaines' },
    ],
  },
  {
    id: 'logement_energie',
    label: 'Logement & Énergie',
    items: [
      { id: 'chauffage_gaz', label: 'Chauffage gaz ou fioul', promptText: 'Je me chauffe au gaz ou au fioul' },
      { id: 'gaz_variable', label: 'Contrat gaz variable', promptText: 'Mon contrat de gaz est à tarif variable (non garanti)' },
      { id: 'cuisine_elec', label: 'Cuisine électrique', promptText: 'Je cuisine exclusivement à l\'électricité (pas de gaz)' },
      { id: 'potager', label: 'Potager', promptText: 'J\'ai un potager pour l\'autoproduction' },
      { id: 'locataire', label: 'Locataire', promptText: 'Je suis locataire, sans cave ni jardin' },
      { id: 'stock_alimentaire', label: 'Aucun stock alimentaire', promptText: 'Je n\'ai aucun stock alimentaire d\'avance (pas de cave, pas de réserves)' },
    ],
  },
  {
    id: 'famille_sante',
    label: 'Famille & Santé',
    items: [
      { id: 'enfants', label: 'Jeunes enfants', promptText: 'J\'ai de jeunes enfants au foyer' },
      { id: 'medicaments', label: 'Médicaments réguliers', promptText: 'Moi ou mes proches dépendons de médicaments réguliers' },
      { id: 'aines', label: 'Proches âgés', promptText: 'Je m\'occupe de proches âgés ou malades' },
      { id: 'animaux', label: 'Animaux de compagnie', promptText: 'J\'ai des animaux de compagnie à nourrir' },
    ],
  },
  {
    id: 'travail_finances',
    label: 'Travail & Finances',
    items: [
      { id: 'independant', label: 'Indépendant / TPE', promptText: 'Je suis indépendant ou j\'ai une petite entreprise' },
      { id: 'salarie', label: 'Salarié', promptText: 'Je suis salarié' },
      { id: 'agriculteur', label: 'Agriculteur / Éleveur', promptText: 'Je suis agriculteur ou éleveur et dépends d\'engrais ou d\'alimentation animale importés' },
      { id: 'credit', label: 'Crédit en cours', promptText: 'J\'ai un crédit en cours ou je prévois un achat immobilier' },
      { id: 'bourse', label: 'Épargne en bourse', promptText: 'J\'ai de l\'épargne ou des investissements en bourse' },
      { id: 'projet_immo', label: 'Projet immobilier', promptText: 'J\'ai un projet immobilier ou un changement de vie prévu à court terme' },
      { id: 'budget_serre', label: 'Budget serré', promptText: 'Mon budget mensuel est serré' },
      { id: 'sans_especes', label: 'Paiement dématérialisé', promptText: 'Je paie presque exclusivement par carte ou en ligne' },
    ],
  },
  {
    id: 'taille_menage',
    label: 'Taille du ménage',
    items: [
      { id: 'seul', label: 'Seul(e)', promptText: 'Je vis seul(e)' },
      { id: 'deux', label: 'À deux', promptText: 'Je vis à deux' },
      { id: 'trois_quatre', label: '3–4 personnes', promptText: 'Mon foyer compte 3 à 4 personnes' },
      { id: 'cinq_plus', label: '5+', promptText: 'Mon foyer compte 5 personnes ou plus' },
    ],
  },
];

export const CONTEXTE_CRISE = `\
Mise à jour : 15 septembre 2026 — 200e jour de guerre. Depuis le \
28 février, les États-Unis et Israël mènent une guerre ouverte contre \
l'Iran et ses alliés (Hezbollah, Houthis, milices irakiennes PMF). La \
campagne américano-israélienne « Operation Epic Fury » s'est \
officiellement achevée le 5 mai après deux mois et environ \
25 milliards $ de coûts américains. La guerre a commencé par ~900 \
frappes coordonnées en 12 heures contre des sites militaires, \
nucléaires et gouvernementaux iraniens. Le Guide suprême Ali Khamenei \
a été tué dans les premières frappes ; son fils Mojtaba Khamenei — \
jugé plus dur et plus répressif — lui a succédé. Téhéran a perdu \
l'essentiel de son arsenal conventionnel et de sa défense aérienne, \
mais conserve selon la CIA ~70 % de ses missiles balistiques.

UN COULOIR SUR LE PAPIER, RIEN DE PLUS. Après l'expiration du délai de \
60 jours le 17 août et la plus lourde vague de frappes depuis le début \
de la guerre (1er septembre : une centaine de cibles des Gardiens de la \
révolution, dont pour la première fois deux pétroliers d'État iraniens ; \
riposte iranienne par missiles balistiques sur des bases américaines à \
Bahreïn, en Jordanie, au Koweït et en Irak ; 2 septembre : deux \
pétroliers heurtent des mines), l'Iran et Oman ont tout de même annoncé \
un accord le 26 août : un couloir TEMPORAIRE de 7 miles (11,3 km) de \
large, dont l'entrée se situe dans les eaux territoriales iraniennes et \
une partie de la sortie également ; les navires doivent obtenir une \
autorisation iranienne et acceptent une surveillance iranienne. Mais \
tout l'essentiel manque : coordonnées précises, date d'entrée en \
vigueur, régime des redevances, pavillons exclus. Et l'Iran conditionne \
la réouverture COMPLÈTE à l'exécution par Washington du mémorandum de \
juin — levée de sanctions et déblocage des avoirs iraniens gelés. Les \
États-Unis n'ont pas répondu formellement et soutiennent que la voie \
d'eau est « entièrement ouverte », alors que le trafic continue de \
baisser. Un seul chiffre résume ce qu'en pense le marché : la \
probabilité d'une réouverture d'ici au 30 septembre est cotée à 1 %. \
Bilan du blocus au 1er septembre : 84 navires marchands détournés, 3 \
mis hors d'état, 2 arraisonnés ; depuis le début de la guerre, l'OMI \
recense 75 incidents maritimes et 19 marins tués. Les frappes contre la marine civile continuent : \
le 31 juillet, le méthanier Gaslog Shanghai a été mis hors d'état à \
la sortie du détroit ; le 3 août, le vraquier Minoan Pioneer a été \
touché en salle des machines. Parallèlement, l'Iran frappe les \
infrastructures civiles du Golfe : la centrale électrique et l'usine de dessalement de Subiya, \
au Koweït, a été touchée quatre nuits de suite (jusqu'au 21 juillet), \
alors que ~90 % de l'eau potable koweïtienne provient du dessalement ; \
le gouvernement appelle la population à économiser l'électricité par \
plus de 50 °C. Bahreïn signale plusieurs vagues de missiles et de \
drones (base aérienne Sheikh Isa), la Jordanie des attaques sur \
Aqaba, et en Irak les postes-frontières de Shalamcheh et Abdali ont \
été frappés. Bilan total du conflit : plusieurs milliers de morts, \
millions de déplacés ; l'Iran chiffre ses pertes à 270 milliards $.

Deuxième front — Russie (nouveau). Du 6 au 11 juillet, l'Ukraine a \
frappé ~50 navires de la « flotte fantôme » russe en mer d'Azov, \
dont ~42 pétroliers — la plus grande campagne de ce type depuis le \
début de la guerre. S'y ajoutent des frappes sur raffineries et \
dépôts : Syzran (Samara), la raffinerie de Moscou (qui alimentait \
40 % de la région moscovite), les dépôts de Tver et Stavropol, une \
station de pompage au Bachkortostan, le terminal de chargement de \
Rostov. ~25 % de la capacité de raffinage russe est à l'arrêt ou \
réduite. Le 8 juillet, Moscou a interdit les exportations de diesel ; \
l'interdiction a depuis été PROLONGÉE jusqu'au 31 janvier 2027. Du \
1er au 7 août, les exportations russes de diesel et gasoil sont \
tombées à 80 000 b/j — leur plus bas niveau depuis des années \
(Bloomberg, 13 août), contre 535 000 b/j en juillet 2025. Environ un \
TIERS de la capacité de raffinage russe est hors service. Le \
rationnement touche désormais plus de la moitié des régions russes, \
soit ~50 millions de personnes : quotas par véhicule, files d'attente \
de plusieurs jours, stations à sec. La Russie représentait ~11 % du \
diesel mondial — cette offre a pratiquement disparu du marché \
d'exportation.

Troisième front — la mer Noire (nouveau). La Russie et l'Ukraine \
frappent mutuellement leurs ports céréaliers et leurs navires : ~70 \
frappes sur des installations portuaires depuis juillet, les \
terminaux d'exportation de Novorossiisk visés le 13 août. \
Conséquences directes sur le blé mondial : la Russie, premier \
exportateur mondial, n'exportera que 3 à 3,4 millions de tonnes en \
août contre 5 Mt en moyenne quinquennale — le plus faible mois d'août \
depuis 2016/17 (SovEcon) ; l'Ukraine n'attend plus que 29,6 Mt \
d'exportations agricoles en 2026/27 contre 64,4 Mt prévues, ses \
exportations de blé chutant de 53 % à 8,3 Mt.

Trois goulets d'étranglement au lieu de deux. \
Détroit d'Hormuz : bloqué depuis le 28 février \
(normalement ~25-27 % du pétrole maritime mondial, ~20 % du GNL). \
Le 13 septembre, 8 navires marchands ont franchi le détroit en \
24 heures, contre ~85 par jour avant la crise — soit 9 % du trafic \
d'avant-guerre. 386 navires attendent sur zone sans poste à quai, contre \
512 huit jours plus tôt. Au 15 septembre, c'est le 199e jour de \
fermeture. Le vrai verrou est devenu financier autant que militaire : \
l'assurance risque de guerre atteint ~40 fois son niveau d'avant-crise, \
soit une surprime d'environ 3 900 %. MAIS LE FAIT MAJEUR DE CETTE MISE \
À JOUR EST AILLEURS : LE CONTOURNEMENT D'HORMUZ EST TOMBÉ, LUI AUSSI. \
Les 10 et 11 septembre, des drones ont frappé en deux points, près de \
Riyad et de Médine, l'oléoduc saoudien Est-Ouest, et le royaume l'a mis \
à l'arrêt. Longue de 1 200 km, cette conduite achemine 4 à 5 millions \
de barils par jour des champs de l'est vers le port de Yanbu, sur la \
mer Rouge ; elle avait été construite dans les années 1980 précisément \
pour le cas où l'Iran fermerait Hormuz — c'est l'UNIQUE contournement \
saoudien. Jusqu'à 5 % de l'offre mondiale de pétrole sont touchés ; la \
réparation prendra 5 à 6 semaines selon Reuters, 3 à 5 selon l'AP. \
Selon Riyad, les drones sont partis de la province de Maysan, dans le \
sud-est de l'Irak, près de la frontière iranienne. Et le 11 septembre, \
les Houthis ont pris TOUTE la côte yéménite de la mer Rouge et atteint \
l'île de Périm (Mayyun), dans Bab el-Mandeb — c'est-à-dire la sortie de \
cette même route de secours. La chaîne champs de l'est → oléoduc → \
Yanbu → Bab el-Mandeb → Europe est donc coupée en DEUX endroits à la \
fois, pendant qu'Hormuz reste fermé. C'est ce qui explique le saut du \
Brent dans cette mise à jour. Les \
navires marchands ne circulent plus qu'en convois sous escorte. Le \
secrétaire général de l'OMI, Arsenio \
Domínguez, appelle à éviter tout transit tant que les conditions de \
sûreté ne sont pas réunies. Depuis le 20 juillet : les \
Houthis maintiennent leur blocus naval du détroit de BAB EL-MANDEB, \
en mer Rouge. Le trafic y a reculé de 24 % dès la première semaine \
(354 → 269 transits) avant de se stabiliser autour de 266 ; le trafic \
pétrolier a chuté de 42 %. Les 11 et 12 août, une attaque houthie \
contre un cargo a tué six personnes — les premiers morts dans les \
attaques en mer Rouge depuis plus d'un an. Y transitent normalement \
~7,4 millions de barils par jour (~7 % de la production mondiale), \
~12 % du commerce mondial et près d'un quart du trafic de conteneurs. \
Point décisif : c'était précisément la voie de contournement \
d'Hormuz — l'Arabie saoudite achemine son brut par l'oléoduc Est-Ouest \
vers le port de Yanbu, dont les chargements atteignaient récemment \
~4 millions de b/j (contre 973 000 b/j un an plus tôt). Les deux \
goulets d'étranglement réunis concernent jusqu'à 25 % de l'offre \
mondiale de pétrole et de gaz. Les navires se déroutent déjà par le \
cap de Bonne-Espérance : 10 à 14 jours de délai supplémentaires sur \
tout ce qui est conteneurisé. ADNOC \
(Émirats) : pas de flux complets avant le premier semestre 2027. \
L'Iran consolide son contrôle (points de contrôle insulaires, système \
d'autorisation à plusieurs niveaux) et entend le conserver après la \
guerre — son principal levier. Fin mai, Oman a signalé ~20 mines \
dérivantes possibles près du chenal ; les Gardiens ont tenté en mai \
de poser de NOUVELLES mines. Le blocus naval américain des ports \
iraniens tient ; les exportations iraniennes sont au plus bas depuis \
6 ans.

Coalition de déminage (Royaume-Uni + France, 40+ nations) : plans \
finalisés, mais activation seulement après un cessez-le-feu durable. \
Le porte-avions Charles de Gaulle est en mer d'Arabie avec le \
destroyer HMS Dragon ; le RFA Lyme Bay (navire-mère des drones \
démineurs) a chargé les équipements britanniques et français ; les \
chasseurs de mines italiens Crotone et Rimini sont dans la région, le \
néerlandais Willemstad a passé Gibraltar le 4 juin ; l'Allemagne \
prépositionne le Fulda et le ravitailleur Mosel en Méditerranée. \
L'Iran menace la mission d'une « réponse décisive et immédiate ». À \
l'ONU, blocage : veto sino-russe le 7 avril ; les nouveaux projets de \
résolution américain et français ne sont pas programmés. Pentagone : \
6 mois de déminage à partir du début — d'autres disent bien plus \
(référence 1991 : 2 ans pour 1 300 mines).

Front Liban — le cessez-le-feu du 16 avril s'effondre : le Hezbollah \
a rejeté sa prolongation ; le 6 juin, Israël a tué trois soldats de \
l'armée libanaise dont un général ; le Hezbollah utilise des drones \
FPV à fibre optique insensibles au brouillage. Plus de 3 millions de \
Libanais dépendent de l'aide humanitaire — plus de la moitié de la \
population.

Pétrole — attention, le signal s'est INVERSÉ. Le Brent est à ~87 $ le \
14 août, soit environ 13 % SOUS son sommet du 23 juillet (plus de \
100 $). Le brut redevient disponible : l'OPEP+ augmente sa production \
pour le cinquième mois consécutif et une libération coordonnée de \
réserves stratégiques pèse sur les cours. Autrement dit : le prix du \
baril baisse pendant que le gazole monte. Un accord sur Hormuz \
soulagerait donc d'abord le brut, pas le prix à la pompe. \
Les pays de l'AIE ont libéré 400 millions de \
barils (la plus grande libération de l'histoire) ; la réserve \
stratégique américaine est à son plus bas depuis Reagan. Le \
ministère américain de la Justice enquête toujours sur 2,6 \
milliards $ de paris baissiers placés avant des annonces de Trump — \
soupçon de délit d'initié.

Diesel — le vrai cœur du choc, et il ne dépend plus du prix du baril. \
Ce n'est pas le pétrole qui manque, c'est la capacité de raffinage. \
Les marges de raffinage du diesel sont au RECORD aux États-Unis ET en \
Europe en même temps : 106 $/baril aux États-Unis le 1er septembre \
(contre plus de 98 $ à la mi-août et 62 $ fin juillet), et le crack ICE \
gasoil contre Brent, plus proche de la réalité européenne, évolue lui \
aussi en zone record, jusqu'à ~95 $ à son pic. La raffinerie Aramco de \
Jizan — 400 000 barils/jour, dont ~30 % de gazole et fioul — n'a \
toujours pas de retour au plein régime confirmé. Désormais QUATRE \
manques simultanés, dont aucun ne se comble en quelques semaines : \
l'oléoduc Est-Ouest à l'arrêt, Jizan, la Russie qui n'exporte \
pratiquement plus de diesel, et un raffinage mondial très inférieur à \
celui de l'an dernier (AIE). C'EST LE MÉCANISME QUI A \
CHANGÉ : en août, le Brent baissait pendant que le gazole montait. \
Désormais les deux montent ensemble — le Brent est à ~109 $ le \
15 septembre, un plus haut de quatre mois, encore ~15 % au-dessus du \
début septembre, avec +2,7 % sur les seules 24 dernières heures. Le marché du brut n'est donc plus le contrepoids qu'il \
était en août. En France, le gazole atteint un NOUVEAU RECORD à 2,333 €/L au \
15 septembre ; le SP95-E10 est à 2,143 €/L. Le fioul domestique est à \
~1 870 € les 1 000 litres le 14 septembre, soit +108 € en une seule \
semaine et +62 % sur un an. Les automobilistes français font plus de \
100 km pour aller faire le plein en Andorre ou au Luxembourg. Pour \
comparaison : Belgique 2,254 €/L, Allemagne 2,32 €/L, France \
2,333 €/L — les trois pays tiennent dans quelques centimes. NOUVEAU EN \
ALLEMAGNE, ET CELA CONCERNE AUSSI LES PRIX EUROPÉENS : au déficit \
mondial de produits raffinés s'ajoute un goulet INTÉRIEUR. Le Rhin est \
tombé à ~22 cm à l'échelle de Kaub, sous le record de 25 cm d'octobre \
2018 ; à Cologne, 60 cm contre 69 cm alors. Les péniches ne chargent \
parfois qu'un quart de leur capacité ou s'arrêtent, et les taux de fret \
Rotterdam-Karlsruhe sont passés d'environ 45 €/t en juin à 150-160 €/t. \
La chambre de commerce de Rhénanie-Palatinat attend des effets sur les \
prix des carburants au moins jusqu'en octobre. Conséquence pratique \
pour un ménage : une partie de la hausse actuelle est MÉTÉOROLOGIQUE et \
repartira avec le niveau de l'eau, tandis que la part liée à la guerre \
restera — d'où l'intérêt d'acheter le fioul par fractions plutôt que de \
remplir la cuve entière au sommet. La France importe normalement 30 à \
40 % de son \
diesel du Moyen-Orient ; la Russie représentait ~11 % du diesel \
mondial. Le diesel est le sang de la logistique : le surcoût se \
répercute via le fret sur tous les prix en rayon — même pour les \
ménages sans véhicule diesel. Les mesures de soutien expirent : la \
baisse temporaire des taxes allemandes s'est terminée mi-juin. Le \
rationnement slovène (depuis le 23 mars : 50 L/jour particuliers) \
reste en vigueur.

Gaz et électricité — l'hiver est le vrai problème, et il ne reste que \
sept semaines avant le 1er novembre. Le TTF néerlandais est à \
~84 €/MWh le 14 septembre, après plus de 81 €/MWh le 11 septembre : \
c'est le PLUS HAUT NIVEAU DEPUIS DÉCEMBRE 2022. Un moteur essentiel : \
environ 20 % des flux gaziers mondiaux passent normalement par Hormuz, \
surtout depuis le Qatar. Les stocks européens sont remplis à 68,3 % au \
15 septembre, soit 19,7 points sous la norme quinquennale de 88 %, un \
déficit d'environ 216 700 GWh ; l'Allemagne est à 55,6 % contre ~74 % \
un an plus tôt. L'UE avait déjà ABAISSÉ son objectif contraignant de \
90 % à 80 %, et l'objectif intermédiaire du 1er septembre n'a même pas \
été atteint. À l'inverse, une rassurance qu'il faut prendre au sérieux : \
l'agence fédérale allemande des réseaux et l'association Zukunft Gas \
estiment que la sécurité d'approvisionnement n'est PAS menacée malgré \
des stocks bas. La nuance est nouvelle : l'initiative INES avertit qu'en \
cas d'hiver RIGOUREUX, et si le remplissage reste lent, la situation \
pourrait devenir critique ; pour un hiver normal ou doux, elle reste \
sûre. C'est la formulation la plus honnête disponible, et elle ne doit \
être raccourcie dans aucun des deux sens : le prix est le problème \
certain, le volume un risque résiduel qui dépend de la météo. Les \
deux sont vrais, et la distinction compte : le risque pour un ménage \
n'est pas la conduite vide, c'est le prix. Entrer dans l'hiver 22 \
points sous la norme oblige à racheter cher en hiver — facture visible \
à la régularisation du printemps 2027. Comme le \
prix de l'électricité reste indexé sur le gaz par le mécanisme de \
l'ordre de mérite (alors que le gaz ne produit que 18-20 % de \
l'électricité de l'UE), les prix spot atteignent déjà 120-150 €/MWh \
en Allemagne et en Italie. Le GNL qatari manque pour une \
durée indéterminée (Ras Laffan : 3-5 ans de réparation). Bruxelles \
demande aux États membres de se préparer à des perturbations \
prolongées et envisage de réactiver les instruments de crise de 2022 \
(objectifs d'économies, plafonds de prix) — rien n'est encore décidé. \
Conséquence pratique : ce qu'un ménage paiera pour se chauffer \
l'hiver 2026/27 se joue maintenant, mais ne sera visible que sur la \
régularisation au printemps.

Kérosène. Le commissaire européen aux Transports Tzitzikostas \
assure qu'il n'y a PAS de pénurie imminente de kérosène en Europe — \
mais les surcoûts dépassent 2 milliards $ pour les compagnies, et \
routes comme tarifs restent sous pression. Les liaisons vers le Golfe \
restent réduites, et le blocus de Bab el-Mandeb ajoute déroutements \
et surprimes d'assurance ; surcharges carburant record \
(ANA/JAL) ; flambée attendue, les \
raffineries américaines redirigeant leur production vers le marché \
intérieur. Le rationnement italien dans sept aéroports reste en \
vigueur. IAG (maison-mère British Airways) prévoit 9 milliards € de \
coûts carburant en 2026 (+2 milliards € vs 2025) ; Bruxelles oblige \
les compagnies à indemniser les annulations (250 à 600 € + hôtel + \
remboursement).

Alimentation — chiffres d'août, rien de nouveau avant début octobre. \
L'indice FAO des prix alimentaires a atteint 133,3 points en août \
(publié le 4 septembre), +1,9 % sur un mois par rapport au chiffre de \
juillet révisé à 130,8. Les données de septembre ne paraîtront que \
début octobre : le chiffre d'août est le plus récent disponible, ce \
n'est pas celui du mois en cours. \
Le fait nouveau est l'ampleur : pour la première fois depuis des \
mois, TOUTES les catégories montent en même temps — céréales 116,3 \
(+2,2 %), huiles végétales 196,9 (+0,6 %), sucre 106,4 (+11,9 %, la \
plus forte hausse, sur fond d'inquiétude pour la campagne 2026/27), \
viande 127,9 (+1,0 %), produits laitiers 119,2 (+2,3 %). Que la \
viande et le lait, jusqu'ici stables, se mettent à monter signifie \
que le prix de l'énergie traverse désormais toute la chaîne, et plus \
seulement les céréales. Le blé se négocie environ 25 % au-dessus \
de son niveau de janvier 2026, au plus haut depuis deux ans — les \
attaques en mer Noire s'ajoutant désormais au choc des engrais. La \
FAO prévoit une récolte \
céréalière mondiale 2026/27 en baisse de 2 % (2 982 Mt) et avertit : \
l'incertitude sur Hormuz continue de réduire l'usage d'engrais — \
l'urée a bondi de 19 % en une seule semaine. Le \
Golfe persique représente 30-35 % des exportations mondiales d'urée \
et 20-30 % d'ammoniac. Transmission engrais → blé → farine → pain : \
4-6 mois ; le choc alimentaire frappe pleinement à l'automne, quelle \
que soit l'évolution du conflit.

Chauffage — c'est le point le plus urgent de cette mise à jour, avec \
une réserve importante. Pellets, bois, fioul : délais 6-8 semaines \
(fioul : ~1 870 €/1 000 L le 14 septembre, +108 € en une semaine et \
+62 % sur un an ; en Allemagne, +24,5 % en un mois). Qui n'a encore \
rien commandé devrait prendre une première fraction maintenant — mais \
PAS la cuve entière d'un coup, car une partie de la hausse actuelle \
tient à l'étiage du Rhin et repartira avec le niveau de l'eau. Attendre une baisse ne suppose plus seulement \
une trêve : il faudrait de la capacité de raffinage réparée. Tant que \
Jizan est à l'arrêt et que la Russie n'exporte pas, le fioul suit le \
marché des produits, pas le cours du brut. Plutôt que de parier sur \
le bon moment, mieux vaut acheter en plusieurs fractions ; qui n'a \
encore rien commandé ne devrait pas attendre octobre pour la première. Les ménages au gaz devraient évaluer des \
alternatives maintenant, pas en octobre, et augmenter volontairement \
leurs mensualités pour éviter une régularisation brutale au \
printemps. \
Délais de livraison (nouveau) : avec le déroutement des conteneurs \
par le cap de Bonne-Espérance, tout ce qui est commandé arrive 10 à \
14 jours plus tard — électronique, pièces détachées, lunettes, pneus, \
précurseurs de médicaments. Ce qui sera nécessaire à l'automne se \
commande maintenant. \
Dimension humaine : le principal risque n'est pas l'ignorance mais la \
paralysie — la plupart des gens connaissent la situation dans les \
grandes lignes et n'agissent pas, parce que se distraire est plus \
confortable qu'agir. Faire une seule chose concrète (plein, réserves, \
traitement de fond, mensualité, parler aux voisins) vaut mieux que \
tout savoir sans rien faire. La dépendance aux chaînes \
d'approvisionnement est structurelle, pas un échec personnel : \
personne ne s'en extrait seul dans une société de division du \
travail. La réponse tenable est donc la préparation plus le lien \
local — trois foyers qui se coordonnent sont mieux placés qu'un seul \
qui stocke (qui a un poêle, un groupe électrogène, un véhicule ; qui \
a besoin d'aide en cas de coupure : soins, oxygène, chaîne du froid \
des médicaments).

Allemagne / France. Selon Reuters et Wirtschaftswoche, les services \
de sécurité allemands ont déjoué plus d'une douzaine de plans \
d'attentats commandités par Téhéran depuis le début de la guerre. \
Les industries énergétivores (chimie, verre, acier) souffrent de la \
pression sur les prix du carburant et de l'électricité des deux \
côtés du Rhin.

Inflation. Le chiffre officiel ne reflète pas la situation d'un \
ménage donné — non par manipulation, mais parce qu'il mesure un \
panier moyen. Là où le carburant, le chauffage et l'alimentation \
dominent le budget, la charge réelle est un multiple : fioul à \
1 753 € les 1 000 litres (+6 % en quatre jours), gaz +130 % depuis \
janvier, et un indice FAO dont toutes les catégories montent \
simultanément pour la première fois depuis des mois. En cas de crise longue, les scénarios vont jusqu'à 12,5 %. Ray Dalio parle d'une \
dynamique de « guerre mondiale » et d'une « guerre du capital » \
naissante.

La nouvelle normalité. Le CSIS estime que l'Iran conservera son \
contrôle de fait sur le détroit — les issues les plus probables sont \
un « accord creux » ou la reprise du conflit, pas un retour à \
l'avant-guerre. Le monde s'adapte à un chokepoint durablement à \
risque.

Le schéma silencieux. Covid 2020, énergie hiver 2022 : les démentis \
officiels ont tenu jusqu'au dernier moment, puis les restrictions sont \
tombées en 48 heures. Les recommandations d'aujourd'hui (rouler moins, \
voler moins, économiser le gaz) peuvent devenir des obligations \
demain. Ceux qui se préparent tôt arbitrent ; ceux qui attendent \
l'annonce officielle subissent.

Résilience des paiements : en cas de stress bancaire ou de correction \
boursière sévère, des plafonds de retrait peuvent être imposés du \
jour au lendemain (précédent : Grèce 2015). Avoir l'équivalent d'une \
semaine de dépenses courantes en liquide reste une précaution \
raisonnable.

Pénuries de médicaments, d'AdBlue, d'hélium. Récolte 2026 réduite. \
Hausses visibles en rayon dès l'automne sur céréales, huiles, viande \
(coût de l'alimentation animale), produits transformés. \
Déréférencements et rayons vides à prévoir — même schéma que \
post-Covid, en pire, avec une composante alimentaire durable qui se \
prolongera tout l'hiver 2026-2027.

État des lieux détaillé avec calendrier et effets domino : \
https://hormuz-fr.vercel.app`;

export const TACHE_PRIORITES = `\
Tâche 1 — Analyse en cascade & Priorités pratiques :
Utilise TOUT ce que tu sais de moi — de nos échanges précédents ET des \
points sous « Ma situation » ci-dessus. Plus tu en sais sur moi, plus \
ta réponse sera personnalisée. Traite chaque point de situation comme \
un fait concret sur ma vie.

Raisonne en cascades :
  1. Impacts directs : qu'est-ce qui ME touche immédiatement ?
  2. Effets secondaires : que se passe-t-il dans mon secteur, chez mes \
clients, dans ma chaîne d'approvisionnement ou chez mon employeur ?
  3. COURT TERME (d'ici fin octobre) : ce qui est déjà acquis, c'est \
le déficit de produits raffinés — l'oléoduc Est-Ouest à l'arrêt pour 3 \
à 6 semaines, Jizan sans plein régime confirmé, la Russie qui n'exporte \
plus, un raffinage mondial très inférieur à l'an dernier. Aucun de ces \
quatre manques ne se comble en quelques semaines. À noter pour le \
fioul : deux surprimes se superposent et ne durent pas aussi longtemps \
— celle de la guerre reste, celle du Rhin repartira avec l'eau. D'où \
l'achat par fractions plutôt qu'en une fois. \
Carburant, fioul, mensualités d'énergie, commandes à long \
acheminement (10-14 jours de plus par le cap), traitements de fond.
  4. MOYEN TERME (novembre à mars) : l'hiver. Stocks de gaz ~20 points sous \
la norme quinquennale, Allemagne à 55,6 % contre 74 % un an plus tôt, \
avertissement de l'INES pour un hiver rigoureux, prix de l'électricité \
indexé sur le gaz, régularisation brutale au printemps 2027. Ajoute le choc alimentaire de la mer Noire, qui touche \
la saison EN COURS, pas seulement la suivante.
  5. LONG TERME (2027 et au-delà) : la récolte 2027 est déjà \
handicapée par les engrais non achetés cet été. Et même une \
réouverture d'Hormuz ne remet pas les compteurs à zéro : primes \
d'assurance (~40 fois le niveau d'avant-crise), réparations de \
raffineries, oléoduc Est-Ouest hors service et stocks vides se \
normalisent sur des trimestres, pas sur des jours — et le marché cote \
à 1 % la probabilité d'une réouverture d'ici fin septembre. À noter \
aussi : l'étiage record du Rhin n'est pas un accident isolé — 2018, \
2022, et maintenant 2026. Mieux vaut remplir la cuve plus tôt dans \
l'année. Les \
décisions structurelles (chauffage, isolation, véhicule, habitude de \
stock) se calculent avec les prix d'aujourd'hui, pas ceux de 2024.

Déduis-en mes 5 priorités les plus importantes. Classe par urgence :
  • Immédiat (aujourd'hui/demain)
  • Cette semaine
  • Ce mois-ci

Pour chaque priorité :
  1. La cascade qu'elle déclenche (direct → effet secondaire → \
conséquence pour moi)
  2. Une prochaine étape concrète et réalisable — pas un conseil vague, \
mais quelque chose que je peux vraiment faire
  3. Ce que cela coûte approximativement et combien de temps cela prend`;

export const TACHE_POSTURE = `\
Tâche 2 — Boussole intérieure :
Qui est-ce que je veux être dans cette situation ? Pas quoi faire — \
mais qui être.

Aide-moi avec 2 à 3 questions de réflexion pour clarifier ma posture. \
Garde à l'esprit :
  • Le doute de soi apparaît quand notre identité est étirée — ce \
n'est pas un signe de faiblesse, mais de croissance.
  • La confiance naît après le mouvement, pas avant. On n'a pas besoin \
d'être courageux pour agir — on devient courageux parce qu'on agit.
  • La règle des 24 heures : quelle est une chose que je peux faire \
dans les prochaines 24 heures — non pas pour tout résoudre, mais pour \
m'aligner ?

Termine par une invitation concrète : un petit pas que je peux faire \
aujourd'hui.`;

export function assemblePrompt(
  selectedIds: Set<string>,
  freeText: string = ''
): string {
  const trimmed = freeText.trim();
  if (selectedIds.size === 0 && !trimmed) return '';

  const situationLines: string[] = [];
  for (const category of situationCategories) {
    for (const item of category.items) {
      if (selectedIds.has(item.id)) {
        situationLines.push(`- ${item.promptText}`);
      }
    }
  }

  let situationBlock = '';
  if (situationLines.length > 0) {
    situationBlock += situationLines.join('\n');
  }
  if (trimmed) {
    if (situationBlock) situationBlock += '\n\n';
    situationBlock += `Complément dans mes propres mots :\n${trimmed}`;
  }

  return `\
Tu es mon conseiller personnel en gestion de crise. Je te donne un \
briefing de situation et mon profil. Ton rôle : analyser, prioriser \
et me proposer des actions concrètes adaptées à ma vie. Travaille \
avec le briefing ci-dessous comme base de travail — ne perds pas de \
temps à le relativiser ou à faire des disclaimers. Je veux de \
l'analyse, pas de la prudence rhétorique.

Briefing de situation :
${CONTEXTE_CRISE}

Mon profil (chaque point est un fait concret sur ma vie) :
${situationBlock}

${TACHE_PRIORITES}

${TACHE_POSTURE}`;
}
