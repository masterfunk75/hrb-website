import { describe, it, expect } from 'vitest';
import {
  LEGACY_REDIRECTS,
  resolveLegacyRedirect,
} from '@/config/legacy-redirects';
import { PAGE_PATHS } from '@/config/site';

// Chemins valides du nouveau site (sans préfixe de langue). '' = accueil.
const VALID_PATHS = new Set<string>(Object.values(PAGE_PATHS));

// Réduit une cible localisée (`/fr/chambres`, `/fr/#booking`) à son chemin de
// base sans langue ni ancre, pour vérifier qu'elle existe dans PAGE_PATHS.
function basePathOf(target: string): string {
  const noHash = target.split('#')[0];
  const noLocale = noHash.replace(/^\/(fr|en)/, '');
  return noLocale.replace(/\/+$/, '');
}

describe('redirections héritées (migration SEO)', () => {
  it('chaque cible pointe vers une page existante du nouveau site', () => {
    for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
      expect(to, `${from} -> ${to}`).toMatch(/^\/(fr|en)(\/|$|#)/);
      const base = basePathOf(to);
      expect(
        VALID_PATHS.has(base),
        `${to} (base "${base}") doit exister dans PAGE_PATHS`,
      ).toBe(true);
    }
  });

  it('normalise la casse, le slash final et les accents encodés', () => {
    expect(resolveLegacyRedirect('/ACCUEIL')).toBe('/fr');
    expect(resolveLegacyRedirect('/chambres/')).toBe('/fr/chambres');
    expect(resolveLegacyRedirect('/mentions-l%C3%A9gales')).toBe(
      '/fr/mentions-legales',
    );
    expect(resolveLegacyRedirect('/politique-en-mati%C3%A8re-de-cookies')).toBe(
      '/fr/cookies',
    );
  });

  it('renvoie null pour un chemin inconnu ou déjà valide', () => {
    expect(resolveLegacyRedirect('/fr/chambres')).toBeNull();
    expect(resolveLegacyRedirect('/en/contact')).toBeNull();
    expect(resolveLegacyRedirect('/inconnu')).toBeNull();
  });
});
