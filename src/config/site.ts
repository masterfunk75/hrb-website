// Constantes globales du site — point unique de vérité (évite la duplication).

// Téléphone de la réception. `href` (tel:) et `display` doivent rester synchrones.
export const PHONE = {
  href: 'tel:+33149100545',
  display: '+33 1 49 10 05 45',
} as const;

// Cible du CTA de réservation principal : ancre du bandeau moteur (accueil).
// Le moteur Thaïs n'est pas branché en V1 ; le bandeau #booking sert de cible.
export const BOOKING_HREF = '/#booking';
