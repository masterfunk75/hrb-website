// Types partagés pour la page Le Quartier.

// Point d'intérêt de la carte du quartier (liste numérotée des 12 lieux).
export type Poi = {
  /** Numéro affiché (badge + carte). */
  num: number;
  label: string;
  /** Distance / temps d'accès, ex. "400 m / 5 min à pied". Absent pour l'hôtel. */
  distance?: string;
};

// Un lieu cité dans une catégorie d'événements.
export type Venue = {
  name: string;
  /** Description courte, distance incluse en fin de phrase. */
  description: string;
};

// Catégorie d'événements (Sport, Musique & culture, Salons, Plein air).
export type EventCategory = {
  /** Identifiant stable (clé React). */
  id: string;
  title: string;
  intro: string;
  venues: Venue[];
};
