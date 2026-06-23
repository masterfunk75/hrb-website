import type {
  Poi,
  EventCategory,
  Address,
  TransportMode,
} from '@/types/neighborhood';

// The 12 places on the neighbourhood map (English, decimal points).
export const poisEn: Poi[] = [
  { num: 1, label: 'The hotel — 32 rue des Longs Prés' },
  {
    num: 2,
    label: 'Marcel Sembat metro (line 9)',
    distance: '400 m / 5-min walk',
  },
  {
    num: 3,
    label: 'Issy-Val de Seine (RER C)',
    distance: '530 m / 7-min walk',
  },
  {
    num: 4,
    label: 'Bois de Boulogne (south entrance)',
    distance: 'Adjacent / 5-10-min walk',
  },
  { num: 5, label: 'Parc des Princes', distance: '1.2 km / 18-min walk' },
  { num: 6, label: 'Roland-Garros', distance: '1.7 km / 25-min walk' },
  { num: 7, label: 'La Seine Musicale', distance: '1.4 km / 18-25-min walk' },
  { num: 8, label: 'Paris-Longchamp racecourse', distance: '3.3 km' },
  {
    num: 9,
    label: 'Carrefour Boulogne (head office)',
    distance: '700 m / 9-min walk',
  },
  {
    num: 10,
    label: 'Boulogne-Billancourt market',
    distance: 'to be confirmed',
  },
  { num: 11, label: 'Eiffel Tower', distance: '~5 km / 15 min by metro' },
  {
    num: 12,
    label: 'Paris La Défense Arena',
    distance: '7.2 km / 20 min by car',
  },
];

// The 4 event categories (text cards, no photos).
export const eventCategoriesEn: EventCategory[] = [
  {
    id: 'sport',
    title: 'Sport.',
    intro: 'Tennis, football, racing. The season never stops.',
    venues: [
      {
        name: 'Roland-Garros',
        description:
          'A Grand Slam tournament from late May to early June. Padel Major in September. 1.7 km, 25-min walk.',
      },
      {
        name: 'Parc des Princes',
        description:
          'PSG, in Ligue 1 and European competition. 1.2 km, 18-min walk.',
      },
      {
        name: 'Hippodrome Paris-Longchamp',
        description:
          "The Prix de l'Arc de Triomphe on the first weekend of October, and the whole season in between. 3.3 km.",
      },
      {
        name: 'Paris La Défense Arena',
        description:
          'Rolex Paris Masters from late October to early November. 7.2 km, 20 min by car.',
      },
    ],
  },
  {
    id: 'musique-culture',
    title: 'Music & culture.',
    intro: 'And before the match, a concert.',
    venues: [
      {
        name: 'La Seine Musicale',
        description:
          'Programming aimed at the international stage: opera, ballet, popular acts. 1.4 km, an 18-25-min walk along the Seine.',
      },
      {
        name: 'Paris La Défense Arena',
        description: 'Capacity 40,000. The big tours end here. 7.2 km.',
      },
      {
        name: 'Boulogne museums',
        description:
          'Musée Albert-Kahn (reopened in 2024), Musée des Années 30, Pavillon Renault. Cultural Paris without the queue. 10-15-min walk.',
      },
    ],
  },
  {
    id: 'salons-conventions',
    title: 'Trade shows & conventions.',
    intro: 'A little further out, the big trade shows.',
    venues: [
      {
        name: 'Paris Expo Porte de Versailles',
        description:
          'The Foire de Paris in late April, sector shows all year (the Agricultural Show, the Paris Motor Show in even years). 3 km, 25 min by transport.',
      },
      {
        name: 'La Défense, CNIT, Paris La Défense Arena',
        description: 'Business shows and corporate conventions. 7-12 km.',
      },
    ],
  },
  {
    id: 'plein-air',
    title: 'The outdoors.',
    intro: 'And in the middle, the Bois.',
    venues: [
      {
        name: 'Bois de Boulogne',
        description:
          '846 hectares at the end of the street. Running, cycling, paddleboarding on the Lac Inférieur, restaurants by the water. The Bagatelle rose garden in May-June. Adjacent, 5-10-min walk.',
      },
      {
        name: 'Banks of the Seine',
        description:
          'Cross the Pont de Sèvres for an unbroken walk all the way to the Île Seguin.',
      },
    ],
  },
];

// The 5 favourite addresses (names and exact addresses to be confirmed by the owner).
export const addressesEn: Address[] = [
  {
    id: 'boulangerie',
    category: 'Bakery & patisserie',
    pitch:
      "Right next door. Pastries you can smell from the hallway before six, decent sandwiches to take away, and a nine-o'clock coffee that saves the morning. You finish your errands here on the way back, you start the day here when you leave early.",
    photoLabel: 'Bakery & patisserie',
  },
  {
    id: 'bistrot',
    category: 'Lunch bistro',
    pitch:
      "Daily specials on the board, a set menu at a price that won't make you wince, a terrace when it's sunny. You lunch here with a client on Tuesday, you dine here as a couple on Friday without booking three days ahead.",
    photoLabel: 'Lunch bistro',
  },
  {
    id: 'restaurant',
    category: 'Evening restaurant',
    pitch:
      "More refined, open late, a menu that changes. The right spot for dinner after the match or after La Seine Musicale, when you're hungry and don't fancy heading back into Paris.",
    photoLabel: 'Evening restaurant',
  },
  {
    id: 'cafe',
    category: 'Morning café',
    pitch:
      "Specialty coffee for the demanding, a croissant for everyone else. Three minutes' walk, tucked into a street where people actually live. Where you surface after a night that ran longer than planned.",
    photoLabel: 'Morning café',
  },
  {
    id: 'cave',
    category: 'Wine shop / deli',
    pitch:
      "A bottle for the studio, a cheese to go with it, a few words from a wine merchant who knows what he's talking about. For the evenings when you don't feel like going out.",
    photoLabel: 'Wine shop / deli',
  },
];

// Getting here & getting around (7 modes). Source lot-2 v2.
export const transportModesEn: TransportMode[] = [
  {
    id: 'metro',
    title: 'By metro',
    lead: "Marcel Sembat, line 9. A four-minute walk, and you're on the same line as the Champs-Élysées and Châtelet.",
    details: [
      'Towards Mairie de Montreuil: Châtelet in 25 min, République in 30 min.',
      'Towards Pont de Sèvres (terminus): 1 stop.',
      'First metro 5:30 am. Last metro 0:40 am (1:40 am Fri/Sat).',
    ],
  },
  {
    id: 'rer',
    title: 'By RER',
    lead: 'Issy-Val de Seine, RER C. A seven-minute walk, and the Left Bank begins.',
    details: [
      "Eiffel Tower (Champ-de-Mars) in 12 min. Saint-Michel in 17 min. The fast option when you're headed for southern Paris.",
    ],
  },
  {
    id: 'aeroports',
    title: 'From the airports',
    lead: 'Three airports, three well-known routes.',
    details: [
      'CDG → Boulogne: RER B then line 9. About 1 h 05.',
      'Orly → Boulogne: tram T7 or Orlyval + RER C to Issy-Val de Seine. About 50 min.',
      'Beauvais → Boulogne: bus to Porte Maillot, then line 1 + line 9 at Franklin D. Roosevelt. About 1 h 30.',
    ],
  },
  {
    id: 'gares',
    title: 'From the Paris stations',
    lead: 'All six Paris stations, 25-35 minutes away.',
    details: [
      "Gare du Nord / Gare de l'Est: line 9 direct from Strasbourg-Saint-Denis. 35 min.",
      'Saint-Lazare: line 13 then line 9. 30 min.',
      'Gare de Lyon / Austerlitz: line 14 then line 9 at Saint-Lazare. 30-35 min.',
      'Montparnasse: line 6 or 13, then line 9. 25 min.',
    ],
  },
  {
    id: 'voiture',
    title: 'By car',
    lead: 'For those arriving by car.',
    details: [
      'Nearby parking on request — 180 m from the hotel, €15 per night, to be booked at reception when you reserve.',
      'Ring road: exit Porte de Saint-Cloud or Porte de Sèvres (5 min).',
      'Residential parking: paid zone during the day, free at night and on Sundays.',
    ],
  },
  {
    id: 'electrique',
    title: 'By electric vehicle',
    lead: 'A charging point 200 m from the hotel. (Operator to be confirmed at reception.)',
    details: [],
  },
  {
    id: 'velo',
    title: 'By bike',
    lead: "Vélib' right nearby (Marcel Sembat, Pont de Sèvres). Cycle paths along the Seine and in the Bois.",
    details: [],
  },
];
