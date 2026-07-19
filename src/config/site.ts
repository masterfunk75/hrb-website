// Constantes globales du site — point unique de vérité (évite la duplication).

// Téléphone de la réception. `href` (tel:) et `display` doivent rester synchrones.
export const PHONE = {
  href: 'tel:+33149100545',
  display: '+33 1 49 10 05 45',
} as const;

// Cible du CTA de réservation principal : ancre du bandeau moteur (accueil).
// Le moteur Thaïs n'est pas branché en V1 ; le bandeau #booking sert de cible.
export const BOOKING_HREF = '/#booking';

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
} as const;

export type PageKey = keyof typeof PAGE_PATHS;
