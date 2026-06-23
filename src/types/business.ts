// Types de la page Espace Pro (corporate).

// Avantage clé (grille 2×2).
export type Advantage = {
  id: string;
  title: string;
  body: string;
};

// Type de séjour (mission courte / séjour long).
export type StayType = {
  /** Numéro affiché (01, 02). */
  num: string;
  title: string;
  subtitle: string;
  body: string;
  /** Légende du placeholder photo (3:4). */
  photoLabel: string;
};

// Bloc de conditions (séjours courts / longs) — liste de modalités, sans chiffres.
export type Condition = {
  id: string;
  title: string;
  items: string[];
};
