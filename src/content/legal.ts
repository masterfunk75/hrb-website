import type { LegalDoc, LegalKey } from '@/types/legal';
import { legalFr } from '@/content/fr/legal';
import { legalEn } from '@/content/en/legal';

// Renvoie un document légal dans la langue demandée (fr par défaut).
export function getLegalDoc(locale: string, key: LegalKey): LegalDoc {
  const docs = locale === 'en' ? legalEn : legalFr;
  return docs[key];
}
