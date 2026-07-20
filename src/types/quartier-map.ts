// Carte interactive du quartier (composant signature de la maquette V2).
// Marqueurs positionnés sur l'illustration + liste filtrable, synchronisés au survol.

/** Un point d'intérêt cartographié (marqueur sur la carte + entrée « mappable » de la liste). */
export type MapPoi = { key: string; label: string };

/** Une entrée de la liste. `poi` relie l'entrée à un marqueur (survol/clic synchronisés). */
export type MapItem = { name: string; dist: string; poi?: string };

export type MapCategoryId = 'transports' | 'sites' | 'business' | 'events';

export type MapCategory = {
  id: MapCategoryId;
  label: string;
  items: MapItem[];
};

export type QuartierMapData = {
  pois: MapPoi[];
  categories: MapCategory[];
};
