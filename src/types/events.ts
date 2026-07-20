// Calendrier événementiel — grands événements parisiens à proximité de l'hôtel.
// Repris de la maquette V2. À terme : brancher une API captant les événements
// des stades / salles de spectacle de la zone.

export type EventStatus = 'ok' | 'warn';

export type HotelEvent = {
  id: string;
  title: string;
  sub: string;
  /** Libellé de date déjà formaté (ex. « 18 mai → 7 juin 2026 »). */
  dateLabel: string;
  /** Distance / temps depuis l'hôtel (ex. « 1,7 km · 25 min à pied »). */
  meta: string;
  status: EventStatus;
  statusLabel: string;
};
