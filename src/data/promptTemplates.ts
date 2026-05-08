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
Mise à jour : 8 mai 2026. Depuis le 28 février, les États-Unis et \
Israël sont en guerre ouverte avec l'Iran et ses alliés (Hezbollah, \
Houthis, milices irakiennes PMF). L'opération américano-israélienne \
« Epic Fury » a déclenché le conflit en frappant les sites \
militaires, nucléaires et gouvernementaux iraniens. Le Guide suprême \
Ali Khamenei a été tué dans les premières frappes ; son fils Mojtaba \
Khamenei lui a succédé. Téhéran a riposté par des centaines de \
missiles et drones sur Israël, les bases américaines et les États du \
Golfe — mais a perdu l'essentiel de son arsenal conventionnel, de sa \
défense aérienne et de ses capacités nucléaires.

Cessez-le-feu fragile depuis le 8 avril, prolongé plusieurs fois, \
toujours accroché — mais cette semaine il s'est gravement fragilisé. \
Dans la nuit du 7 au 8 mai, trois destroyers américains ont essuyé \
des tirs iraniens en traversant le détroit d'Hormuz : 110 minutes de \
combat naval. Les États-Unis ont riposté en frappant des installations \
militaires iraniennes (sites de lancement de missiles et drones, \
Bandar Abbas, île de Qeshm). Trump qualifie l'incident de « broutille » \
mais menace de représailles « violentes » sur Truth Social si Téhéran \
ne signe pas « rapidement ». L'Iran parle de « violation flagrante » \
du cessez-le-feu (porte-parole Esmaïl Baghaï).

Négociations en cours via le Pakistan. Washington exige : démontage \
complet des sites nucléaires iraniens centraux, interdiction \
d'enrichissement pendant 20 ans, ouverture du détroit d'Hormuz, \
aucune arme atomique. Téhéran exige : droit à l'enrichissement et \
souveraineté sur la voie maritime. Trump dit qu'un accord est \
« possible dans les jours qui viennent ». Phase qualifiée de \
« pré-négociations » : ni acquise, ni rompue. Pertes totales du \
conflit (Iran, Liban, Israël, États du Golfe) : plusieurs milliers de \
morts, millions de déplacés.

Détroit d'Hormuz — bloqué depuis ~10 semaines. Habituellement 20 à \
25 % du commerce mondial de pétrole et de GNL transite par là. L'Iran \
a créé sa propre autorité de contrôle imposant permis de transit et \
péages obligatoires (Lloyd's List). Marco Rubio juge cela \
« inacceptable » — « ils prétendent posséder une voie navigable \
internationale ». La France a pris le « lead » de la coalition navale \
multinationale ; le porte-avions Charles de Gaulle se dirige vers le \
sud de la mer Rouge, près du détroit. Les États-Unis maintiennent un \
blocus naval des ports iraniens — le 8 mai seul, plus de 70 tankers \
ont été stoppés (166 millions de barils, ~13 milliards $). Un avion \
américain a neutralisé deux pétroliers iraniens en tirant dans leurs \
cheminées. L'Iran a saisi le pétrolier « Ocean Koi » (pavillon \
Barbados, sous sanctions US) ; 11 marins pakistanais et 20 iraniens \
sont retenus à bord de navires saisis par les États-Unis. Les Émirats \
arabes unis ont essuyé des vagues de missiles balistiques et drones \
iraniens cette semaine — 3 blessés. Une marée noire de ~45 km² \
apparaît près de l'île iranienne de Kharg sur images satellite \
Copernicus (6-8 mai).

Mines — le verrou physique tient. Minage chaotique : l'Iran lui-même \
ne sait plus où se trouvent toutes ses mines (NYT) ; mines dérivantes. \
Stock estimé : 5 000 à 6 000 ; 5 % suffisent à bloquer le passage des \
mois. Référence 1991 : 2 ans pour 1 300 mines irakiennes. L'Italie \
(Tajani) propose sa marine pour le déminage sous condition de \
cessez-le-feu durable ; l'Allemagne attend mandat ONU et vote du \
Bundestag. Premier transit notable hors période de tirs : un seul \
pétrolier (« Odessa », pavillon maltais, 1 million de barils) a \
atteint la Corée du Sud le 8 mai après avoir franchi Hormuz le \
17 avril, pendant une brève accalmie.

Front Liban — guerre Hezbollah-Israël en parallèle. Frappes \
israéliennes intensives sur le sud-Liban : 12 morts hier, 152 attaques \
sur structures de santé depuis le 2 mars (103 morts, 241 blessés selon \
l'OMS). Plus de 3 millions de Libanais dépendent de l'aide humanitaire \
— plus de la moitié de la population. Discussions Liban-Israël prévues \
les 14-15 mai à Washington.

Pétrole. Brent autour de 100 $/baril (101,71 $ vendredi matin, \
+1,65 %), pic à 103 $ après les frappes. Avant guerre : 70 $. WTI : \
96 $. Le ministère américain de la Justice enquête sur 2,6 milliards \
$ de paris sur la baisse du pétrole effectués peu avant des annonces \
de Trump pendant le conflit (ABC, NBC) — soupçon de délit d'initié.

Diesel et carburants. La France importe normalement 30 à 40 % de son \
diesel du Moyen-Orient. Les prix tiennent grâce au cessez-le-feu mais \
resteraient explosifs en cas de rupture franche. Les stocks \
stratégiques ne seront probablement pas libérés — réservés aux \
services publics.

Gaz. L'UE a augmenté ses importations de GNL russe de 17,2 % au \
premier trimestre 2026 (Yamal) malgré l'objectif d'arrêt fin 2027. \
Mix d'importation : USA 60 %, Russie 17 %, Nigeria et Qatar 6 % \
chacun. Avant guerre, Hormuz acheminait ~20 % du commerce mondial de \
GNL — flux interrompu. Les installations qatariennes de Ras Laffan \
sont endommagées (réparation 3-5 ans, 3 fabricants de turbines au \
monde, carnets pleins).

Kérosène. L'AESA (sécurité aérienne UE) a autorisé en urgence le \
carburant Jet A américain pour combler la pénurie. Côté français, le \
ministre des Transports Philippe Tabarot assure qu'il n'y aura « pas \
d'annulations massives cet été » : Volotea 1 %, Transavia 2 %, Air \
France respecte ses plans de vol — les compagnies font 70 % de leur \
chiffre entre juillet et août, incitation forte à tenir. Mais le \
kérosène a augmenté d'environ 50 % depuis le début du conflit ; IAG \
(maison-mère British Airways) prévoit 9 milliards € de coûts de \
carburant en 2026 (+2 milliards € vs 2025). Bruxelles oblige les \
compagnies à indemniser les annulations (250 à 600 € + hôtel + \
remboursement). Volotea modifie ses prix après vente — Bercy parle \
d'illégalité.

Alimentation. L'indice FAO des prix alimentaires augmente modérément \
pour le 3e mois consécutif : avril +1,6 % vs mars, +2 % sur un an. \
Huiles végétales : +5,9 % en un mois. Viande : nouveau record d'avril, \
tirée par le bovin. Céréales contenues pour l'instant. Un tiers des \
engrais mondiaux passe par Hormuz ; les usines indiennes, bangladaises \
et pakistanaises ferment faute de gaz qatari. Transmission engrais → \
blé → farine → pain : 4-6 mois ; le choc alimentaire frappe pleinement \
à l'automne. La FAO maintient : au-delà de 3 mois de blocage, crise \
alimentaire mondiale probable. On en est à ~10 semaines.

Chauffage — la fenêtre se referme. Pellets, bois, fioul : délais 6-8 \
semaines d'avril à août, prix en hausse mensuelle. Qui commande après \
juillet n'a plus de marge avant l'hiver. Les ménages au gaz devraient \
évaluer des alternatives maintenant, pas en octobre.

Allemagne / France. Selon Reuters et Wirtschaftswoche, les services \
de sécurité allemands ont déjoué plus d'une douzaine de plans \
d'attentats commandités par Téhéran depuis le début de la guerre. Les \
Iraniens, eux, sont coupés du réseau internet mondial depuis 70 jours \
consécutifs. Les exportations allemandes de mars surprennent à la \
hausse (+0,5 % vs février).

Inflation prévisionnelle : 5,5 % (arrêt immédiat des hostilités) à \
12,5 % (crise prolongée). Ray Dalio parle d'une dynamique de « guerre \
mondiale » et d'une « guerre du capital » naissante — nouveau partage \
des grandes puissances.

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
  3. Horizon court terme (3 mois) : énergie, carburant, prix immédiats.
  4. Horizon automne-hiver 2026-2027 : intègre le choc alimentaire à \
venir (récoltes réduites, hausse des prix alimentaires, pénuries en \
rayon). Même si le détroit rouvrait demain, le déminage prendra des \
mois et les semis manqués ne se rattrapent pas.

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
