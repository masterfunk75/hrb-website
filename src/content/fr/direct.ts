import type { FaqItem } from '@/types/faq';
import type { Pillar, Engagement, ComparisonRow } from '@/types/direct';

// Source : lot-2 pourquoi-direct v2. On vend l'expérience directe, pas la critique
// d'OTA. Aucun % de commission, aucun « petit-déjeuner offert ».

export const pillarsFr: Pillar[] = [
  {
    id: 'prix',
    title: 'Le meilleur prix. Garanti.',
    body: "C'est ici que vous trouverez le tarif le plus bas. Si vous trouvez moins cher ailleurs sur les mêmes dates et les mêmes conditions, on s'aligne. Garanti.",
    claim: 'Garantie meilleur prix.',
  },
  {
    id: 'attention',
    title: 'Une attention dès le premier contact.',
    body: 'Vos demandes spéciales — étage, type de lit, arrivée tardive, occasion particulière — sont notées et appliquées. Pas un dossier de plus dans une plateforme. Une vraie équipe qui vous attend.',
    claim: 'Une équipe qui sait qui vous êtes.',
  },
  {
    id: 'flexibilite',
    title: 'Modifier, annuler, ajuster. Simplement.',
    body: "Sur le tarif flexible en direct, vous modifiez ou vous annulez jusqu'à 24 h avant l'arrivée, sans frais. Une personne en face. Pas un service client externalisé qui applique des règles qui ne sont pas les nôtres.",
    claim: "Vos conditions, pas celles d'une plateforme.",
  },
];

export const engagementsFr: Engagement[] = [
  {
    id: 'surclassement',
    title: 'Vous montez en gamme.',
    body: 'Si une chambre ou un studio supérieur est disponible le jour de votre arrivée, vous y montez. Sans supplément. Notre façon de remercier les clients qui nous font confiance.',
  },
  {
    id: 'horaires',
    title: "L'heure d'arrivée et de départ s'adaptent.",
    body: "Vol tôt le matin, train en fin de journée, rendez-vous qui dépasse : on s'arrange. Quand l'occupation le permet, vous arrivez plus tôt ou partez plus tard. Sans supplément.",
  },
  {
    id: 'annulation',
    title: "Vous changez d'avis. Pas de drame.",
    body: "Sur le tarif flexible en direct, modification ou annulation jusqu'à 24 h avant l'arrivée. Sans frais. Vous appelez. On adapte.",
  },
];

export const comparisonRowsFr: ComparisonRow[] = [
  {
    label: 'Tarif',
    direct: 'Le plus bas, garanti.',
    platform: 'Identique ou plus élevé selon la plateforme.',
  },
  {
    label: 'Demandes spéciales',
    direct: 'Notées et appliquées par notre équipe.',
    platform: 'Transmises sans garantie de traitement.',
  },
  {
    label: 'Modifications',
    direct:
      "Directes par téléphone, jusqu'à 24 h avant l'arrivée sur tarif flexible.",
    platform: 'Selon les conditions de la plateforme.',
  },
  {
    label: 'Surclassement',
    direct: 'Possible selon disponibilité, sans supplément.',
    platform: 'Non proposé.',
  },
  {
    label: 'Contact en cas de besoin',
    direct: 'Notre réception, en direct.',
    platform: 'Service client externalisé.',
  },
  {
    label: 'Relation',
    direct: 'Une relation client suivie.',
    platform: 'Une transaction ponctuelle.',
  },
];

// NB : le numéro de téléphone apparaît en clair dans certaines réponses ci-dessous
// (contenu rédactionnel). Garder synchronisé avec PHONE.display dans @/config/site.
export const directFaqFr: FaqItem[] = [
  {
    q: 'Le tarif est-il vraiment le moins cher ici ?',
    a: "Oui. C'est notre engagement : garantie meilleur prix. Si vous trouvez un tarif plus bas sur les mêmes dates et la même catégorie ailleurs, signalez-le-nous au 01 49 10 05 45 — nous nous alignons. C'est aussi simple que ça.",
  },
  {
    q: 'Comment fonctionne la garantie meilleur prix ?',
    a: "Vous trouvez moins cher sur une plateforme de réservation reconnue, sur les mêmes dates et la même catégorie de chambre ou studio ? Appelez-nous ou écrivez-nous avec le lien de l'offre concurrente. On aligne notre tarif sur le vôtre. Pas de petites lignes.",
  },
  {
    q: 'Mes demandes spéciales seront-elles vraiment transmises ?',
    a: 'Oui. Toutes les demandes spéciales notées à la réservation directe (étage haut, vue rue, lit twin, lit bébé, arrivée tardive, occasion particulière) sont inscrites sur votre dossier et traitées par notre équipe de réception. Pas un message qui se perd entre une plateforme et nous.',
  },
  {
    q: 'Puis-je modifier mes dates ou annuler après réservation ?',
    a: "Sur les tarifs flexibles réservés en direct, vous modifiez ou annulez jusqu'à 24 h avant la date d'arrivée, sans frais. Un appel ou un email à la réception suffit. Sur les tarifs non remboursables, les conditions sont strictes — c'est le prix de la remise.",
  },
  {
    q: 'Comment fonctionne le surclassement selon disponibilité ?',
    a: "Si une chambre ou un studio d'une catégorie supérieure est libre le jour de votre arrivée, vous y montez sans supplément. C'est offert aux clients qui réservent en direct, en remerciement de leur confiance. La disponibilité n'est pas garantie — mais quand elle est là, vous en profitez.",
  },
  {
    q: 'Comment vous joindre en cas de besoin pendant le séjour ?',
    a: 'Réception physique tous les jours, 7h-22h en semaine, 8h-20h le weekend. Téléphone direct : +33 1 49 10 05 45. Pour les arrivées et les besoins en dehors des horaires de réception, les modalités vous sont communiquées dès votre confirmation de réservation.',
  },
];
