import type { Poi } from '@/types/neighborhood';
import type { FaqItem } from '@/types/faq';
import type { Advantage, StayType, Condition } from '@/types/business';

// Source: lot-2 corpo v2 (English). Strict lexicon (business rooms / long-stay studios),
// no percentages or quantified promises.

export const advantagesEn: Advantage[] = [
  {
    id: 'localisation',
    title: 'Within reach of the companies that matter.',
    body: 'Carrefour Boulogne a nine-minute walk away, Renault Boulogne twelve, TF1 five minutes by metro, La Défense twelve. Boulogne packs a density of head offices found nowhere else in the Paris region — without the central-Paris congestion.',
  },
  {
    id: 'produit',
    title: 'Built for getting work done.',
    body: 'Quiet, functional business rooms on the lower floors. Equipped long-stay studios (kitchenette, workspace, double glazing) higher up. High-speed Wi-Fi in every unit. A desk in each one. Air conditioning, blackout blinds, a safe.',
  },
  {
    id: 'conditions',
    title: 'Discussed case by case.',
    body: 'No automatic scale applied to everyone. Your terms depend on your volume, your frequency, the type of stay. Direct billing available, framework agreements for recurring needs. The terms adjust to the real need — not the other way round.',
  },
  {
    id: 'service',
    title: 'A team in front of you. Reachable. Responsive.',
    body: 'Staffed reception every day, 24/7 access for late arrivals, a team on hand for one-off requests. A proper business invoice, a direct contact for last-minute changes, a phone that answers. Not an automated journey.',
  },
];

export const stayTypesEn: StayType[] = [
  {
    num: '01',
    title: 'The short assignment.',
    subtitle: 'A few days, clean and efficient.',
    body: 'For trips of a few days. A comfortable business room, flexible check-in for late arrivals, late checkout on request, billing kept simple. Your people leave with what matters: sleep and a clean invoice.',
    photoLabel: 'Short assignment — business room',
  },
  {
    num: '02',
    title: 'The long stay.',
    subtitle: 'A real home base.',
    body: 'For assignments that last, relocations, expats in transition. Studios with a kitchenette, a workspace, practical services on site. A real home base, not a hotel room that drags on. The work stays. The routine settles in. The neighbourhood becomes familiar.',
    photoLabel: 'Long stay — equipped studio',
  },
];

export const conditionsEn: Condition[] = [
  {
    id: 'courts',
    title: 'For short stays.',
    items: [
      'Flexible pricing based on the volume and frequency of your trips',
      'Direct billing available, per night or consolidated at month end',
      'Simple booking and changes by phone or email',
      'Terms adjusted for recurring volumes',
    ],
  },
  {
    id: 'longs',
    title: 'For long stays.',
    items: [
      'Tapering rates based on the length of stay',
      'Tourist-tax exemption for stays qualifying as long stays (per regulations)',
      'Practical on-site services suited to extended stays',
      'Mutual commitment, a bespoke contract for multi-month assignments',
    ],
  },
];

export const businessPoisEn: Poi[] = [
  { num: 1, label: 'Carrefour Boulogne (HQ)', distance: '700 m / 9-min walk' },
  {
    num: 2,
    label: 'Renault Boulogne (technocentre + offices)',
    distance: '1 km / 12-min walk',
  },
  {
    num: 3,
    label: 'TF1 (Boulogne-Billancourt)',
    distance: '1.5 km / 5 min by metro',
  },
  { num: 4, label: 'Boursorama', distance: '800 m / 10-min walk' },
  {
    num: 5,
    label: 'Île Seguin / Seine Musicale',
    distance: '1.4 km / 18-min walk',
  },
  {
    num: 6,
    label: 'Issy-les-Moulineaux (Microsoft, Cisco…)',
    distance: '2 km / 5 min by RER',
  },
  {
    num: 7,
    label: 'La Défense (CBD + arena)',
    distance: '7 km / 12 min by metro',
  },
  {
    num: 8,
    label: 'Porte de Versailles (Paris Expo)',
    distance: '3 km / 25 min by transport',
  },
  {
    num: 9,
    label: 'Ambroise Paré Hospital (AP-HP)',
    distance: '1 km / 12-min walk',
  },
  {
    num: 10,
    label: 'Boulogne-Pont de Saint-Cloud (business district)',
    distance: '1.5 km / 18-min walk',
  },
];

export const businessFaqEn: FaqItem[] = [
  {
    q: 'What are your billing terms for companies?',
    a: 'Direct billing to the company, per stay or consolidated at month end — your choice. Reclaimable VAT, payment by transfer, SEPA direct debit or corporate card. The exact terms align with your procurement process when the contract is signed.',
  },
  {
    q: 'Can we sign an annual framework agreement?',
    a: 'Yes, for regular frequency (several employees, several stays a month). The contract sets out your terms, your guaranteed access to a room quota in high season, and the billing. A first contract is usually signed within two to three weeks, depending on your internal process.',
  },
  {
    q: 'What is the minimum notice to book or change a stay?',
    a: 'No notice on standard bookings, subject to availability. Under a framework agreement, changes up to 24 h before arrival incur no fees. For a group volume (five or more rooms at once), a week’s notice makes coordination easier.',
  },
  {
    q: 'How does billing work for long stays?',
    a: 'Monthly billing at month end, based on nights actually used. Tourist-tax exemption for stays qualifying as long stays, per regulations. Any extras (parking, particular services) appear itemised on the invoice.',
  },
  {
    q: 'Do you have accessible (PRM) rooms?',
    a: 'On request, we assess your specific need with you. The establishment is not a standard accessible hotel, but some layouts suit partial reduced mobility. Best discussed by phone beforehand.',
  },
  {
    q: 'What happens with a late arrival or a last-minute change?',
    a: 'Free 24/7 access. For an arrival after reception hours, an access code is sent 24 h ahead. For a last-minute change (delayed flight, shortened assignment), a call to reception is usually enough.',
  },
];
