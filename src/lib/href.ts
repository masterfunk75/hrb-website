// Vrai si l'href doit être rendu comme <a> simple plutôt que via le Link localisé
// de next-intl : liens externes (tel:/mailto:/http) ou ancres in-page (#…).
// Un Link next-intl préfixerait à tort une ancre seule par la langue (/fr#…).
export function isPlainAnchorHref(href: string): boolean {
  return /^(tel:|mailto:|https?:|#)/.test(href);
}
