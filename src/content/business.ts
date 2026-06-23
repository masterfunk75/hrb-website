import type { Poi } from '@/types/neighborhood';
import type { FaqItem } from '@/types/faq';
import type { Advantage, StayType, Condition } from '@/types/business';
import {
  advantagesFr,
  stayTypesFr,
  conditionsFr,
  businessPoisFr,
  businessFaqFr,
} from './fr/business';
import {
  advantagesEn,
  stayTypesEn,
  conditionsEn,
  businessPoisEn,
  businessFaqEn,
} from './en/business';

// Contenu de la page Espace Pro, dans la langue demandée (fr par défaut).
export function getAdvantages(locale: string): Advantage[] {
  return locale === 'en' ? advantagesEn : advantagesFr;
}

export function getStayTypes(locale: string): StayType[] {
  return locale === 'en' ? stayTypesEn : stayTypesFr;
}

export function getConditions(locale: string): Condition[] {
  return locale === 'en' ? conditionsEn : conditionsFr;
}

export function getBusinessPois(locale: string): Poi[] {
  return locale === 'en' ? businessPoisEn : businessPoisFr;
}

export function getBusinessFaq(locale: string): FaqItem[] {
  return locale === 'en' ? businessFaqEn : businessFaqFr;
}
