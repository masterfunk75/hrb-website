// Correspondance emplacement du site → fichier photo (public/photos/*.webp).
// Source : livrable photo professionnel (metadata/par-emplacement.json), en
// retenant la photo « essentielle » recommandée pour chaque rôle.
// Résolution source 2560 px ; next/image sert des versions optimisées.

export const PHOTOS = {
  // Héros
  accHero: 'BRH_148',
  chambresHero: 'BRH_089',
  quartierHero: 'BRH_152',
  directHero: 'BRH_139',
  aproposHero: 'BRH_149',
  // Bandeaux pleine largeur
  chambresBand: 'BRH_004',
  quartierBand: 'BRH_017',
  // Logements (teaser accueil + catégories page Chambres)
  studioSuperieur: 'BRH_071',
  chambreStandard: 'BRH_021',
  studioClassique: 'BRH_008',
  chambreTwin: 'BRH_048',
  chambreConfort: 'BRH_081',
  chambreDouble: 'BRH_079',
  chambreAffaires: 'BRH_032',
  studioStandard: 'BRH_001',
  // Espace pro
  proMissionCourte: 'BRH_066',
  proSejourLong: 'BRH_102',
  // À propos
  aproposEquipe: 'BRH_076',
  // Ambiance — emplacements sans photo dédiée dans le livrable
  lifestyle: 'BRH_073',
  espacesCommuns: 'BRH_016',
  petitDejeuner: 'BRH_118',
  quartierExterieur: 'BRH_150',
} as const;

export type PhotoKey = keyof typeof PHOTOS;

// Chemin public d'une photo (servie et optimisée par next/image).
export function photoSrc(key: PhotoKey): string {
  return `/photos/${PHOTOS[key]}.webp`;
}

// Photo par catégorie de logement : id du contenu → emplacement photo.
export const ROOM_PHOTO_BY_ID: Record<string, PhotoKey> = {
  'chambre-double': 'chambreDouble',
  'chambre-standard': 'chambreStandard',
  'chambre-confort': 'chambreConfort',
  'chambre-affaires': 'chambreAffaires',
  'chambre-twin': 'chambreTwin',
  'studio-standard': 'studioStandard',
  'studio-classique': 'studioClassique',
  'studio-superieur': 'studioSuperieur',
};

// Illustration cartographique du quartier (en attendant la carte interactive).
export const QUARTIER_MAP_SRC = '/photos/quartier-map.png';
