import { describe, it, expect } from 'vitest';
import { getRoomCategories } from '@/content/rooms-categories';
import {
  getPois,
  getEventCategories,
  getAddresses,
  getTransportModes,
} from '@/content/neighborhood';
import {
  getAdvantages,
  getStayTypes,
  getConditions,
  getBusinessPois,
  getBusinessFaq,
} from '@/content/business';
import {
  getPillars,
  getEngagements,
  getComparisonRows,
  getDirectFaq,
} from '@/content/direct';
import { getAboutEngagements } from '@/content/about';

// Comptes attendus par getter (source = contenus lot-2/lot-3).
const EXPECTED_COUNTS = [
  { name: 'roomCategories', get: getRoomCategories, count: 8 },
  { name: 'pois', get: getPois, count: 12 },
  { name: 'eventCategories', get: getEventCategories, count: 4 },
  { name: 'addresses', get: getAddresses, count: 5 },
  { name: 'transportModes', get: getTransportModes, count: 7 },
  { name: 'advantages', get: getAdvantages, count: 4 },
  { name: 'stayTypes', get: getStayTypes, count: 2 },
  { name: 'conditions', get: getConditions, count: 2 },
  { name: 'businessPois', get: getBusinessPois, count: 10 },
  { name: 'businessFaq', get: getBusinessFaq, count: 6 },
  { name: 'pillars', get: getPillars, count: 3 },
  { name: 'engagements', get: getEngagements, count: 3 },
  { name: 'comparisonRows', get: getComparisonRows, count: 6 },
  { name: 'directFaq', get: getDirectFaq, count: 6 },
  { name: 'aboutEngagements', get: getAboutEngagements, count: 3 },
];

describe('getters de contenu — comptes attendus (FR)', () => {
  for (const { name, get, count } of EXPECTED_COUNTS) {
    it(`${name} renvoie ${count} éléments`, () => {
      expect(get('fr')).toHaveLength(count);
    });
  }
});

describe('parité de données FR / EN', () => {
  for (const { name, get } of EXPECTED_COUNTS) {
    it(`${name} : même nombre d'éléments en FR et EN`, () => {
      expect(get('en').length).toBe(get('fr').length);
    });
  }
});

describe('sélection de langue', () => {
  it("'en' renvoie bien le contenu anglais (différent du FR)", () => {
    expect(getStayTypes('en')[0].title).not.toBe(getStayTypes('fr')[0].title);
    expect(getRoomCategories('en')[0].name).not.toBe(
      getRoomCategories('fr')[0].name,
    );
  });

  it('une langue inconnue retombe sur le FR (défaut)', () => {
    expect(getPois('xx')).toEqual(getPois('fr'));
    expect(getDirectFaq('de')).toEqual(getDirectFaq('fr'));
  });
});

describe('intégrité des données', () => {
  it('identifiants de catégories de chambres uniques', () => {
    const ids = getRoomCategories('fr').map((category) => category.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('numéros de POI quartier uniques', () => {
    const nums = getPois('fr').map((poi) => poi.num);
    expect(new Set(nums).size).toBe(nums.length);
  });

  it('toutes les questions de FAQ ont une question et une réponse', () => {
    for (const item of [...getBusinessFaq('fr'), ...getDirectFaq('fr')]) {
      expect(item.q.length).toBeGreaterThan(0);
      expect(item.a.length).toBeGreaterThan(0);
    }
  });
});
