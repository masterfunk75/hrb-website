import type { RoomCategory } from '@/types/rooms';
import { roomCategoriesFr } from './fr/rooms-categories';
import { roomCategoriesEn } from './en/rooms-categories';

// Renvoie les catégories de logements dans la langue demandée (fr par défaut).
export function getRoomCategories(locale: string): RoomCategory[] {
  return locale === 'en' ? roomCategoriesEn : roomCategoriesFr;
}
