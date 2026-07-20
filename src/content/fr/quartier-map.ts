import type { QuartierMapData } from '@/types/quartier-map';

// Contenu FR de la carte interactive — repris tel quel de la maquette V2.
// Les positions des marqueurs (left/top en %) vivent dans le composant.
export const quartierMapFr: QuartierMapData = {
  pois: [
    { key: 'longchamp', label: 'Hippodrome de Longchamp' },
    { key: 'roland-garros', label: 'Roland-Garros' },
    { key: 'parc-princes', label: 'Parc des Princes' },
    { key: 'metro', label: 'Métro Marcel Sembat — Ligne 9' },
    { key: 'paris-expo', label: 'Paris Expo Porte de Versailles' },
  ],
  categories: [
    {
      id: 'transports',
      label: 'Transports',
      items: [
        {
          name: 'Métro Marcel Sembat — Ligne 9',
          dist: '400 m · 5 min',
          poi: 'metro',
        },
        { name: 'RER C Issy–Val de Seine', dist: '530 m · 7 min' },
        { name: 'Borne de recharge électrique', dist: '200 m' },
        { name: 'Parking sur réservation', dist: '180 m · 15 €/nuit' },
        { name: "Stations Vélib'", dist: 'à proximité' },
      ],
    },
    {
      id: 'sites',
      label: 'Sites & culture',
      items: [
        { name: 'Bois de Boulogne', dist: 'limitrophe · 5 min' },
        { name: 'Marché de Boulogne-Billancourt', dist: 'av. Général-Leclerc' },
        { name: 'Musée Albert-Kahn', dist: '1,5 km · 18 min' },
        { name: 'Tour Eiffel', dist: '15 min en métro' },
      ],
    },
    {
      id: 'business',
      label: 'Pôles business',
      items: [
        { name: 'Carrefour Boulogne (siège)', dist: '700 m · 9 min' },
        { name: 'Renault Boulogne', dist: '1 km · 12 min' },
        { name: 'TF1', dist: '1,5 km · 5 min en métro' },
        { name: 'La Défense', dist: '7 km · 12 min en métro' },
        { name: 'Issy-les-Moulineaux', dist: '2 km · 5 min en RER' },
      ],
    },
    {
      id: 'events',
      label: 'Événementiel',
      items: [
        {
          name: 'Roland-Garros',
          dist: '1,7 km · 25 min',
          poi: 'roland-garros',
        },
        {
          name: 'Parc des Princes',
          dist: '1,2 km · 18 min',
          poi: 'parc-princes',
        },
        { name: 'La Seine Musicale', dist: '1,4 km · 20 min' },
        {
          name: 'Hippodrome de Longchamp',
          dist: '3 km · 7 min en voiture',
          poi: 'longchamp',
        },
        {
          name: 'Paris Expo Porte de Versailles',
          dist: '3 km · 25 min',
          poi: 'paris-expo',
        },
        {
          name: 'Paris La Défense Arena',
          dist: '7,2 km · 20 min en voiture',
        },
      ],
    },
  ],
};
