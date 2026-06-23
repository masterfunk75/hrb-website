import type { AboutEngagement } from '@/types/about';
import { aboutEngagementsFr } from './fr/about';
import { aboutEngagementsEn } from './en/about';

// Engagements de la page À propos, dans la langue demandée (fr par défaut).
export function getAboutEngagements(locale: string): AboutEngagement[] {
  return locale === 'en' ? aboutEngagementsEn : aboutEngagementsFr;
}
