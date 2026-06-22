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

// Bonne adresse du carnet de quartier. Noms et adresses exacts en attente
// (à confirmer par le propriétaire) → rendus via des libellés i18n « pending ».
export type Address = {
  id: string;
  /** Catégorie de lieu, ex. "Boulangerie-pâtisserie". */
  category: string;
  pitch: string;
  /** Légende du placeholder photo (4:3). */
  photoLabel: string;
};
