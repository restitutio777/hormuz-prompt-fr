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
Mise à jour : 19 mai 2026. Depuis le 28 février, les États-Unis et \
Israël ont mené une guerre ouverte contre l'Iran et ses alliés \
(Hezbollah, Houthis, milices irakiennes PMF). La campagne \
américano-israélienne « Operation Epic Fury » s'est officiellement \
achevée le 5 mai après deux mois et environ 25 milliards $ de coûts \
américains. La guerre a commencé par ~900 frappes coordonnées en \
12 heures contre des sites militaires, nucléaires et \
gouvernementaux iraniens. Le Guide suprême Ali Khamenei a été tué dans \
les premières frappes ; son fils Mojtaba Khamenei — jugé plus dur et \
plus répressif — lui a succédé. Téhéran a riposté par des centaines de \
missiles et drones sur Israël, les bases américaines et les États du \
Golfe, mais a perdu l'essentiel de son arsenal conventionnel, de sa \
défense aérienne et de ses capacités nucléaires.

Cessez-le-feu depuis le 7-8 avril, prolongé par Trump le 21 avril \
(« jusqu'à la conclusion des négociations »). Le 2 mai, Téhéran a \
rejeté une proposition de paix américaine (CNN) ; le 4 mai, Trump a \
lancé « Operation Project Freedom » — escorte des navires marchands \
dans le détroit d'Hormuz — et l'a suspendue dès le 5-6 mai, invoquant \
« de grands progrès » et la médiation pakistanaise. Les deux camps \
négocient actuellement un mémorandum d'une page : fin du conflit \
plus phase de 30 jours pour traiter les demandes nucléaires, le \
dégel des avoirs iraniens et la sécurité dans le détroit. Phase ni \
gagnée ni rompue. Bilan total du conflit (Iran, Liban, Israël, États \
du Golfe) : plusieurs milliers de morts, millions de déplacés.

Détroit d'Hormuz — effectivement fermé depuis ~12 semaines. L'Iran a \
officiellement déclaré le détroit ouvert (Ministre Araghchi, \
17 avril) ; en pratique presque personne ne passe. Renseignement \
américain : l'Iran a posé plus de 20 mines dans et autour du détroit \
— Téhéran a lui-même perdu la trace de leurs positions et ne peut pas \
rouvrir le passage même s'il le voulait (NYT). Le 11 mai, plus de \
600 pétroliers sont bloqués à l'intérieur du Golfe persique, 240+ \
attendent à l'extérieur (PDG de Saudi Aramco). Malgré les \
négociations, l'escalade continue : les 13-14 mai, l'Iran a saisi le \
cargo « Haji Ali » (pavillon indien, coulé) et le navire de recherche \
« Hui Chuan ». Le blocus naval américain contre les ports iraniens \
tient ; plusieurs pétroliers iraniens (« Dorena », « Sevin », \
« Derya ») ont été interceptés dans le monde.

Coalition de déminage. Le 12 mai, le Royaume-Uni et la France ont \
réuni les ministres de la Défense de 38 nations et annoncé une \
mission militaire multinationale indépendante pour rouvrir le \
détroit. L'Italie envoie quatre navires (deux chasseurs de mines, un \
escorteur, un logistique) au départ de La Spezia, ~4 semaines de \
transit — arrivée fin mai. Le Royaume-Uni, la France, la Belgique et \
les Pays-Bas ont promis des navires ; l'Allemagne se tient prête mais \
exige un mandat ONU et un vote du Bundestag. Estimation du Pentagone : \
6 mois de déminage — l'Italie et d'autres pensent qu'il faudra bien \
plus ; référence 1991 : 2 ans pour 1 300 mines irakiennes.

Front Liban — la guerre Hezbollah-Israël s'est déroulée en parallèle. \
Frappes israéliennes intensives sur le sud-Liban ; 152+ attaques sur \
structures de santé depuis le 2 mars (selon l'OMS). Plus de 3 \
millions de Libanais dépendent de l'aide humanitaire — plus de la \
moitié de la population.

Pétrole. Brent ~ 102 $/baril le 18 mai, sommet de séance au-dessus de \
111 $ ; pic de mars à 126 $ (Dubai 166 $). Avant la guerre : 70 $. \
L'AIE qualifie la situation de « plus grande perturbation \
d'approvisionnement de l'histoire du marché pétrolier mondial ». Le \
ministère américain de la Justice enquête sur 2,6 milliards $ de \
paris sur la baisse du pétrole effectués peu avant des annonces de \
Trump pendant le conflit (ABC, NBC) — soupçon de délit d'initié.

Diesel et carburants. La France importe normalement 30 à 40 % de son \
diesel du Moyen-Orient. La Slovénie a été le premier pays UE à \
imposer un rationnement formel le 23 mars (50 L/jour particuliers, \
200 L/jour entreprises). En France, 18 % des stations étaient à sec \
au 12 avril ; l'Italie a un rationnement kérosène dans sept aéroports \
depuis le 12 avril. L'Allemagne a baissé les taxes sur l'essence et \
le diesel pour deux mois le 13 avril. Au Royaume-Uni, le ministre de \
l'Énergie a écarté un rationnement formel le 6 mai — les pénuries \
physiques continuent malgré tout. Goldman Sachs : réserves danoises \
tombées de 47 jours à près de zéro, Royaume-Uni de 33 jours à près de \
zéro.

Gaz. Les importations européennes de GNL russe (Yamal) ont atteint \
un record de ~3 milliards £ entre janvier et avril 2026. Le \
benchmark néerlandais TTF a culminé au-dessus de 60 €/MWh à \
mi-mars, redescendu à ~48 €/MWh. Stocks de gaz européens à ~30 % \
après l'hiver rude 2025/26. Les installations qatariennes de Ras \
Laffan sont endommagées : 3-5 ans de réparation (3 fabricants de \
turbines au monde, carnets pleins).

Kérosène. L'Europe a perdu 20-30 % de ses importations de kérosène \
du Golfe persique ; exportations mondiales de kérosène en baisse de \
30-50 %. L'Europe ne peut produire au maximum que 70 % de ses propres \
besoins (décennies de fermetures de raffineries). Lufthansa, easyJet \
et KLM suppriment des vols ; selon Fortune, les stocks européens de \
kérosène passeront en juin sous le seuil critique des 23 jours. \
L'autorisation d'urgence de l'AESA pour le Jet A américain reste en \
vigueur. IAG (maison-mère British Airways) prévoit 9 milliards € de \
coûts carburant en 2026 (+2 milliards € vs 2025) ; Bruxelles oblige \
les compagnies à indemniser les annulations (250 à 600 € + hôtel + \
remboursement).

Alimentation. Indice FAO des prix alimentaires avril 2026 : 130,7 \
points, troisième hausse mensuelle consécutive (+1,6 % MoM, +2 % \
YoY). Huiles végétales, viande et céréales en hausse ; sucre et \
produits laitiers en baisse. La FAO révise la récolte mondiale de \
blé 2026 à 817 Mt (-2 % sur un an) — les agriculteurs se reportent \
sur des cultures moins gourmandes en engrais. Le Golfe persique \
représente 30-35 % des exportations mondiales d'urée et 20-30 % \
d'ammoniac ; les usines d'engrais en Inde, Bangladesh et Pakistan \
ferment faute de gaz qatari. Transmission engrais → blé → farine → \
pain : 4-6 mois ; le choc alimentaire frappe pleinement à l'automne. \
La FAO maintient son avertissement : au-delà de 3 mois de blocage, \
crise alimentaire mondiale probable. On en est à ~12 semaines.

Chauffage — la fenêtre se referme. Pellets, bois, fioul : délais 6-8 \
semaines d'avril à août, prix en hausse mensuelle. Qui commande après \
juillet n'a plus de marge avant l'hiver. Les ménages au gaz devraient \
évaluer des alternatives maintenant, pas en octobre.

Allemagne / France. Selon Reuters et Wirtschaftswoche, les services \
de sécurité allemands ont déjoué plus d'une douzaine de plans \
d'attentats commandités par Téhéran depuis le début de la guerre. Les \
Iraniens, eux, sont coupés du réseau internet mondial depuis plus de \
80 jours consécutifs. Les industries énergétivores (chimie, verre, \
acier) souffrent de la pression sur les prix du carburant et de \
l'électricité des deux côtés du Rhin.

Inflation prévisionnelle : 5,5 % (mémorandum signé et tenu) à 12,5 % \
(rupture et crise longue). Ray Dalio parle d'une dynamique de « guerre \
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
