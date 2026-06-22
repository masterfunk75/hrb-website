// Types partagés pour les catégories de logements (page Chambres).

export type RoomSpec = {
  label: string;
  value: string;
};

export type RoomCategory = {
  /** Ancre HTML, ex. "chambre-double". */
  id: string;
  /** Nom de la catégorie (eyebrow). */
  name: string;
  /** Titre accrocheur (H3). */
  title: string;
  subtitle: string;
  description: string;
  specs: RoomSpec[];
  /** Légende du placeholder photo (emplacement attendu). */
  photoLabel: string;
};
