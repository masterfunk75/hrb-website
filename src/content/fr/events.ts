import type { HotelEvent } from '@/types/events';

// ⚠️ Dates indicatives (reprises de la maquette) — à tenir à jour, ou à brancher
// sur une API d'événements à l'avenir.
export const eventsFr: HotelEvent[] = [
  {
    id: 'roland-garros',
    title: 'Roland-Garros',
    sub: 'Internationaux de France',
    dateLabel: '18 mai → 7 juin 2026',
    meta: '1,7 km · 25 min à pied',
    status: 'warn',
    statusLabel: 'Quelques dates',
  },
  {
    id: 'foire-paris',
    title: 'Foire de Paris',
    sub: 'Paris Expo Porte de Versailles',
    dateLabel: '30 avril → 11 mai 2026',
    meta: '3 km · 25 min en transports',
    status: 'ok',
    statusLabel: 'Disponible',
  },
  {
    id: 'psg',
    title: 'PSG — Saison 2025-2026',
    sub: 'Parc des Princes',
    dateLabel: 'Calendrier rotatif',
    meta: '1,2 km · 18 min à pied',
    status: 'ok',
    statusLabel: 'Dates variables',
  },
  {
    id: 'seine-musicale',
    title: 'Concerts La Seine Musicale',
    sub: 'Programmation rotative',
    dateLabel: 'Toute l’année',
    meta: '1,4 km · 20 min à pied',
    status: 'ok',
    statusLabel: 'Disponible',
  },
  {
    id: 'padel-major',
    title: 'Roland-Garros Padel Major',
    sub: 'Premier Padel Major',
    dateLabel: '7 → 13 septembre 2026',
    meta: '1,7 km · 25 min à pied',
    status: 'ok',
    statusLabel: 'Disponible',
  },
  {
    id: 'arc-triomphe',
    title: 'Prix de l’Arc de Triomphe',
    sub: 'Hippodrome de Longchamp',
    dateLabel: '3 → 4 octobre 2026',
    meta: '3 km · 7 min en voiture',
    status: 'ok',
    statusLabel: 'Disponible',
  },
];
