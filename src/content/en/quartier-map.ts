import type { QuartierMapData } from '@/types/quartier-map';

// EN content for the interactive neighbourhood map. Same structure/order as FR
// (place names kept in French where they are proper nouns).
export const quartierMapEn: QuartierMapData = {
  pois: [
    { key: 'longchamp', label: 'Longchamp Racecourse' },
    { key: 'roland-garros', label: 'Roland-Garros' },
    { key: 'parc-princes', label: 'Parc des Princes' },
    { key: 'metro', label: 'Marcel Sembat metro — Line 9' },
    { key: 'paris-expo', label: 'Paris Expo Porte de Versailles' },
  ],
  categories: [
    {
      id: 'transports',
      label: 'Transport',
      items: [
        {
          name: 'Marcel Sembat metro — Line 9',
          dist: '400 m · 5 min',
          poi: 'metro',
        },
        { name: 'RER C Issy–Val de Seine', dist: '530 m · 7 min' },
        { name: 'EV charging point', dist: '200 m' },
        { name: 'Parking on request', dist: '180 m · €15/night' },
        { name: 'Vélib’ stations', dist: 'nearby' },
      ],
    },
    {
      id: 'sites',
      label: 'Sights & culture',
      items: [
        { name: 'Bois de Boulogne', dist: 'adjacent · 5 min' },
        { name: 'Boulogne-Billancourt market', dist: 'av. Général-Leclerc' },
        { name: 'Albert-Kahn Museum', dist: '1.5 km · 18 min' },
        { name: 'Eiffel Tower', dist: '15 min by metro' },
      ],
    },
    {
      id: 'business',
      label: 'Business hubs',
      items: [
        { name: 'Carrefour Boulogne (HQ)', dist: '700 m · 9 min' },
        { name: 'Renault Boulogne', dist: '1 km · 12 min' },
        { name: 'TF1', dist: '1.5 km · 5 min by metro' },
        { name: 'La Défense', dist: '7 km · 12 min by metro' },
        { name: 'Issy-les-Moulineaux', dist: '2 km · 5 min by RER' },
      ],
    },
    {
      id: 'events',
      label: 'Events',
      items: [
        {
          name: 'Roland-Garros',
          dist: '1.7 km · 25 min',
          poi: 'roland-garros',
        },
        {
          name: 'Parc des Princes',
          dist: '1.2 km · 18 min',
          poi: 'parc-princes',
        },
        { name: 'La Seine Musicale', dist: '1.4 km · 20 min' },
        {
          name: 'Longchamp Racecourse',
          dist: '3 km · 7 min by car',
          poi: 'longchamp',
        },
        {
          name: 'Paris Expo Porte de Versailles',
          dist: '3 km · 25 min',
          poi: 'paris-expo',
        },
        { name: 'Paris La Défense Arena', dist: '7.2 km · 20 min by car' },
      ],
    },
  ],
};
