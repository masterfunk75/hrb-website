import type { QuartierMapData } from '@/types/quartier-map';
import { quartierMapFr } from '@/content/fr/quartier-map';
import { quartierMapEn } from '@/content/en/quartier-map';

// Données de la carte interactive du quartier (fr par défaut).
export function getQuartierMap(locale: string): QuartierMapData {
  return locale === 'en' ? quartierMapEn : quartierMapFr;
}
