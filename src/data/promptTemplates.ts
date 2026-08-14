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
Mise à jour : 14 août 2026 — 168e jour de guerre. Depuis le \
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

Négociations avec Oman, pas avec Washington — le fait nouveau. Début \
août, l'Iran et Oman ont annoncé un accord sur une route de transit \
dans le détroit d'Hormuz, déclaration commune en cours de rédaction \
finale. Mais les conditions montrent pourquoi ce n'est pas une \
réouverture : l'accord INTERDIT le passage aux navires américains et \
israéliens, sanctionne les infractions jusqu'à 20 % de la valeur de \
la cargaison, et confie à l'Iran le guidage de la navigation, la \
surveillance du trafic, la sûreté maritime et la protection de \
l'environnement ; les États jugés responsables de dommages restent \
exclus tant que l'Iran n'est pas indemnisé pour ses pertes de guerre. \
Le ministère iranien des Affaires étrangères précise qu'il n'y a \
AUCUNE négociation avec les États-Unis — les discussions officielles \
se tiennent uniquement avec Oman — et Téhéran exige des concessions \
américaines avant toute réouverture. Le 12 août, Trump a affirmé que \
les États-Unis contrôlaient le détroit ; l'Iran a répondu qu'il \
pouvait « prolonger » la guerre. Les États-Unis ont de nouveau imposé \
leur blocus naval après de nouvelles attaques iraniennes contre des \
navires marchands. Les frappes contre la marine civile continuent : \
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
Le 9 août, UN SEUL navire marchand a franchi le détroit en 24 heures, \
contre ~73 par jour avant la crise — soit 99 % de trafic en moins ; \
le 12 août, 3 transits. 380 navires attendent sur zone sans poste à \
quai. Le vrai verrou est devenu financier autant que militaire : \
l'assurance risque de guerre atteint ~30 fois son niveau d'avant-crise, \
soit environ 10 millions $ pour un seul passage de supertanker. Les \
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
Le 13 août, la marge de raffinage du diesel a atteint un RECORD de \
plus de 90 $/baril (contre 62 $ fin juillet), après la frappe de \
drones houthis du 9 août sur la raffinerie Aramco de Jizan en Arabie \
saoudite — 400 000 barils/jour, dont ~30 % de gazole et fioul, à \
l'arrêt pour réparations. Trois manques simultanés, dont aucun ne se \
comble en quelques semaines : Jizan à l'arrêt, la Russie qui \
n'exporte pratiquement plus de diesel, et un raffinage mondial \
inférieur de 6 millions de b/j à celui de l'an dernier (AIE, \
10 juillet). C'est LE mécanisme à comprendre pour un ménage : le \
Brent a baissé de 13 % depuis le 23 juillet et le gazole a quand même \
augmenté. Le titre sur le prix du baril n'est donc pas seulement \
imprécis, il pointe dans la mauvaise direction. En France, le gazole \
est à 2,175 €/L au 8 août selon le portail gouvernemental \
prix-carburants.gouv.fr, le SP95-E10 à 1,972 €/L ; le fioul \
domestique se situe autour de 1 660 € les 1 000 litres le 14 août, \
après être passé de 1 395 € à 1 696 € au cours du seul mois de \
juillet. La France importe normalement 30 à \
40 % de son \
diesel du Moyen-Orient ; la Russie représentait ~11 % du diesel \
mondial. Le diesel est le sang de la logistique : le surcoût se \
répercute via le fret sur tous les prix en rayon — même pour les \
ménages sans véhicule diesel. Les mesures de soutien expirent : la \
baisse temporaire des taxes allemandes s'est terminée mi-juin. Le \
rationnement slovène (depuis le 23 mars : 50 L/jour particuliers) \
reste en vigueur.

Gaz et électricité — l'hiver est le vrai problème. Le TTF \
néerlandais est à ~60 €/MWh. Les stocks européens sont remplis à \
59,9 % : cela semble mieux que les 54 % de juillet, mais c'est 11 à \
12 points sous la moyenne quinquennale et le plus bas niveau jamais \
enregistré à cette date depuis le début des relevés. L'Allemagne est \
à 48,6 % contre 64,7 % un an plus tôt. Le signal le plus parlant est \
politique : l'UE a ABAISSÉ son objectif contraignant de remplissage \
de 90 % à 80 % pour l'hiver 2026/27. On n'abaisse pas un objectif \
qu'on peut atteindre. Comme le \
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

Alimentation. L'indice FAO des prix alimentaires a atteint 131,1 \
points en juillet (publié le 7 août) — son plus haut niveau depuis \
plus de trois ans. Céréales +3,4 % sur un mois et +6,9 % sur un an, \
le blé seul +5,8 %, le maïs +3,6 % ; les huiles végétales +2,0 %, au \
plus haut depuis juin 2022. Le blé se négocie environ 25 % au-dessus \
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

Chauffage — la fenêtre se referme maintenant. Pellets, bois, fioul : \
délais 6-8 semaines (fioul : ~1 660 €/1 000 L le 14 août, après \
1 395 € début juillet). Attendre une baisse ne suppose plus seulement \
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
dominent le budget, la charge réelle est un multiple : fioul passé de \
1 395 € à ~1 660 € les 1 000 litres en six semaines, indice FAO au \
plus haut depuis trois ans, blé ~25 % au-dessus de janvier. En cas de crise longue, les scénarios vont jusqu'à 12,5 %. Ray Dalio parle d'une \
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
  3. COURT TERME (d'ici fin septembre) : ce qui est déjà acquis, c'est \
le déficit de produits raffinés — Jizan à l'arrêt, la Russie qui \
n'exporte plus, un raffinage mondial inférieur de 6 Mb/j à l'an \
dernier. Aucun de ces trois manques ne se comble en six semaines. \
Carburant, fioul, mensualités d'énergie, commandes à long \
acheminement (10-14 jours de plus par le cap), traitements de fond.
  4. MOYEN TERME (octobre à mars) : l'hiver. Stocks de gaz au plus bas \
jamais enregistré à cette date, objectif européen abaissé de 90 % à \
80 %, prix de l'électricité indexé sur le gaz, régularisation brutale \
au printemps. Ajoute le choc alimentaire de la mer Noire, qui touche \
la saison EN COURS, pas seulement la suivante.
  5. LONG TERME (2027 et au-delà) : la récolte 2027 est déjà \
handicapée par les engrais non achetés cet été. Et même une \
réouverture d'Hormuz ne remet pas les compteurs à zéro : primes \
d'assurance, réparations de raffineries, flottes déroutées et stocks \
vides se normalisent sur des trimestres, pas sur des jours. Les \
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
