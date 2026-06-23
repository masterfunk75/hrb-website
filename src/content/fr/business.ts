import type { Poi } from '@/types/neighborhood';
import type { FaqItem } from '@/types/faq';
import type { Advantage, StayType, Condition } from '@/types/business';

// Source : lot-2 corpo v2. Lexique strict (chambres business / studios long séjour),
// aucun % ni promesse chiffrée (décision propriétaire 2026-05-18).

export const advantagesFr: Advantage[] = [
  {
    id: 'localisation',
    title: 'À portée des entreprises qui comptent.',
    body: "Carrefour Boulogne à neuf minutes à pied, Renault Boulogne à douze, TF1 à cinq minutes en métro, La Défense à douze. Boulogne concentre une densité de sièges sociaux qu'on ne trouve nulle part ailleurs en Île-de-France — sans la saturation Paris-centre.",
  },
  {
    id: 'produit',
    title: "Pensés pour qu'on travaille.",
    body: 'Chambres business calmes et fonctionnelles aux étages bas. Studios long séjour équipés (kitchenette, espace de travail, double vitrage) aux étages hauts. Wi-Fi haut débit dans chaque logement. Bureau dans chacun. Climatisation, occultants, coffre-fort.',
  },
  {
    id: 'conditions',
    title: 'Discutées au cas par cas.',
    body: "Pas de barème automatique appliqué à tout le monde. Vos conditions dépendent de votre volume, de votre fréquence, du type de séjour visé. Facturation directe possible, contrats-cadres pour les récurrences. Les modalités s'ajustent au besoin réel — pas l'inverse.",
  },
  {
    id: 'service',
    title: 'Une équipe en face. Joignable. Réactive.',
    body: 'Réception physique tous les jours, accès libre 24/7 pour les arrivées tardives, équipe disponible pour les demandes ponctuelles. Une vraie facture pro, un contact direct pour les changements de dernière minute, un téléphone qui répond. Pas un parcours automatisé.',
  },
];

export const stayTypesFr: StayType[] = [
  {
    num: '01',
    title: 'La mission courte.',
    subtitle: 'Quelques jours, propre et efficace.',
    body: 'Pour les déplacements de quelques jours. Chambre business confortable, check-in flexible pour les arrivées tardives, late checkout sur demande, facturation au plus simple. Vos collaborateurs repartent avec ce qui compte : du sommeil et une facture propre.',
    photoLabel: 'Mission courte — chambre business',
  },
  {
    num: '02',
    title: 'Le séjour long.',
    subtitle: 'Une vraie base de vie.',
    body: "Pour les missions qui durent, les relocations, les expats en transition. Studios équipés kitchenette, espace de travail, services pratiques sur place. Une vraie base de vie, pas une chambre d'hôtel qui s'éternise. Les affaires restent. La routine s'installe. Le quartier devient familier.",
    photoLabel: 'Séjour long — studio équipé',
  },
];

export const conditionsFr: Condition[] = [
  {
    id: 'courts',
    title: 'Pour les séjours courts.',
    items: [
      'Tarification flexible selon volume et fréquence de vos déplacements',
      'Facturation directe possible, à la nuit ou consolidée en fin de mois',
      'Réservation et modification simples par téléphone ou email',
      'Conditions ajustées pour les volumes récurrents',
    ],
  },
  {
    id: 'longs',
    title: 'Pour les séjours longs.',
    items: [
      'Tarification dégressive selon la durée du séjour',
      'Exonération de la taxe de séjour pour les séjours qualifiés long séjour (selon réglementation)',
      'Services pratiques sur place adaptés aux séjours étirés',
      'Engagement réciproque, contrat sur-mesure pour les missions de plusieurs mois',
    ],
  },
];

// Carte business : 10 pôles d'affaires (réutilise le type Poi).
export const businessPoisFr: Poi[] = [
  {
    num: 1,
    label: 'Carrefour Boulogne (siège)',
    distance: '700 m / 9 min à pied',
  },
  {
    num: 2,
    label: 'Renault Boulogne (technocentre + sièges)',
    distance: '1 km / 12 min à pied',
  },
  {
    num: 3,
    label: 'TF1 (Boulogne-Billancourt)',
    distance: '1,5 km / 5 min en métro',
  },
  { num: 4, label: 'Boursorama', distance: '800 m / 10 min à pied' },
  {
    num: 5,
    label: 'Île Seguin / Seine Musicale',
    distance: '1,4 km / 18 min à pied',
  },
  {
    num: 6,
    label: 'Issy-les-Moulineaux (Microsoft, Cisco…)',
    distance: '2 km / 5 min en RER',
  },
  {
    num: 7,
    label: 'La Défense (CBD + arène)',
    distance: '7 km / 12 min en métro',
  },
  {
    num: 8,
    label: 'Porte de Versailles (Paris Expo)',
    distance: '3 km / 25 min en transports',
  },
  {
    num: 9,
    label: 'Hôpital Ambroise Paré (AP-HP)',
    distance: '1 km / 12 min à pied',
  },
  {
    num: 10,
    label: 'Boulogne-Pont de Saint-Cloud (zone tertiaire)',
    distance: '1,5 km / 18 min à pied',
  },
];

export const businessFaqFr: FaqItem[] = [
  {
    q: 'Quelles sont vos conditions de facturation pour les entreprises ?',
    a: 'Facturation directe à la société, par séjour ou consolidée en fin de mois — au choix. TVA récupérable, paiement par virement, prélèvement SEPA ou carte corporate. Les modalités précises se calent sur votre processus achats au moment de la signature du contrat.',
  },
  {
    q: 'Peut-on signer un contrat-cadre annuel ?',
    a: 'Oui, pour une fréquence régulière (plusieurs collaborateurs, plusieurs séjours par mois). Le contrat précise vos conditions, votre accès garanti à un quota de chambres en haute saison, et la facturation. Premier contrat en général signé en deux à trois semaines, selon votre processus interne.',
  },
  {
    q: 'Quel est le préavis minimum pour réserver ou modifier un séjour ?',
    a: "Pas de préavis sur les réservations standard, dans la limite des disponibilités. Sous contrat-cadre, les modifications jusqu'à 24 h avant l'arrivée n'engendrent pas de frais. Pour un volume groupé (à partir de cinq chambres simultanées), prévenir une semaine à l'avance facilite la coordination.",
  },
  {
    q: 'Comment fonctionne la facturation pour les longs séjours ?',
    a: 'Facturation mensuelle en fin de mois, sur la base des nuits effectives. Exonération de la taxe de séjour pour les séjours qualifiés long séjour, selon réglementation. Les frais annexes (parking, services particuliers) figurent en détail sur la facture.',
  },
  {
    q: 'Avez-vous des chambres adaptées PMR ?',
    a: "Sur demande, nous évaluons votre besoin précis avec vous. L'établissement n'est pas un hôtel accessible standard, mais certaines configurations conviennent à des mobilités réduites partielles. À discuter en amont au téléphone.",
  },
  {
    q: "Que se passe-t-il en cas d'arrivée tardive ou de modification de dernière minute ?",
    a: "Accès libre 24/7. Pour une arrivée après les horaires de réception, un code d'accès est transmis 24 h avant. Pour une modification de dernière minute (vol décalé, mission écourtée), un appel à la réception suffit dans la plupart des cas.",
  },
];
