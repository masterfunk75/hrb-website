import type { HotelEvent } from '@/types/events';

// ⚠️ Indicative dates (from the mockup) — keep updated, or wire to an events API later.
export const eventsEn: HotelEvent[] = [
  {
    id: 'roland-garros',
    title: 'Roland-Garros',
    sub: 'French Open',
    dateLabel: '18 May → 7 June 2026',
    meta: '1.7 km · 25 min on foot',
    status: 'warn',
    statusLabel: 'A few dates',
  },
  {
    id: 'foire-paris',
    title: 'Foire de Paris',
    sub: 'Paris Expo Porte de Versailles',
    dateLabel: '30 April → 11 May 2026',
    meta: '3 km · 25 min by transit',
    status: 'ok',
    statusLabel: 'Available',
  },
  {
    id: 'psg',
    title: 'PSG — 2025-2026 season',
    sub: 'Parc des Princes',
    dateLabel: 'Rolling schedule',
    meta: '1.2 km · 18 min on foot',
    status: 'ok',
    statusLabel: 'Variable dates',
  },
  {
    id: 'seine-musicale',
    title: 'Concerts at La Seine Musicale',
    sub: 'Rolling programme',
    dateLabel: 'All year round',
    meta: '1.4 km · 20 min on foot',
    status: 'ok',
    statusLabel: 'Available',
  },
  {
    id: 'padel-major',
    title: 'Roland-Garros Padel Major',
    sub: 'Premier Padel Major',
    dateLabel: '7 → 13 September 2026',
    meta: '1.7 km · 25 min on foot',
    status: 'ok',
    statusLabel: 'Available',
  },
  {
    id: 'arc-triomphe',
    title: 'Prix de l’Arc de Triomphe',
    sub: 'Longchamp Racecourse',
    dateLabel: '3 → 4 October 2026',
    meta: '3 km · 7 min by car',
    status: 'ok',
    statusLabel: 'Available',
  },
];
