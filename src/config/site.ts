// Constantes globales du site — point unique de vérité (évite la duplication).

// Téléphone de la réception. `href` (tel:) et `display` doivent rester synchrones.
export const PHONE = {
  href: 'tel:+33149100545',
  display: '+33 1 49 10 05 45',
} as const;

// Cible du CTA de réservation principal : ancre du bandeau moteur (accueil),
// où est embarqué le moteur D-EDGE. Tous les CTA « Réserver » du site pointent ici.
export const BOOKING_HREF = '/#booking';

// Moteur de réservation D-EDGE (ex-Availpro) — Boulogne Résidence Hôtel.
// Identifiants PUBLICS fournis par les techniciens D-EDGE (aucun secret) :
// code établissement J6CG, hotelId 32478. Domaines officiels D-EDGE :
// secure-hotel-booking.com (réservation) et widgets.secure-hotel-booking.com (widgets).
export const DEDGE = {
  hotelSlug: 'Boulogne-Residence-Hotel',
  hotelCode: 'J6CG',
  hotelId: '32478',
} as const;

// Langue attendue par D-EDGE (fr-FR / en-US) à partir de la locale next-intl.
function dedgeLang(locale: string): string {
  return locale === 'en' ? 'en-US' : 'fr-FR';
}

// Lien direct vers le moteur de réservation sécurisé (« lien simple » D-EDGE),
// localisé. Repli fiable qui fonctionne même sans JavaScript.
export function dedgeBookingUrl(locale: string): string {
  return `https://www.secure-hotel-booking.com/${DEDGE.hotelSlug}/${DEDGE.hotelCode}/${dedgeLang(locale)}?hotelId=${DEDGE.hotelId}`;
}

// URL du loader du widget « Big Calendar » D-EDGE (rendu dans #availpro-root), localisée.
export function dedgeBigCalendarSrc(locale: string): string {
  return `https://widgets.secure-hotel-booking.com/${DEDGE.hotelSlug}/${DEDGE.hotelCode}/${DEDGE.hotelId}/${dedgeLang(locale)}/BigCalendar/`;
}

// URL canonique du site, SANS slash final. ⚠️ [à confirmer] : domaine réel non
// arrêté. Surchargeable au build via NEXT_PUBLIC_SITE_URL (ex. sur Vercel).
// Sert de base aux métadonnées SEO, au sitemap et au robots.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://boulogne-residence-hotel.fr'
).replace(/\/+$/, '');

// Chemins des pages principales (sans préfixe de langue) — source unique
// partagée par le helper de métadonnées et le sitemap. '' = accueil.
export const PAGE_PATHS = {
  home: '',
  rooms: '/chambres',
  neighborhood: '/quartier',
  business: '/espace-pro',
  direct: '/pourquoi-direct',
  about: '/a-propos',
  contact: '/contact',
  mentionsLegales: '/mentions-legales',
  confidentialite: '/confidentialite',
  cookies: '/cookies',
} as const;

export type PageKey = keyof typeof PAGE_PATHS;
