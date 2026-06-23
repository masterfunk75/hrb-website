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

// §5 — Ligne du tableau comparatif. `values` = une valeur par catégorie,
// dans le même ordre que getRoomCategories (8 colonnes).
export type ComparisonCriterion = {
  label: string;
  values: string[];
};

// §6 — Groupe d'équipements communs (4 groupes).
export type AmenityGroup = {
  id: string;
  title: string;
  items: string[];
};

// §7 — Card de recommandation « Pour qui ? ».
export type RoomRecommendation = {
  id: string;
  /** Besoin client (titre de card). */
  title: string;
  /** Recommandations : couples (cas → catégorie conseillée). */
  lines: { label: string; value: string }[];
  /** Note de repli (card « besoin spécifique ») → invite à appeler. */
  contactNote?: string;
};
