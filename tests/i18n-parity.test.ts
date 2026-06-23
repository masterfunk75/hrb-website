import { describe, it, expect } from 'vitest';
import fr from '../messages/fr.json';
import en from '../messages/en.json';

// Aplatit un objet de messages en chemins de clés ("Nav.home", "About.heroTitle"…).
function keyPaths(obj: Record<string, unknown>, prefix = ''): string[] {
  const paths: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      paths.push(...keyPaths(value as Record<string, unknown>, path));
    } else {
      paths.push(path);
    }
  }
  return paths.sort();
}

// Garde-fou bilingue : toute clé FR doit avoir son équivalent EN, et inversement.
// Empêche une traduction oubliée de partir en prod (rendu = MISSING_MESSAGE).
describe('parité des messages i18n FR / EN', () => {
  const frKeys = keyPaths(fr);
  const enKeys = keyPaths(en);

  it('aucune clé présente en FR mais absente en EN', () => {
    expect(frKeys.filter((key) => !enKeys.includes(key))).toEqual([]);
  });

  it('aucune clé présente en EN mais absente en FR', () => {
    expect(enKeys.filter((key) => !frKeys.includes(key))).toEqual([]);
  });

  it('les deux langues ont exactement le même jeu de clés', () => {
    expect(frKeys).toEqual(enKeys);
  });
});
