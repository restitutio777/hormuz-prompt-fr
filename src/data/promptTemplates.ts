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
Mise à jour : 31 octobre 2026 — 246e jour de guerre. Depuis le 28 \
février, les États-Unis et Israël mènent une guerre ouverte contre \
l'Iran et ses alliés (Hezbollah, Houthis, milices irakiennes). Le \
Guide suprême Ali Khamenei a été tué dans les premières frappes ; son \
fils Mojtaba lui a succédé. Le mémorandum négocié en juin par le \
Pakistan et le Qatar s'est effondré en juillet ; depuis, vagues de \
frappes et offres de négociation alternent.

NÉGOCIATIONS BLOQUÉES, NOUVELLES FRAPPES POSSIBLES APRÈS LE 3 \
NOVEMBRE. L'Iran propose de rouvrir Hormuz en sept jours si les \
États-Unis lèvent le blocus des ports iraniens, suspendent les \
sanctions, dégèlent les avoirs iraniens et garantissent l'absence de \
nouvelles frappes. Washington exige d'abord une réduction « \
significative » de l'enrichissement d'uranium. Le désaccord porte sur \
l'ordre des concessions, pas sur leur contenu. Le 25 octobre, Trump \
s'est demandé publiquement s'il allait « conclure un accord ou les \
achever » ; il avait dit qu'aucune frappe n'aurait lieu avant les \
élections de mi-mandat du 3 novembre, et le 29 octobre il s'est fait \
présenter les options militaires. Pour novembre, une nouvelle vague de \
frappes est plus probable qu'une réouverture, avec le risque de \
représailles iraniennes contre les installations énergétiques du \
Golfe, comme en juillet.

Hormuz : 245e jour de fermeture. Octobre a été le pire mois de la \
guerre, avec au moins 35 attaques contre des navires. Fin octobre, les \
Gardiens de la révolution ont annoncé plusieurs pétroliers en feu sur \
une route sud « non autorisée » au large d'Oman ; l'agence britannique \
UKMTO confirme des engins explosifs posés sur la coque d'un pétrolier, \
mais aucune frappe de mine. Le discours officiel et les mesures \
divergent : le commandement militaire américain déclare les routes \
principales déminées ; UKMTO compte 277 passages dans la semaine au 28 \
octobre, environ 70 % de moins qu'avant la guerre ; les traceurs AIS \
voient en moyenne 8 navires marchands par jour au lieu de 85. Le brut \
passe davantage que ne le suggère le comptage des navires, car les \
grands pétroliers naviguent sous protection américaine, transpondeur \
éteint (estimations : 60 à 85 % des volumes d'avant-guerre). Ce qui ne \
passe presque pas : gazole, GNL, engrais et conteneurs — précisément \
ce qui arrive chez les ménages. Le Qatar n'exporte presque plus de GNL \
à cause d'Hormuz, et deux trains de liquéfaction endommagés à Ras \
Laffan demandent trois à cinq ans de réparation.

Les contournements. L'oléoduc saoudien Est-Ouest, arrêté en septembre \
après des frappes de drones, a redémarré le 22 septembre ; début \
octobre, Riyad annonçait 5,8 millions de barils/jour (chiffre non \
confirmé de façon indépendante). Les Houthis tiennent depuis \
mi-septembre toute la côte yéménite de la mer Rouge, y compris l'île \
de Perim dans le détroit de Bab el-Mandeb, et ont revendiqué fin \
octobre des attaques contre des aéroports et des sites pétroliers \
saoudiens. La plupart des armateurs contournent toujours par le cap de \
Bonne-Espérance : 10 à 14 jours de plus pour tout ce qui est commandé.

Russie. Les frappes ukrainiennes de drones sur les raffineries \
continuent ; en juillet, le raffinage russe est tombé à son plus bas \
niveau depuis 2002. Le 31 octobre, Moscou a prolongé jusqu'au 31 \
janvier 2027 l'interdiction d'exporter du gazole pour les producteurs, \
avec des exemptions pour certains fournisseurs après un arrangement \
Trump–Poutine. Moscou prévoit 2,15 millions de tonnes d'exportations \
de gazole en novembre contre 0,51 million en octobre. Un soulagement, \
pas un remplacement.

Pétrole et gazole. Le Brent est fin octobre autour de 113 à 118 $ \
(~117,6 $ le 30 octobre), son plus haut depuis avril ; avant la \
guerre, il valait ~72 $. La marge de raffinage du gazole a reculé \
depuis son record de septembre (117,92 $ aux États-Unis le 16 \
septembre) à environ 84 $ contre Brent, mais reste trois fois et demie \
au-dessus de la normale. Les stocks de gazole de la zone \
Amsterdam–Rotterdam–Anvers sont environ 16 % sous la moyenne \
quinquennale. Le 30 octobre, onze pays de l'UE — dont la France et \
l'Allemagne, à l'initiative du ministre français Roland Lescure — ont \
décidé de libérer 20,5 millions de barils de gazole des réserves \
stratégiques d'ici fin janvier. Bruxelles ne prévoit « pas de pénurie \
physique » — mais en France, 9,3 % des stations manquaient de gazole \
le 27 octobre (le double du 22 octobre), et dans le Grand Est, 20 % \
des stations étaient à court d'essence ou de gazole le 28 octobre, les \
stations TotalEnergies étant les plus touchées. Le premier manque \
n'est pas la matière première, c'est la distribution : il frappe \
d'abord des stations et des régions précises.

Prix. En France, le gazole est à 2,352 €/L (moyenne de la semaine du \
26 octobre, Bulletin pétrolier de la Commission), environ 2,29 €/L en \
moyenne le 31 octobre ; le SP95 est à 2,181 €/L — le gazole est donc \
plus cher que l'essence, ce qui est inhabituel. Le fioul domestique \
coûte environ 1 900 € les 1 000 litres (1 891 € le 31 octobre chez \
FioulReduc, 1 952 € selon le bulletin européen de la semaine du 26 \
octobre). Comparaison : Belgique gazole 2,375 €/L ; Allemagne 2,289 \
€/L malgré une baisse de taxe d'environ 17 centimes depuis le 1er \
octobre, qui prend fin le 31 décembre. En Allemagne, le fioul a \
presque doublé en un an (175 € les 100 litres contre 91 €).

Gaz et électricité : pour la première fois, un record à la baisse et \
non plus « sous la norme ». Les stocks de gaz de l'UE sont remplis à \
74,6 % (21 octobre), contre 89,4 % en moyenne quinquennale — le plus \
bas pour cette date depuis le début des relevés en 2011 ; l'Allemagne \
est à environ 61 %, un record historique à l'entrée de l'hiver. Le TTF \
néerlandais dépasse 100 €/MWh depuis le 28 octobre (102,78 € le 30 \
octobre), +36 % en un mois, son plus haut niveau depuis près de quatre \
ans. Le réseau européen des gestionnaires ENTSOG prévient que les \
stocks pourraient tomber sous 30 % d'ici la fin de l'hiver si le GNL \
reste rare. Un analyste de Macquarie : l'Europe a besoin d'un « hiver \
plutôt doux » pour s'en sortir indemne. Formulé honnêtement : une \
rupture d'approvisionnement n'est pas le scénario probable, un hiver \
cher est certain. Ce que le ménage paiera pour se chauffer cet hiver \
apparaîtra dans la régularisation du printemps 2027 — augmenter ses \
mensualités de 20 à 30 % dès maintenant coûte moins cher qu'un rappel \
d'un seul coup.

Alimentation. L'indice FAO des prix alimentaires a progressé en \
septembre pour le troisième mois consécutif à 136,0 points, son plus \
haut depuis novembre 2022 ; céréales +5,1 %, sucre +6,1 %, blé et maïs \
au plus haut depuis plusieurs années. Le chiffre d'octobre sera publié \
le 6 novembre. Engrais : l'urée est retombée sous son niveau \
d'avant-guerre après le pic du printemps, mais le phosphate reste cher \
(+28 % depuis février), notamment parce que près de la moitié du \
soufre transite normalement par Hormuz. Le risque principal porte sur \
la récolte 2027 et sur les intrants que les agriculteurs achètent cet \
hiver.

LES GOUVERNEMENTS APPELLENT À FAIRE DES RÉSERVES : LE TOURNANT \
DISCRET. Le Royaume-Uni a lancé le 22 octobre une campagne de trois \
ans, « Be Ready » : chaque foyer doit pouvoir tenir 72 heures sans \
électricité, eau, téléphone ni internet — eau, nourriture sans cuisson \
ni réfrigération, lampe, radio, médicaments, batterie externe, argent \
liquide. En Normandie, la région a lancé le 27 octobre : « N'attendez \
pas l'urgence : préparez-vous dès maintenant ! » — trois jours de \
réserves dans un kit d'urgence. Newsweek recense le 29 octobre 33 \
États qui appellent leur population à constituer des réserves, dont 17 \
en Europe : 72 heures en France, au Royaume-Uni et aux Pays-Bas, une \
semaine en Suède et en Norvège, jusqu'à dix jours en Allemagne. La \
stratégie européenne de préparation (mars 2025) recommande au moins 72 \
heures d'autonomie. Pendant des années, faire des réserves passait \
pour une lubie ; aujourd'hui, les mêmes gouvernements recommandent \
eau, conserves, radio et liquide, explicitement sans menace précise. \
Les deux sont vrais : ces conseils sont raisonnables, et ils arrivent \
tard. Pour un ménage : qui a déjà des réserves n'a rien à rattraper ; \
qui n'a rien commence par 72 heures, puis élargit tranquillement. Les \
achats de panique sont la mauvaise réponse.

Chauffage : ce qu'il faut faire maintenant. Fioul : commander la \
fraction suivante dans les semaines qui viennent, mais toujours pas \
toute la cuve d'un coup. Qui n'a rien en cuve commande maintenant au \
moins jusqu'au printemps. Autour du 3 novembre : si le pétrole bondit \
après de nouvelles frappes, le fioul suit en quelques jours et le \
gazole en une à deux semaines. Ne pas rouler sous le demi-réservoir. \
Prévoir une source de chaleur de secours pour une coupure locale : \
vêtements chauds et couvertures pour tous, une pièce facile à \
chauffer. Jamais de chauffage d'appoint au gaz ou de barbecue à \
l'intérieur : dans les crises énergétiques, on meurt du monoxyde de \
carbone, pas du froid.

Délais et voyages. Avec le détour par le cap, les marchandises \
commandées arrivent 10 à 14 jours plus tard : électronique, pièces \
détachées, lunettes, pneus d'hiver, précurseurs de médicaments. Cela \
ne touche pas l'approvisionnement de base, mais tout ce qui se \
commande. Ce dont on aura besoin pour Noël ou l'hiver se commande \
maintenant. Renouveler tôt les ordonnances de traitement de fond. Les \
liaisons aériennes via le Golfe restent réduites et incertaines ; une \
correspondance dans le Golfe se prévoit avec de la marge.

Dimension humaine. Le plus grand risque n'est pas l'ignorance, mais la \
paralysie : la plupart connaissent la situation dans les grandes \
lignes et ne font rien, parce que la distraction est plus confortable \
que l'action. Une seule chose concrète accomplie (réservoir, réserve, \
traitement de fond, mensualité, conversation avec les voisins) vaut \
mieux que tout savoir sans agir. La dépendance aux chaînes \
d'approvisionnement est structurelle, pas un échec personnel ; \
personne ne peut s'en extraire seul dans une société fondée sur la \
division du travail. La réponse durable, c'est la préparation plus le \
lien local : trois foyers qui se coordonnent s'en sortent mieux qu'un \
foyer seul. Une seule conversation suffit à savoir qui a un poêle à \
bois, qui un groupe électrogène, qui une voiture, qui peut faire les \
courses pour qui, et qui aura besoin d'aide en cas de coupure (soins, \
concentrateur d'oxygène, chaîne du froid pour des médicaments).

Discours officiels et mesures. « Hormuz largement ouvert » face à 70 % \
de navires en moins ; « pas de pénurie physique » face aux pompes \
vides dans le Grand Est ; « approvisionnement garanti » face à des \
stocks de gaz au plus bas historique. Aucune de ces phrases n'est un \
mensonge, mais chacune décrit une autre partie du tableau. Pour un \
ménage, compte la partie qui arrive à la pompe et sur la facture de \
chauffage. L'histoire récente (Covid 2020, gaz 2022) montre que les \
recommandations peuvent vite devenir des obligations. Qui se prépare \
tôt choisit ; qui attend l'annonce officielle subit.

Liquidités. En cas de coupure de courant, paiement par carte et \
distributeurs tombent localement ; en cas de stress bancaire, des \
plafonds de retrait peuvent apparaître du jour au lendemain (Grèce \
2015). Une semaine de dépenses courantes en liquide à la maison est \
raisonnable — le Royaume-Uni cite désormais explicitement l'argent \
liquide dans sa liste officielle.

Les bonnes nouvelles comptent aussi : l'oléoduc Est-Ouest fonctionne \
de nouveau, le Rhin est redevenu navigable après son record historique \
de −6 cm à Kaub le 1er octobre, l'urée est moins chère. Un \
effondrement n'est pas le scénario. Un hiver cher avec des pénuries \
locales, si.`;

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
  3. COURT TERME (d'ici fin novembre) : de nouvelles frappes \
américaines sont possibles après les élections du 3 novembre ; une \
flambée du pétrole se répercuterait sur le fioul en quelques jours. Le \
gazole manque dans la distribution (France : 9,3 % des stations sans \
gazole le 27 octobre, Grand Est 20 %). Fioul : la fraction suivante \
maintenant, pas toute la cuve. Réservoir jamais sous la moitié, \
mensualités d'énergie, commandes à long acheminement (10-14 jours de \
plus par le cap), traitements de fond, réserve de base de 72 heures.
  4. MOYEN TERME (décembre à mars) : l'hiver. Stocks de gaz au plus \
bas historique (UE 74,6 %, Allemagne ~61 %), gaz au-dessus de 100 \
€/MWh, l'Europe parie sur un hiver doux. Interdiction russe d'exporter \
du gazole jusqu'au 31 janvier 2027, réserves stratégiques libérées \
jusqu'à fin janvier. Régularisation brutale au printemps 2027. Élargir \
tranquillement la réserve au-delà de 72 heures.
  5. LONG TERME (2027 et au-delà) : même une réouverture d'Hormuz ne \
remet pas les compteurs à zéro. Les trains de GNL endommagés au Qatar \
demandent trois à cinq ans, les stocks de gaz ne reviendront pas à la \
normale avant l'hiver 2027/28. La récolte 2027 portera le coût du \
phosphate cher. L'étiage du Rhin n'est pas un accident : −6 cm à Kaub \
en 2026 après 2018 et 2022 — mieux vaut remplir la cuve au printemps. \
Les décisions structurelles (chauffage, isolation, véhicule, habitude \
de stock) se calculent avec un gaz au-dessus de 100 €/MWh, pas avec \
les prix de 2025.

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
