import { describe, it, expect } from 'vitest';
import { isPlainAnchorHref } from '@/lib/href';

describe('isPlainAnchorHref', () => {
  it('vrai pour les liens externes et les ancres in-page', () => {
    expect(isPlainAnchorHref('tel:+33149100545')).toBe(true);
    expect(isPlainAnchorHref('mailto:hello@example.com')).toBe(true);
    expect(isPlainAnchorHref('https://example.com')).toBe(true);
    expect(isPlainAnchorHref('http://example.com')).toBe(true);
    expect(isPlainAnchorHref('#autour')).toBe(true);
  });

  it('faux pour les liens internes (passent par le Link localisé)', () => {
    expect(isPlainAnchorHref('/chambres')).toBe(false);
    expect(isPlainAnchorHref('/')).toBe(false);
    expect(isPlainAnchorHref('/contact')).toBe(false);
    // Commence par "/" → lien interne avec ancre (ex. accueil + #booking), pas une ancre seule.
    expect(isPlainAnchorHref('/#booking')).toBe(false);
  });
});
