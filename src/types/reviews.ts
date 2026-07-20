// Section « Ce que l'on dit de nous » (avis voyageurs) — repris de la maquette V2.

export type Review = {
  /** Carte mise en avant (fond clair sur la section sombre). */
  featured?: boolean;
  quote: string;
  name: string;
  /** Ligne secondaire : ville · durée · date. */
  detail: string;
  /** Plateforme d'origine (ex. « via Booking.com »). */
  source: string;
};

export type RatingTile = {
  num: string;
  unit: string;
  platform: string;
  sub: string;
  /** Tuile non cliquable (ex. « Une équipe sur place »). */
  human?: boolean;
};

export type ReviewsData = {
  eyebrow: string;
  title: string;
  reviews: Review[];
  tiles: RatingTile[];
};
