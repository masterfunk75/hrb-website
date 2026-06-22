import type { Poi, EventCategory } from '@/types/neighborhood';

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
