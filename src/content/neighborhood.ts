import type {
  Poi,
  EventCategory,
  Address,
  TransportMode,
} from '@/types/neighborhood';
import {
  poisFr,
  eventCategoriesFr,
  addressesFr,
  transportModesFr,
} from './fr/neighborhood';
import {
  poisEn,
  eventCategoriesEn,
  addressesEn,
  transportModesEn,
} from './en/neighborhood';

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

// Modes d'accès & transports, dans la langue demandée (fr par défaut).
export function getTransportModes(locale: string): TransportMode[] {
  return locale === 'en' ? transportModesEn : transportModesFr;
}
