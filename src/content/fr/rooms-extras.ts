import type {
  ComparisonCriterion,
  AmenityGroup,
  RoomRecommendation,
} from '@/types/rooms';

// §5 — Tableau comparatif. Ordre des colonnes = ordre des 8 catégories
// (Double, Standard, Confort, Affaires, Twin, Studio Standard/Classique/Supérieur).
export const roomComparisonFr: ComparisonCriterion[] = [
  {
    label: 'Surface',
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
  { label: 'Capacité', values: ['2', '2', '2', '2', '2', '2', '3', '3'] },
  {
    label: 'Lit',
    values: [
      'Double 140',
      'Double 160',
      'Double 160',
      'Double 160',
      '2 × 80',
      'Double 160',
      'Double + canapé',
      'Double + canapé',
    ],
  },
  {
    label: 'Salle de bain',
    values: [
      'Privative',
      'Privative',
      'Privative',
      'Privative + baignoire',
      'Privative',
      'Privative',
      'Privative',
      'Privative',
    ],
  },
  {
    label: 'Kitchenette',
    values: ['—', '—', '—', '—', '—', 'Oui', 'Oui', 'Oui'],
  },
  {
    label: 'Smart TV',
    values: ['Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
  },
  {
    label: 'Wi-Fi haut débit',
    values: ['Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
  },
  {
    label: 'Climatisation',
    values: ['Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
  },
  {
    label: 'Coffre-fort',
    values: ['Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
  },
  {
    label: 'Étage',
    values: ['RDC', '1-3', '1-3', '1-3', '1-3', '4-5', '4-5', '4-5'],
  },
  {
    label: 'Vue',
    values: [
      'Cour intérieure',
      'Rue',
      'Rue',
      'Rue',
      'Rue',
      'Rue / cour',
      'Rue / cour',
      'Rue / cour',
    ],
  },
  {
    label: 'Idéal pour',
    values: [
      'Court séjour rapide, PMR',
      'Court séjour pour deux',
      'Week-end pour deux',
      'Mission business',
      'Voyage en duo non couple',
      'Court séjour autonome',
      'Week-end famille',
      'Séjour long, famille',
    ],
  },
];

// §6 — Équipements communs (4 groupes).
export const amenityGroupsFr: AmenityGroup[] = [
  {
    id: 'confort',
    title: 'Confort et connectivité',
    items: [
      'Wi-Fi haut débit gratuit',
      'Climatisation',
      'Smart TV avec applications connectées',
      'Tablette en chambre',
      'Espace bureau',
    ],
  },
  {
    id: 'salle-de-bain',
    title: 'Salle de bain privative',
    items: [
      'Douche ou baignoire (selon catégorie)',
      'Sèche-cheveux',
      "Produits d'accueil",
      'Linge de toilette',
    ],
  },
  {
    id: 'securite',
    title: 'Sécurité et pratique',
    items: [
      'Coffre-fort numérique',
      "Carte d'accès individualisée",
      'Accès libre 24/7',
      'Réception physique 7j/7',
      'Service de blanchisserie',
    ],
  },
  {
    id: 'studios',
    title: 'Pour les studios uniquement',
    items: [
      'Kitchenette équipée',
      'Plaques à induction',
      'Micro-ondes, frigo, bouilloire, cafetière',
      'Vaisselle complète',
    ],
  },
];

// §7 — « Pour qui ? » : 5 cards de recommandation.
export const roomRecommendationsFr: RoomRecommendation[] = [
  {
    id: 'solo-couple',
    title: 'Vous voyagez seul ou en couple',
    lines: [
      { label: 'Pour une nuit', value: 'Chambre Standard ou Chambre Confort.' },
      {
        label: 'Pour plusieurs nuits',
        value: 'Studio Standard (avec kitchenette).',
      },
    ],
  },
  {
    id: 'travail',
    title: 'Vous venez bosser',
    lines: [
      { label: 'Court séjour', value: 'Chambre Affaires (bureau, baignoire).' },
      {
        label: 'Mission longue',
        value: 'Studio Standard ou Supérieur (kitchenette, étage haut).',
      },
    ],
  },
  {
    id: 'famille',
    title: 'Vous êtes en famille',
    lines: [
      {
        label: 'Couple + 1 enfant',
        value: 'Studio Classique (lit double + canapé une place).',
      },
      {
        label: 'Trois personnes',
        value: 'Studio Supérieur (le plus généreux, 25 m²).',
      },
    ],
  },
  {
    id: 'duo',
    title: 'Vous voyagez en duo non couple',
    lines: [
      {
        label: 'Collègues, amis, fratrie',
        value: 'Chambre Twin (2 lits séparés).',
      },
    ],
  },
  {
    id: 'specifique',
    title: 'Vous avez un besoin spécifique',
    lines: [
      {
        label: 'Mobilité réduite, accès rapide depuis la réception',
        value: 'Chambre Double (rez-de-chaussée, PMR-friendly).',
      },
    ],
    contactNote:
      'Vous ne trouvez pas votre format ? Appelez la réception, on trouvera.',
  },
];
