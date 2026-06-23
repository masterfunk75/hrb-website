import type {
  ComparisonCriterion,
  AmenityGroup,
  RoomRecommendation,
} from '@/types/rooms';

// §5 — Comparison table. Column order = the 8 categories' order.
export const roomComparisonEn: ComparisonCriterion[] = [
  {
    label: 'Size',
    values: [
      '12 m²',
      '15 m²',
      '20 m²',
      '20 m²',
      '15 m²',
      '15 m²',
      '20 m²',
      '25 m²',
    ],
  },
  { label: 'Capacity', values: ['2', '2', '2', '2', '2', '2', '3', '3'] },
  {
    label: 'Bed',
    values: [
      'Double 140',
      'Double 160',
      'Double 160',
      'Double 160',
      '2 × 80',
      'Double 160',
      'Double + sofa',
      'Double + sofa',
    ],
  },
  {
    label: 'Bathroom',
    values: [
      'Private',
      'Private',
      'Private',
      'Private + bathtub',
      'Private',
      'Private',
      'Private',
      'Private',
    ],
  },
  {
    label: 'Kitchenette',
    values: ['—', '—', '—', '—', '—', 'Yes', 'Yes', 'Yes'],
  },
  {
    label: 'Smart TV',
    values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  },
  {
    label: 'High-speed Wi-Fi',
    values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  },
  {
    label: 'Air conditioning',
    values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  },
  {
    label: 'Safe',
    values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  },
  {
    label: 'Floor',
    values: ['Ground', '1-3', '1-3', '1-3', '1-3', '4-5', '4-5', '4-5'],
  },
  {
    label: 'View',
    values: [
      'Courtyard',
      'Street',
      'Street',
      'Street',
      'Street',
      'Street / courtyard',
      'Street / courtyard',
      'Street / courtyard',
    ],
  },
  {
    label: 'Ideal for',
    values: [
      'Quick short stay, accessible',
      'Short stay for two',
      'Weekend for two',
      'Business trip',
      'Two travellers, not a couple',
      'Independent short stay',
      'Family weekend',
      'Long stay, family',
    ],
  },
];

// §6 — Common amenities (4 groups).
export const amenityGroupsEn: AmenityGroup[] = [
  {
    id: 'confort',
    title: 'Comfort & connectivity',
    items: [
      'Free high-speed Wi-Fi',
      'Air conditioning',
      'Smart TV with connected apps',
      'In-room tablet',
      'Desk',
    ],
  },
  {
    id: 'salle-de-bain',
    title: 'Private bathroom',
    items: [
      'Shower or bathtub (by category)',
      'Hairdryer',
      'Toiletries',
      'Towels',
    ],
  },
  {
    id: 'securite',
    title: 'Security & convenience',
    items: [
      'Digital safe',
      'Individual key card',
      'Free 24/7 access',
      'Staffed reception 7 days a week',
      'Laundry service',
    ],
  },
  {
    id: 'studios',
    title: 'Studios only',
    items: [
      'Equipped kitchenette',
      'Induction hob',
      'Microwave, fridge, kettle, coffee maker',
      'Full crockery',
    ],
  },
];

// §7 — "Who is it for?" : 5 recommendation cards.
export const roomRecommendationsEn: RoomRecommendation[] = [
  {
    id: 'solo-couple',
    title: 'Travelling solo or as a couple',
    lines: [
      { label: 'For one night', value: 'Standard Room or Comfort Room.' },
      {
        label: 'For several nights',
        value: 'Standard Studio (with a kitchenette).',
      },
    ],
  },
  {
    id: 'travail',
    title: 'Here to work',
    lines: [
      { label: 'Short stay', value: 'Business Room (desk, bathtub).' },
      {
        label: 'Long assignment',
        value: 'Standard or Superior Studio (kitchenette, high floor).',
      },
    ],
  },
  {
    id: 'famille',
    title: 'Travelling as a family',
    lines: [
      {
        label: 'Couple + 1 child',
        value: 'Classic Studio (double bed + single sofa).',
      },
      {
        label: 'Three people',
        value: 'Superior Studio (the most generous, 25 m²).',
      },
    ],
  },
  {
    id: 'duo',
    title: 'Two travellers, not a couple',
    lines: [
      {
        label: 'Colleagues, friends, siblings',
        value: 'Twin Room (2 separate beds).',
      },
    ],
  },
  {
    id: 'specifique',
    title: 'You have a specific need',
    lines: [
      {
        label: 'Reduced mobility, quick access from reception',
        value: 'Double Room (ground floor, accessibility-friendly).',
      },
    ],
    contactNote: "Can't find your format? Call reception, we'll sort it.",
  },
];
