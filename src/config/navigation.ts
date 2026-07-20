/**
 * Liens de navigation principaux (Header + menu mobile + Footer).
 * `href`     = chemin SANS préfixe de langue (next-intl l'ajoute via @/i18n/navigation).
 * `labelKey` = clé dans le namespace i18n `Nav` (messages/{fr,en}.json).
 */
export type NavItem = {
  href: string;
  labelKey: string;
};

export const mainNav: NavItem[] = [
  { href: '/', labelKey: 'home' },
  { href: '/chambres', labelKey: 'rooms' },
  { href: '/quartier', labelKey: 'neighborhood' },
  { href: '/espace-pro', labelKey: 'business' },
  { href: '/pourquoi-direct', labelKey: 'direct' },
];

/** Liens secondaires (pied de page uniquement). */
export const secondaryNav: NavItem[] = [
  { href: '/a-propos', labelKey: 'about' },
  { href: '/contact', labelKey: 'contact' },
];

/** Liens légaux (bas du pied de page). */
export const legalNav: NavItem[] = [
  { href: '/mentions-legales', labelKey: 'legalNotice' },
  { href: '/confidentialite', labelKey: 'privacy' },
  { href: '/cookies', labelKey: 'cookies' },
  { href: '/cgv', labelKey: 'terms' },
];
