// Redirections 301/308 depuis l'ANCIEN site Wix (boulogneresidencehotel.com)
// vers les URL du nouveau site. But : préserver le référencement et ne laisser
// AUCUNE ancienne page ranker tomber en 404 après la bascule du domaine.
//
// Sources des anciennes URL : archive du web (Wayback Machine) — l'ancien site
// Wix n'étant plus en ligne, c'est la seule trace fiable de sa structure.
//
// Clé = ancien chemin (sans domaine, sans slash final, en minuscules, accents
// décodés). Valeur = nouveau chemin FINAL (déjà préfixé par la langue, pour une
// seule redirection au lieu de deux). '#booking' = ancre du bandeau de résa.
//
// ⚠️ Quelques correspondances sont des ARBITRAGES (l'ancienne page n'a pas
// d'équivalent exact) — marquées « [arbitrage] ». À ajuster si besoin.
export const LEGACY_REDIRECTS: Record<string, string> = {
  // — Accueil / présentation —
  '/accueil': '/fr',
  '/copie-de-accueil': '/fr',
  '/copie-de-accueil-1': '/fr',
  '/presentation': '/fr/a-propos',
  '/decouvrir': '/fr/quartier', // [arbitrage] « découvrir » → le quartier
  '/menus': '/fr', // [arbitrage] pas d'équivalent → accueil
  '/info-covid-19': '/fr', // page obsolète → accueil

  // — Chambres / studios —
  '/chambres': '/fr/chambres',
  '/chambre-double': '/fr/chambres',
  '/studios': '/fr/chambres',
  '/copie-de-studios': '/fr/chambres',
  '/copie-de-copie-de-studios': '/fr/chambres',
  '/superior': '/fr/chambres',
  '/plans-des-hebergements': '/fr/chambres',
  '/tarifs': '/fr/chambres', // [arbitrage] tarifs affichés par catégorie
  '/accommodations': '/en/chambres', // page anglaise
  '/promotions': '/fr/pourquoi-direct', // [arbitrage] offres → réserver en direct

  // — Réservation —
  '/reservation': '/fr/#booking',
  '/reservations': '/fr/#booking',
  '/reservation-details': '/fr/#booking',
  '/book-a-room': '/fr/#booking',
  '/order-online': '/fr/#booking',

  // — Contact —
  '/contact': '/fr/contact',
  '/contacter': '/fr/contact',

  // — À propos / services / équipe —
  '/about-9': '/fr/a-propos',
  '/services': '/fr/a-propos', // [arbitrage] pas de page « services » dédiée
  '/services-9': '/fr/a-propos',
  '/team-3': '/fr/a-propos',

  // — Espace pro (séminaires / entreprises) —
  '/conferences': '/fr/espace-pro',
  '/seminaires': '/fr/espace-pro',
  '/corporate': '/fr/espace-pro',
  '/partenariat-societes': '/fr/espace-pro',
  '/copie-de-partenariat-societes': '/fr/espace-pro',

  // — Pages légales —
  '/mentions-legales': '/fr/mentions-legales',
  '/mentions-légales': '/fr/mentions-legales',
  '/politique-de-confidentialite': '/fr/confidentialite',
  '/politique-de-confidentialité': '/fr/confidentialite',
  '/politiques': '/fr/confidentialite', // [arbitrage] index de politiques
  '/politique-en-matiere-de-cookies': '/fr/cookies',
  '/politique-en-matière-de-cookies': '/fr/cookies',
  // Le nouveau site n'a pas (encore) de page CGV → repli sur mentions légales.
  '/conditions-generales': '/fr/mentions-legales',
  '/conditions-generale-de-vente': '/fr/mentions-legales',
  '/conditions-d-utilisation': '/fr/mentions-legales',
};

// Résout un chemin entrant vers sa cible de redirection, ou null si aucune.
// Normalise : décodage des accents (%C3%A9 → é), minuscules, sans slash final.
export function resolveLegacyRedirect(pathname: string): string | null {
  let path = pathname;
  try {
    path = decodeURIComponent(pathname);
  } catch {
    // chemin mal encodé → on garde le brut
  }
  path = path.toLowerCase();
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return LEGACY_REDIRECTS[path] ?? null;
}
