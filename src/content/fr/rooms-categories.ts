import type { RoomCategory } from '@/types/rooms';

// Contenu FR des 8 catégories (source : lot-3 chambres v1).
export const roomCategoriesFr: RoomCategory[] = [
  {
    id: 'chambre-double',
    name: 'Chambre Double',
    title: 'Le format malin, au rez-de-chaussée.',
    subtitle: 'À un pas de la réception, accessible à tous.',
    description:
      "Le format compact bien pensé. Au rez-de-chaussée, à dix mètres de la réception : idéal pour les arrivées tardives, les départs très matinaux, et les voyageurs qui préfèrent éviter l'ascenseur. Accessible aux personnes à mobilité réduite.",
    specs: [
      { label: 'Surface', value: '12 m²' },
      { label: 'Capacité', value: '2 personnes' },
      { label: 'Lit', value: 'Double 140 × 200' },
      { label: 'Salle de bain', value: 'Privative' },
      { label: 'Étage', value: 'Rez-de-chaussée' },
      { label: 'Accessibilité', value: 'PMR' },
    ],
    photoLabel: 'Chambre Double · BRH_079',
  },
  {
    id: 'chambre-standard',
    name: 'Chambre Standard',
    title: 'Le format classique, lit queen et vue sur rue.',
    subtitle: 'Le bon choix pour deux.',
    description:
      'Quinze mètres carrés bien proportionnés, lit queen 160 et vue sur la rue résidentielle. Le format de référence pour deux personnes. Double vitrage, rideaux occultants, climatisation : vous dormirez bien.',
    specs: [
      { label: 'Surface', value: '15 m²' },
      { label: 'Capacité', value: '2 personnes' },
      { label: 'Lit', value: 'Double 160 × 200' },
      { label: 'Salle de bain', value: 'Privative, douche' },
      { label: 'Étages', value: '1ᵉʳ à 3ᵉ' },
      { label: 'Vue', value: 'Rue' },
    ],
    photoLabel: 'Chambre Standard · BRH_021',
  },
  {
    id: 'chambre-confort',
    name: 'Chambre Confort',
    title: "Plus d'espace. Même rythme.",
    subtitle: 'Vingt mètres carrés pour respirer.',
    description:
      'Cinq mètres carrés de plus que la Standard, et ça change tout. De la place pour défaire la valise, un coin lecture qui fonctionne, une circulation fluide entre le lit et le bureau. Lit double 160, vue rue, étages 1 à 3.',
    specs: [
      { label: 'Surface', value: '20 m²' },
      { label: 'Capacité', value: '2 personnes' },
      { label: 'Lit', value: 'Double 160 × 200' },
      { label: 'Salle de bain', value: 'Privative' },
      { label: 'Étages', value: '1ᵉʳ à 3ᵉ' },
      { label: 'Vue', value: 'Rue' },
    ],
    photoLabel: 'Chambre Confort · BRH_081',
  },
  {
    id: 'chambre-affaires',
    name: 'Chambre Affaires',
    title: 'Pensée pour bosser. Conçue pour récupérer.',
    subtitle: 'Espace de travail dégagé et baignoire.',
    description:
      "La chambre business du programme — vingt mètres carrés, bureau dégagé, Wi-Fi haut débit, salle de bain avec baignoire. Quand vous rentrez d'une journée client à La Défense ou Issy, vous n'avez pas envie d'une douche à minuit. Vous avez envie de dix minutes au chaud.",
    specs: [
      { label: 'Surface', value: '20 m²' },
      { label: 'Capacité', value: '2 personnes' },
      { label: 'Lit', value: 'Double 160 × 200' },
      { label: 'Salle de bain', value: 'Privative, baignoire' },
      { label: 'Étages', value: '1ᵉʳ à 3ᵉ' },
      { label: 'Signature', value: 'Baignoire + bureau étendu' },
    ],
    photoLabel: 'Chambre Affaires · BRH_032',
  },
  {
    id: 'chambre-twin',
    name: 'Chambre Twin',
    title: 'Deux lits. Deux personnes. Pas un couple.',
    subtitle: 'Le format twin, pour collègues ou amis.',
    description:
      "La chambre qu'on cherche quand on voyage à deux sans dormir ensemble. Deux lits simples 80 × 200 bien espacés, un canapé, une vraie circulation. Idéal pour les binômes pro en déplacement et les amis qui partagent le séjour sans partager la chambre.",
    specs: [
      { label: 'Surface', value: '15 m²' },
      { label: 'Capacité', value: '2 personnes' },
      { label: 'Lits', value: '2 lits simples 80 × 200' },
      { label: 'Salle de bain', value: 'Privative' },
      { label: 'Étages', value: '1ᵉʳ à 3ᵉ' },
      { label: 'Vue', value: 'Rue' },
    ],
    photoLabel: 'Chambre Twin · BRH_048',
  },
  {
    id: 'studio-standard',
    name: 'Studio Standard',
    title: "L'entrée dans le format studio.",
    subtitle: 'Kitchenette équipée, étage haut, plus de calme.',
    description:
      'Le premier studio du programme. Quinze mètres carrés, lit queen 160, et une kitchenette équipée qui change tout : plaques à induction, micro-ondes, frigo, bouilloire, cafetière, vaisselle complète. Aux étages 4 et 5 : plus de calme, plus de lumière.',
    specs: [
      { label: 'Surface', value: '15 m²' },
      { label: 'Capacité', value: '2 personnes' },
      { label: 'Lit', value: 'Double 160 × 200' },
      { label: 'Kitchenette', value: 'Équipée (induction…)' },
      { label: 'Étages', value: '4ᵉ - 5ᵉ' },
      { label: 'Signature', value: 'Kitchenette, étage haut' },
    ],
    photoLabel: 'Studio Standard · BRH_001',
  },
  {
    id: 'studio-classique',
    name: 'Studio Classique',
    title: "L'équilibre. Deux adultes, un enfant.",
    subtitle: 'Lit double, canapé une place, kitchenette.',
    description:
      "Vingt mètres carrés pour accueillir un couple et un enfant — ou deux adultes qui ne dorment pas dans le même lit. Lit double pour les principaux, canapé une place qui se transforme en couchage pour le troisième. Kitchenette équipée pour les goûters et les dîners à pas d'heure.",
    specs: [
      { label: 'Surface', value: '20 m²' },
      { label: 'Capacité', value: '3 personnes (2 ad. + 1 enf.)' },
      { label: 'Couchage', value: 'Lit double + canapé 1 place' },
      { label: 'Kitchenette', value: 'Équipée (induction…)' },
      { label: 'Étages', value: '4ᵉ - 5ᵉ' },
      { label: 'Signature', value: 'Canapé-lit, format famille' },
    ],
    photoLabel: 'Studio Classique · BRH_008',
  },
  {
    id: 'studio-superieur',
    name: 'Studio Supérieur',
    title: 'Le format généreux.',
    subtitle: 'Vingt-cinq mètres carrés, pour trois personnes.',
    description:
      'Le format le plus généreux du programme. Vingt-cinq mètres carrés, lit double, canapé une place, kitchenette équipée, salle de bain confortable. Aux étages hauts, avec le plus de lumière et la meilleure vue. Pour les séjours de plusieurs nuits.',
    specs: [
      { label: 'Surface', value: '25 m²' },
      { label: 'Capacité', value: '3 personnes' },
      { label: 'Couchage', value: 'Lit double + canapé 1 place' },
      { label: 'Kitchenette', value: 'Équipée (induction…)' },
      { label: 'Étages', value: '4ᵉ - 5ᵉ' },
      { label: 'Signature', value: 'Surface généreuse, vue privilégiée' },
    ],
    photoLabel: 'Studio Supérieur · BRH_071',
  },
];
