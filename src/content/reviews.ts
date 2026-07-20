import type { ReviewsData } from '@/types/reviews';
import { reviewsFr } from '@/content/fr/reviews';
import { reviewsEn } from '@/content/en/reviews';

// Données de la section avis (fr par défaut).
export function getReviews(locale: string): ReviewsData {
  return locale === 'en' ? reviewsEn : reviewsFr;
}
