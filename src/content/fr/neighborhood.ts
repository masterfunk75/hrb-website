import type { Poi, EventCategory, Address } from '@/types/neighborhood';

// Les 12 lieux de la carte du quartier (distances vérifiées, source lot-2 v2).
export const poisFr: Poi[] = [
  { num: 1, label: "L'hôtel — 32 rue des Longs Prés" },
  {
    num: 2,
    label: 'Métro Marcel Sembat (ligne 9)',
    distance: '400 m / 5 min à pied',
  },
  {
    num: 3,
    label: 'RER C Issy-Val de Seine',
    distance: '530 m / 7 min à pied',
  },
  {
    num: 4,
    label: 'Bois de Boulogne (entrée Sud)',
    distance: 'Limitrophe / 5-10 min à pied',
  },
  { num: 5, label: 'Parc des Princes', distance: '1,2 km / 18 min à pied' },
  { num: 6, label: 'Roland-Garros', distance: '1,7 km / 25 min à pied' },
  { num: 7, label: 'La Seine Musicale', distance: '1,4 km / 18-25 min à pied' },
  { num: 8, label: 'Hippodrome Paris-Longchamp', distance: '3,3 km' },
  {
    num: 9,
    label: 'Carrefour Boulogne (siège)',
    distance: '700 m / 9 min à pied',
  },
  { num: 10, label: 'Marché Boulogne-Billancourt', distance: 'à préciser' },
  { num: 11, label: 'Tour Eiffel', distance: '~5 km / 15 min en métro' },
  {
    num: 12,
    label: 'Paris La Défense Arena',
    distance: '7,2 km / 20 min en voiture',
  },
];

// Les 4 catégories d'événements (cards texte, sans photo).
export const eventCategoriesFr: EventCategory[] = [
  {
    id: 'sport',
    title: 'Sport.',
    intro: "Tennis, foot, courses. La saison ne s'arrête jamais.",
    venues: [
      {
        name: 'Roland-Garros',
        description:
          'Tournoi du Grand Chelem fin mai - début juin. Padel Major en septembre. 1,7 km, 25 min à pied.',
      },
      {
        name: 'Parc des Princes',
        description:
          "Le PSG, en Ligue 1 et en Coupe d'Europe. 1,2 km, 18 min à pied.",
      },
      {
        name: 'Hippodrome Paris-Longchamp',
        description:
          "Le Prix de l'Arc de Triomphe le premier weekend d'octobre, et la saison entière entre. 3,3 km.",
      },
      {
        name: 'Paris La Défense Arena',
        description:
          'Rolex Paris Masters fin octobre - début novembre. 7,2 km, 20 min en voiture.',
      },
    ],
  },
  {
    id: 'musique-culture',
    title: 'Musique et culture.',
    intro: 'Et avant le match, un concert.',
    venues: [
      {
        name: 'La Seine Musicale',
        description:
          'Programmation tournée vers le rang international : opéra, ballet, scènes populaires. 1,4 km, 18-25 min à pied le long de la Seine.',
      },
      {
        name: 'Paris La Défense Arena',
        description:
          'Capacité 40 000. Les grandes tournées finissent ici. 7,2 km.',
      },
      {
        name: 'Musées de Boulogne',
        description:
          'Musée Albert-Kahn (rouvert en 2024), Musée des Années 30, Pavillon Renault. Le Paris culturel sans la file. 10-15 min à pied.',
      },
    ],
  },
  {
    id: 'salons-conventions',
    title: 'Salons et conventions.',
    intro: 'Un peu plus loin, les grands salons.',
    venues: [
      {
        name: 'Paris Expo Porte de Versailles',
        description:
          "Foire de Paris fin avril, salons sectoriels toute l'année (Salon de l'Agriculture, Mondial de l'Auto en année paire). 3 km, 25 min en transports.",
      },
      {
        name: 'La Défense, CNIT, Paris La Défense Arena',
        description: "Salons d'affaires et conventions corporate. 7-12 km.",
      },
    ],
  },
  {
    id: 'plein-air',
    title: 'Plein air.',
    intro: 'Et au milieu, le Bois.',
    venues: [
      {
        name: 'Bois de Boulogne',
        description:
          "846 hectares en bas de la rue. Footing, vélo, paddle au Lac Inférieur, restaurants au bord de l'eau. Roseraie de Bagatelle en mai-juin. Limitrophe, 5-10 min à pied.",
      },
      {
        name: 'Berges de Seine',
        description:
          "En traversant le Pont de Sèvres, promenade continue jusqu'à l'Île Seguin.",
      },
    ],
  },
];

// Les 5 « bonnes adresses » (noms et adresses exacts à confirmer par le propriétaire).
export const addressesFr: Address[] = [
  {
    id: 'boulangerie',
    category: 'Boulangerie-pâtisserie',
    pitch:
      "La porte d'à côté. Viennoiseries qui sentent depuis le couloir avant six heures, sandwichs corrects à emporter, et un café à neuf heures qui sauve la matinée. On finit ses courses ici en rentrant, on commence la journée ici quand on part tôt.",
    photoLabel: 'Boulangerie-pâtisserie',
  },
  {
    id: 'bistrot',
    category: 'Bistrot du midi',
    pitch:
      'Ardoise du jour, formule à un prix qui ne fait pas grimacer, terrasse quand il fait beau. On y déjeune avec un client le mardi, on y dîne en duo le vendredi sans réserver trois jours avant.',
    photoLabel: 'Bistrot du midi',
  },
  {
    id: 'restaurant',
    category: 'Restaurant du soir',
    pitch:
      "Plus travaillé, ouvert tard, carte qui change. La bonne adresse pour le dîner d'après-match ou la sortie de la Seine Musicale, quand on a faim et qu'on n'a pas envie de redescendre dans Paris.",
    photoLabel: 'Restaurant du soir',
  },
  {
    id: 'cafe',
    category: 'Café du matin',
    pitch:
      "Café de spécialité pour les exigeants, croissant pour les autres. Trois minutes à pied, posé dans une rue où on vit. Là où on émerge après une nuit qui s'est étirée plus que prévu.",
    photoLabel: 'Café du matin',
  },
  {
    id: 'cave',
    category: 'Cave / épicerie fine',
    pitch:
      "Une bouteille pour rentrer en studio, un fromage pour aller avec, deux mots du caviste qui sait de quoi il parle. Pour les soirs où on n'a pas envie de sortir.",
    photoLabel: 'Cave / épicerie fine',
  },
];
