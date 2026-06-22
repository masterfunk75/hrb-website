import type { Poi, EventCategory, Address } from '@/types/neighborhood';
import { poisFr, eventCategoriesFr, addressesFr } from './fr/neighborhood';
import { poisEn, eventCategoriesEn, addressesEn } from './en/neighborhood';

// Lieux de la carte du quartier, dans la langue demandée (fr par défaut).
export function getPois(locale: string): Poi[] {
  return locale === 'en' ? poisEn : poisFr;
}

// Catégories d'événements, dans la langue demandée (fr par défaut).
export function getEventCategories(locale: string): EventCategory[] {
  return locale === 'en' ? eventCategoriesEn : eventCategoriesFr;
}

// Carnet de bonnes adresses, dans la langue demandée (fr par défaut).
export function getAddresses(locale: string): Address[] {
  return locale === 'en' ? addressesEn : addressesFr;
}
