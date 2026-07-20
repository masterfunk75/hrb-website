// Correspondance emplacement du site → fichier photo (dans public/photos/).
// Deux sources : livrable pro « BRH_* » (WebP 2560px) et nouvelles photos
// « HOTERA » (JPEG 2000px, sélectionnées par analyse). next/image sert des
// versions optimisées (WebP) quelle que soit la source.
// La valeur inclut l'extension (les sources n'ont pas toutes le même format).

export const PHOTOS = {
  // Héros
  // Panorama de Paris (toits + Tour Eiffel au loin) — Unsplash, licence
  // commerciale gratuite sans attribution requise (photo : Christel F.).
  accHero: 'paris-hero.jpg',
  chambresHero: 'BRH_089.webp',
  quartierHero: 'BRH_152.webp',
  directHero: 'BRH_139.webp',
  aproposHero: 'apropos-hero.jpg', // BRH_149 redressé (source pivotée 90°)
  // Bandeaux pleine largeur
  chambresBand: 'chambres-band.jpg', // BRH_027 (studio) — remplace BRH_004 (détail lampe inadapté au bandeau)
  quartierBand: 'quartier-band.jpg', // BRH_017 redressé + recadré 3:1 (source pivotée 90°)
  // Logements (teaser accueil + catégories page Chambres)
  studioSuperieur: 'studio-superieur.jpg', // HOTERA
  chambreStandard: 'chambre-standard.jpg', // HOTERA
  studioClassique: 'BRH_008.webp', // conservé (meilleure que la nouvelle)
  chambreTwin: 'chambre-twin.jpg', // BRH_048 recadré + redressé (source pivotée 90°)
  chambreConfort: 'chambre-confort.jpg', // HOTERA
  chambreDouble: 'chambre-double.jpg', // HOTERA
  chambreAffaires: 'chambre-affaire.jpg', // HOTERA
  studioStandard: 'BRH_001.webp', // conservé (pas de nouvelle photo)
  // Espace pro
  proMissionCourte: 'pro-mission-courte.jpg', // BRH_066 redressé (source pivotée 90°)
  proSejourLong: 'pro-sejour-long.jpg', // BRH_102 redressé (source pivotée 90°)
  // À propos
  aproposEquipe: 'apropos-equipe.jpg', // BRH_076 redressé (source pivotée 90°)
  // Ambiance — emplacements sans photo dédiée dans le livrable
  lifestyle: 'lifestyle.jpg', // BRH_073 redressé (source pivotée 90°)
  espacesCommuns: 'espaces-communs.jpg', // BRH_016 redressé (source pivotée 90°)
  petitDejeuner: 'petit-dejeuner.jpg', // HOTERA — bandeau petit-déjeuner
  quartierExterieur: 'quartier-exterieur.jpg', // BRH_150 redressé (source pivotée 90°)
} as const;

export type PhotoKey = keyof typeof PHOTOS;

// Chemin public d'une photo (servie et optimisée par next/image).
export function photoSrc(key: PhotoKey): string {
  return `/photos/${PHOTOS[key]}`;
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
