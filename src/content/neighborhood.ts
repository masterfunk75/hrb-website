import type { Poi, EventCategory } from '@/types/neighborhood';
import { poisFr, eventCategoriesFr } from './fr/neighborhood';
import { poisEn, eventCategoriesEn } from './en/neighborhood';

// Lieux de la carte du quartier, dans la langue demandée (fr par défaut).
export function getPois(locale: string): Poi[] {
  return locale === 'en' ? poisEn : poisFr;
}

// Catégories d'événements, dans la langue demandée (fr par défaut).
export function getEventCategories(locale: string): EventCategory[] {
  return locale === 'en' ? eventCategoriesEn : eventCategoriesFr;
}
