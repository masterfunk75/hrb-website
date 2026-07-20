import type { ReviewsData } from '@/types/reviews';

// ⚠️ TO CONFIRM — reviews and ratings from the V2 mockup (realistic samples).
// Must be REPLACED with real, verified reviews and ratings before going live
// (fabricated reviews on a commercial site are misleading and a legal risk).
export const reviewsEn: ReviewsData = {
  eyebrow: 'What guests say',
  title: '1,400 travellers, and a Top 10 Boulogne ranking on Booking.com.',
  reviews: [
    {
      featured: true,
      quote:
        'Great value for a stay in Paris. The metro station is a 5-minute walk, the studio was spotless and the team so kind. We’ll be back.',
      name: 'Sophie L.',
      detail: 'Lyon · 4 nights in a studio · March 2026',
      source: 'via Booking.com',
    },
    {
      quote:
        'Perfect for my work trips to La Défense. Desk, solid Wi-Fi, kitchenette: it’s all there. And the area is quiet in the evening.',
      name: 'Thomas R.',
      detail: 'Bordeaux · Business traveller',
      source: 'via Tripadvisor',
    },
    {
      quote:
        'Three days for Roland-Garros, walking distance to the courts. A genuinely good address — we dropped our bags and everything was easy.',
      name: 'Karim & Léa',
      detail: 'Brussels · 3 nights · June 2025',
      source: 'via Expedia',
    },
  ],
  tiles: [
    {
      num: '8.7',
      unit: '/10',
      platform: 'Booking.com',
      sub: '1,200+ verified reviews',
    },
    {
      num: '4.2',
      unit: '/5',
      platform: 'Tripadvisor',
      sub: '89 guest reviews',
    },
    {
      num: '9',
      unit: '/10',
      platform: 'Expedia',
      sub: 'Platform-verified reviews',
    },
    {
      num: '7',
      unit: 'd/7',
      platform: 'A team on site',
      sub: '24/7 access · +33 1 49 10 05 45',
      human: true,
    },
  ],
};
