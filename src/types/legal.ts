// Modèle d'un document légal (mentions légales, confidentialité, cookies).
// Contenu en prose structurée : rendu par le composant LegalDocument.

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDoc = {
  /** Date de dernière mise à jour, déjà formatée pour la langue. */
  updated: string;
  intro?: string;
  sections: LegalSection[];
};

// Clés des documents = clés de PAGE_PATHS pour les 3 pages légales.
export type LegalKey = 'mentionsLegales' | 'confidentialite' | 'cookies';
