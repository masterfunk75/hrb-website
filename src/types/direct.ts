// Types de la page Pourquoi réserver en direct.

// Pilier (prix / attention / flexibilité) — titre + corps + mini-claim.
export type Pillar = {
  id: string;
  title: string;
  body: string;
  claim: string;
};

// Engagement concret (surclassement / horaires / annulation).
export type Engagement = {
  id: string;
  title: string;
  body: string;
};

// Ligne du tableau comparatif « en direct » vs « via une plateforme ».
export type ComparisonRow = {
  label: string;
  direct: string;
  platform: string;
};
