import type { RoomCategory } from '@/types/rooms';

// EN content for the 8 categories (translated from lot-3).
export const roomCategoriesEn: RoomCategory[] = [
  {
    id: 'chambre-double',
    name: 'Double Room',
    title: 'The smart format, on the ground floor.',
    subtitle: 'A step from reception, accessible to all.',
    description:
      'A well-thought-out compact format. On the ground floor, ten metres from reception: ideal for late arrivals, very early departures, and travellers who would rather skip the lift. Accessible to guests with reduced mobility.',
    specs: [
      { label: 'Size', value: '12 m²' },
      { label: 'Capacity', value: '2 guests' },
      { label: 'Bed', value: 'Double 140 × 200' },
      { label: 'Bathroom', value: 'Private' },
      { label: 'Floor', value: 'Ground floor' },
      { label: 'Accessibility', value: 'Wheelchair' },
    ],
    photoLabel: 'Chambre Double · BRH_079',
  },
  {
    id: 'chambre-standard',
    name: 'Standard Room',
    title: 'The classic format, queen bed and street view.',
    subtitle: 'The right choice for two.',
    description:
      'Fifteen well-proportioned square metres, a queen 160 bed and a view over the residential street. The reference format for two. Double glazing, blackout curtains, air conditioning: you will sleep well.',
    specs: [
      { label: 'Size', value: '15 m²' },
      { label: 'Capacity', value: '2 guests' },
      { label: 'Bed', value: 'Double 160 × 200' },
      { label: 'Bathroom', value: 'Private, shower' },
      { label: 'Floors', value: '1st to 3rd' },
      { label: 'View', value: 'Street' },
    ],
    photoLabel: 'Chambre Standard · BRH_021',
  },
  {
    id: 'chambre-confort',
    name: 'Comfort Room',
    title: 'More space. Same pace.',
    subtitle: 'Twenty square metres to breathe.',
    description:
      'Five square metres more than the Standard, and it changes everything. Room to unpack, a reading corner that works, easy flow between the bed and the desk. Double 160 bed, street view, floors 1 to 3.',
    specs: [
      { label: 'Size', value: '20 m²' },
      { label: 'Capacity', value: '2 guests' },
      { label: 'Bed', value: 'Double 160 × 200' },
      { label: 'Bathroom', value: 'Private' },
      { label: 'Floors', value: '1st to 3rd' },
      { label: 'View', value: 'Street' },
    ],
    photoLabel: 'Chambre Confort · BRH_081',
  },
  {
    id: 'chambre-affaires',
    name: 'Business Room',
    title: 'Built to work. Designed to recover.',
    subtitle: 'A clear workspace and a bathtub.',
    description:
      "The programme's business room — twenty square metres, a clear desk, high-speed Wi-Fi, a bathroom with a bathtub. When you get back from a client day at La Défense or Issy, you don't want a shower at midnight. You want ten minutes in the warm.",
    specs: [
      { label: 'Size', value: '20 m²' },
      { label: 'Capacity', value: '2 guests' },
      { label: 'Bed', value: 'Double 160 × 200' },
      { label: 'Bathroom', value: 'Private, bathtub' },
      { label: 'Floors', value: '1st to 3rd' },
      { label: 'Signature', value: 'Bathtub + extended desk' },
    ],
    photoLabel: 'Chambre Affaires · BRH_032',
  },
  {
    id: 'chambre-twin',
    name: 'Twin Room',
    title: 'Two beds. Two people. Not a couple.',
    subtitle: 'The twin format, for colleagues or friends.',
    description:
      'The room you look for when you travel as two without sharing a bed. Two single 80 × 200 beds, well spaced, a sofa, real circulation. Ideal for business pairs on the road and friends who share the trip without sharing the room.',
    specs: [
      { label: 'Size', value: '15 m²' },
      { label: 'Capacity', value: '2 guests' },
      { label: 'Beds', value: '2 singles 80 × 200' },
      { label: 'Bathroom', value: 'Private' },
      { label: 'Floors', value: '1st to 3rd' },
      { label: 'View', value: 'Street' },
    ],
    photoLabel: 'Chambre Twin · BRH_048',
  },
  {
    id: 'studio-standard',
    name: 'Standard Studio',
    title: 'Your entry into the studio format.',
    subtitle: 'Equipped kitchenette, high floor, more quiet.',
    description:
      "The programme's first studio. Fifteen square metres, a queen 160 bed, and an equipped kitchenette that changes everything: induction hob, microwave, fridge, kettle, coffee maker, full crockery. On floors 4 and 5: more quiet, more light.",
    specs: [
      { label: 'Size', value: '15 m²' },
      { label: 'Capacity', value: '2 guests' },
      { label: 'Bed', value: 'Double 160 × 200' },
      { label: 'Kitchenette', value: 'Equipped (induction…)' },
      { label: 'Floors', value: '4th - 5th' },
      { label: 'Signature', value: 'Kitchenette, high floor' },
    ],
    photoLabel: 'Studio Standard · BRH_001',
  },
  {
    id: 'studio-classique',
    name: 'Classic Studio',
    title: 'The balance. Two adults, one child.',
    subtitle: 'Double bed, single sofa bed, kitchenette.',
    description:
      "Twenty square metres for a couple and a child — or two adults who don't share a bed. A double bed for the main guests, a single sofa that turns into a third sleeping spot. Equipped kitchenette for after-school snacks and late dinners.",
    specs: [
      { label: 'Size', value: '20 m²' },
      { label: 'Capacity', value: '3 guests (2 ad. + 1 child)' },
      { label: 'Sleeping', value: 'Double + single sofa bed' },
      { label: 'Kitchenette', value: 'Equipped (induction…)' },
      { label: 'Floors', value: '4th - 5th' },
      { label: 'Signature', value: 'Sofa bed, family format' },
    ],
    photoLabel: 'Studio Classique · BRH_008',
  },
  {
    id: 'studio-superieur',
    name: 'Superior Studio',
    title: 'The generous format.',
    subtitle: 'Twenty-five square metres, for three.',
    description:
      "The programme's most generous format. Twenty-five square metres, a double bed, a single sofa, an equipped kitchenette, a comfortable bathroom. On the upper floors, with the most light and the best view. For stays of several nights.",
    specs: [
      { label: 'Size', value: '25 m²' },
      { label: 'Capacity', value: '3 guests' },
      { label: 'Sleeping', value: 'Double + single sofa bed' },
      { label: 'Kitchenette', value: 'Equipped (induction…)' },
      { label: 'Floors', value: '4th - 5th' },
      { label: 'Signature', value: 'Generous size, prime view' },
    ],
    photoLabel: 'Studio Supérieur · BRH_071',
  },
];
