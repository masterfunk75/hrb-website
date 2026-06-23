import type { FaqItem } from '@/types/faq';
import type { Pillar, Engagement, ComparisonRow } from '@/types/direct';

// Source: lot-2 pourquoi-direct v2 (English). Sell the direct experience, not OTA
// criticism. No commission percentages, no "free breakfast".

export const pillarsEn: Pillar[] = [
  {
    id: 'prix',
    title: 'The best price. Guaranteed.',
    body: "This is where you'll find the lowest rate. If you find it cheaper elsewhere for the same dates and the same conditions, we match it. Guaranteed.",
    claim: 'Best-price guarantee.',
  },
  {
    id: 'attention',
    title: 'Care from the very first contact.',
    body: 'Your special requests — floor, bed type, late arrival, a special occasion — are noted and acted on. Not just another file in a platform. A real team expecting you.',
    claim: 'A team that knows who you are.',
  },
  {
    id: 'flexibilite',
    title: 'Change, cancel, adjust. Simply.',
    body: 'On the flexible direct rate, you change or cancel up to 24 h before arrival, free of charge. A person in front of you. Not an outsourced call centre applying rules that aren’t ours.',
    claim: "Your terms, not a platform's.",
  },
];

export const engagementsEn: Engagement[] = [
  {
    id: 'surclassement',
    title: 'You move up a category.',
    body: 'If a higher room or studio is available the day you arrive, you move up. No extra charge. Our way of thanking the guests who trust us.',
  },
  {
    id: 'horaires',
    title: 'Arrival and departure times flex.',
    body: 'An early-morning flight, a late-afternoon train, a meeting that overruns: we work it out. When occupancy allows, you arrive earlier or leave later. No extra charge.',
  },
  {
    id: 'annulation',
    title: 'You change your mind. No drama.',
    body: 'On the flexible direct rate, change or cancel up to 24 h before arrival. Free of charge. You call. We adapt.',
  },
];

export const comparisonRowsEn: ComparisonRow[] = [
  {
    label: 'Rate',
    direct: 'The lowest, guaranteed.',
    platform: 'Same or higher depending on the platform.',
  },
  {
    label: 'Special requests',
    direct: 'Noted and acted on by our team.',
    platform: 'Passed on with no guarantee of handling.',
  },
  {
    label: 'Changes',
    direct: 'Direct by phone, up to 24 h before arrival on a flexible rate.',
    platform: "Per the platform's conditions.",
  },
  {
    label: 'Upgrade',
    direct: 'Possible subject to availability, no extra charge.',
    platform: 'Not offered.',
  },
  {
    label: 'Contact when you need it',
    direct: 'Our reception, directly.',
    platform: 'Outsourced customer service.',
  },
  {
    label: 'Relationship',
    direct: 'An ongoing guest relationship.',
    platform: 'A one-off transaction.',
  },
];

export const directFaqEn: FaqItem[] = [
  {
    q: 'Is the rate really cheapest here?',
    a: 'Yes. That is our commitment: a best-price guarantee. If you find a lower rate for the same dates and the same category elsewhere, tell us at +33 1 49 10 05 45 — we match it. It is that simple.',
  },
  {
    q: 'How does the best-price guarantee work?',
    a: 'Found it cheaper on a recognised booking platform, for the same dates and the same room or studio category? Call or email us with the link to the competing offer. We align our rate with yours. No small print.',
  },
  {
    q: 'Will my special requests really be passed on?',
    a: 'Yes. Every special request noted at direct booking (high floor, street view, twin beds, a cot, late arrival, a special occasion) is recorded on your file and handled by our reception team. Not a message lost between a platform and us.',
  },
  {
    q: 'Can I change my dates or cancel after booking?',
    a: 'On flexible rates booked directly, you change or cancel up to 24 h before the arrival date, free of charge. A call or an email to reception is enough. On non-refundable rates, the conditions are strict — that is the price of the discount.',
  },
  {
    q: 'How does the availability-based upgrade work?',
    a: 'If a higher-category room or studio is free the day you arrive, you move up at no extra charge. It is offered to guests who book directly, as a thank-you for their trust. Availability is not guaranteed — but when it is there, you enjoy it.',
  },
  {
    q: 'How do I reach you if I need something during my stay?',
    a: 'Staffed reception every day, 7 am–10 pm on weekdays, 8 am–8 pm at weekends. Direct line: +33 1 49 10 05 45. For arrivals and needs outside reception hours, the details are sent to you as soon as your booking is confirmed.',
  },
];
