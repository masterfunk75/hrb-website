import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE_URL, PAGE_PATHS, type PageKey } from '@/config/site';

// Construit les métadonnées SEO d'une page : titre, description, URL canonique,
// alternates hreflang (fr / en / x-default) et Open Graph. Localisé via le
// namespace i18n « Meta » (clés `<key>Title` / `<key>Description`).
// À appeler depuis le `generateMetadata` de chaque page.
export async function pageMetadata(
  locale: string,
  key: PageKey,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const path = PAGE_PATHS[key];
  const canonical = `${SITE_URL}/${locale}${path}`;

  // Alternates de langue : une URL par locale + x-default (langue par défaut).
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${SITE_URL}/${l}${path}`;
  }
  languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}${path}`;

  const title = t(`${key}Title`);
  const description = t(`${key}Description`);

  return {
    // L'accueil porte un titre complet (absolu) ; les autres pages passent par
    // le template du layout (« %s · Boulogne Résidence Hôtel »).
    title: key === 'home' ? { absolute: title } : title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
  };
}
