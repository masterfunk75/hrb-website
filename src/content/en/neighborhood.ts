import type { Poi, EventCategory } from '@/types/neighborhood';

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
