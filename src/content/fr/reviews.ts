import type { ReviewsData } from '@/types/reviews';

// ⚠️ À CONFIRMER — avis et notes repris de la maquette V2 (exemples réalistes).
// À REMPLACER par de vrais avis et notes vérifiés avant la mise en ligne :
// des avis inventés sur un site commercial sont trompeurs (et un risque légal).
export const reviewsFr: ReviewsData = {
  eyebrow: 'Ce que l’on dit de nous',
  title: '1 400 voyageurs, et un classement Top 10 Boulogne sur Booking.com.',
  reviews: [
    {
      featured: true,
      quote:
        'Un super rapport qualité-prix pour un séjour à Paris. La station de métro est à 5 minutes à pied, le studio était impeccable et l’équipe d’une grande gentillesse. On reviendra.',
      name: 'Sophie L.',
      detail: 'Lyon · 4 nuits en studio · Mars 2026',
      source: 'via Booking.com',
    },
    {
      quote:
        'Idéal pour mes déplacements pro à La Défense. Bureau, Wi-Fi solide, kitchenette : tout y est. Et le quartier est calme le soir.',
      name: 'Thomas R.',
      detail: 'Bordeaux · Voyageur d’affaires',
      source: 'via Tripadvisor',
    },
    {
      quote:
        'Trois jours pour Roland-Garros, à pied jusqu’aux courts. Une vraie bonne adresse, on a posé nos valises et tout était simple.',
      name: 'Karim & Léa',
      detail: 'Bruxelles · 3 nuits · Juin 2025',
      source: 'via Expedia',
    },
  ],
  tiles: [
    {
      num: '8,7',
      unit: '/10',
      platform: 'Booking.com',
      sub: '1 200+ avis vérifiés',
    },
    {
      num: '4,2',
      unit: '/5',
      platform: 'Tripadvisor',
      sub: '89 avis voyageurs',
    },
    {
      num: '9',
      unit: '/10',
      platform: 'Expedia',
      sub: 'Avis vérifiés plateforme',
    },
    {
      num: '7',
      unit: 'j/7',
      platform: 'Une équipe sur place',
      sub: 'Accès 24/7 · +33 1 49 10 05 45',
      human: true,
    },
  ],
};
