import type { FaqItem } from '@/types/faq';
import type { Pillar, Engagement, ComparisonRow } from '@/types/direct';
import {
  pillarsFr,
  engagementsFr,
  comparisonRowsFr,
  directFaqFr,
} from './fr/direct';
import {
  pillarsEn,
  engagementsEn,
  comparisonRowsEn,
  directFaqEn,
} from './en/direct';

// Contenu de la page Pourquoi direct, dans la langue demandée (fr par défaut).
export function getPillars(locale: string): Pillar[] {
  return locale === 'en' ? pillarsEn : pillarsFr;
}

export function getEngagements(locale: string): Engagement[] {
  return locale === 'en' ? engagementsEn : engagementsFr;
}

export function getComparisonRows(locale: string): ComparisonRow[] {
  return locale === 'en' ? comparisonRowsEn : comparisonRowsFr;
}

export function getDirectFaq(locale: string): FaqItem[] {
  return locale === 'en' ? directFaqEn : directFaqFr;
}
