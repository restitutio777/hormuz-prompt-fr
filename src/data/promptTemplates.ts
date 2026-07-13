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
Mise à jour : 12 juillet 2026 — 133e jour de guerre. Depuis le \
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

Trêve à nouveau rompue. Le mémorandum américano-iranien signé en \
juin après la médiation pakistanaise n'a pas tenu un mois. Le \
7 juillet, l'Iran a frappé le méthanier qatari Al-Rekayyat près \
d'Hormuz ; en représailles, les États-Unis ont retiré à l'Iran sa \
licence pétrolière. Depuis le 7 juillet, plus aucun grand navire \
(plus de 10 000 tpl) avec AIS allumé n'a emprunté la route omanaise \
sécurisée par les États-Unis — le trafic est pratiquement à l'arrêt, \
au moins 2 navires sont passés « dark » (AIS éteint). 70 % des \
Américains veulent la fin de la guerre (Economist/YouGov). Bilan \
total du conflit : plusieurs milliers de morts, millions de \
déplacés ; l'Iran chiffre ses pertes à 270 milliards $.

Deuxième front — Russie (nouveau). Du 6 au 11 juillet, l'Ukraine a \
frappé ~50 navires de la « flotte fantôme » russe en mer d'Azov, \
dont ~42 pétroliers — la plus grande campagne de ce type depuis le \
début de la guerre. S'y ajoutent des frappes sur raffineries et \
dépôts : Syzran (Samara), la raffinerie de Moscou (qui alimentait \
40 % de la région moscovite), les dépôts de Tver et Stavropol, une \
station de pompage au Bachkortostan, le terminal de chargement de \
Rostov. ~25 % de la capacité de raffinage russe est à l'arrêt ou \
réduite. Le 8 juillet, Moscou a interdit les exportations de diesel \
jusqu'au 31 juillet et annonce ses propres importations de carburant \
(vice-premier ministre Novak). Rationnement dans plus de 20 régions \
russes : 20 litres par véhicule, remplissage de jerricans interdit, \
files d'attente de plusieurs heures. La Russie représente ~11 % du \
diesel mondial ; ses exportations maritimes de diesel ont chuté de \
39 % en juin (~1,8 Mt) et ne sont plus que d'environ 187 000 b/j du \
1er au 8 juillet, contre 535 000 b/j en juillet 2025 (Kpler). Le \
détroit de Kertch et le canal Don-Azov sont fermés depuis le \
10 juillet à 18h10 → ~25 % des exportations russes de blé touchées ; \
le blé Euronext a bondi jusqu'à +4 %, au plus haut depuis six \
semaines.

Détroit d'Hormuz — largement bloqué depuis le 28 février \
(normalement ~25-27 % du pétrole maritime mondial, ~20 % du GNL). \
Deux routes s'étaient établies : un corridor à péage contrôlé par \
les Gardiens de la révolution (qui attaquent les navires non \
autorisés) et une route le long de la côte omanaise sécurisée par \
les États-Unis — mais depuis la frappe sur l'Al-Rekayyat le \
7 juillet, celle-ci est pratiquement morte : plus aucun grand navire \
avec AIS allumé n'est passé. ADNOC \
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

Pétrole. Brent ~72-76 $/baril du 10 au 12 juillet, loin du pic de \
guerre à plus de 180 $ fin avril — le brut est pour l'instant \
abondant et relativement bon marché. L'accalmie est trompeuse : TD \
Securities anticipe +10 à 15 $ au cours de l'été à mesure que les \
stocks se vident. Les pays de l'AIE ont libéré 400 millions de \
barils (la plus grande libération de l'histoire) ; la réserve \
stratégique américaine est à son plus bas depuis Reagan. Le \
ministère américain de la Justice enquête toujours sur 2,6 \
milliards $ de paris baissiers placés avant des annonces de Trump — \
soupçon de délit d'initié.

Diesel — le vrai cœur du choc. Ce n'est pas le pétrole qui manque, \
c'est la capacité de raffinage. Le Moyen-Orient ET la Russie font \
défaut en même temps — et tous deux alimentent le même pool de \
diesel. La marge de raffinage européenne du diesel (crack spread) a \
bondi à un record de 60,17 $/baril après l'interdiction russe \
d'exporter ; le diesel monte par rapport au brut bien au-delà des \
normes saisonnières. La France importe normalement 30 à 40 % de son \
diesel du Moyen-Orient ; la Russie représentait ~11 % du diesel \
mondial. Le diesel est le sang de la logistique : le surcoût se \
répercute via le fret sur tous les prix en rayon — même pour les \
ménages sans véhicule diesel. Les mesures de soutien expirent : la \
baisse temporaire des taxes allemandes s'est terminée mi-juin. Le \
rationnement slovène (depuis le 23 mars : 50 L/jour particuliers) \
reste en vigueur.

Gaz. Le TTF néerlandais est à ~50 €/MWh. Les stocks européens \
— 31 milliards de m³ — sont au plus bas depuis 2018 (~28 % des \
110 milliards de m³ de capacité) ; le GNL qatari manque pour une \
durée indéterminée (Ras Laffan : 3-5 ans de réparation) ; l'UE \
envisage d'abaisser l'objectif de remplissage de 90 % à 80 %. La \
saison d'injection bat son plein — chaque perturbation compte. \
L'IEEFA estime que les prix de gros de l'électricité pourraient \
rester 60 % au-dessus du niveau d'avant-guerre (~+120 €/an par \
ménage).

Kérosène. Le commissaire européen aux Transports Tzitzikostas \
assure qu'il n'y a PAS de pénurie imminente de kérosène en Europe — \
mais les surcoûts dépassent 2 milliards $ pour les compagnies, et \
routes comme tarifs restent sous pression. KLM suspend Riyad et \
Dammam jusqu'au 26 juillet inclus ; surcharges carburant record \
(ANA/JAL) ; le Royaume-Uni s'attend à une flambée estivale, les \
raffineries américaines redirigeant leur production vers le marché \
intérieur. Le rationnement italien dans sept aéroports reste en \
vigueur. IAG (maison-mère British Airways) prévoit 9 milliards € de \
coûts carburant en 2026 (+2 milliards € vs 2025) ; Bruxelles oblige \
les compagnies à indemniser les annulations (250 à 600 € + hôtel + \
remboursement).

Alimentation. Indice FAO des prix alimentaires mai 2026 : 130,8 \
points — globalement stable (−0,2 % MoM, +2,9 % YoY), mais les \
céréales accélèrent : +2,6 % sur le mois, blé +3,4 % MoM / +7,8 % \
YoY (blé d'hiver américain +28 % YoY, pires conditions de culture \
depuis des décennies), sucre +7,5 %. La FAO prévoit une récolte \
céréalière mondiale 2026/27 en baisse de 2 % (2 982 Mt) et avertit : \
l'incertitude sur Hormuz continue de réduire l'usage d'engrais. Avec \
la fermeture de Kertch depuis le 10 juillet, environ un quart des \
exportations russes de blé est en outre bloqué. Le \
Golfe persique représente 30-35 % des exportations mondiales d'urée \
et 20-30 % d'ammoniac. Transmission engrais → blé → farine → pain : \
4-6 mois ; le choc alimentaire frappe pleinement à l'automne, quelle \
que soit l'évolution du conflit.

Chauffage — la fenêtre se referme maintenant. Pellets, bois, fioul : \
délais 6-8 semaines, prix en hausse mensuelle. Qui ne commande pas \
maintenant n'a plus de marge avant l'hiver. Les ménages au gaz \
devraient évaluer des alternatives maintenant, pas en octobre.

Allemagne / France. Selon Reuters et Wirtschaftswoche, les services \
de sécurité allemands ont déjoué plus d'une douzaine de plans \
d'attentats commandités par Téhéran depuis le début de la guerre. \
Les industries énergétivores (chimie, verre, acier) souffrent de la \
pression sur les prix du carburant et de l'électricité des deux \
côtés du Rhin.

Inflation. Zone euro en mai : 3,2 % officiellement (3,0 % en avril) ; \
États-Unis au-dessus de 4 % pour la première fois depuis 2023. La \
part énergie/alimentation frappe les ménages bien plus durement que \
le chiffre officiel ; en cas de rupture du cessez-le-feu et de crise \
longue, les scénarios vont jusqu'à 12,5 %. Ray Dalio parle d'une \
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
