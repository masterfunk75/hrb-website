import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL, PAGE_PATHS } from '@/config/site';

// Sitemap XML (généré) : une entrée par page ET par langue, chacune déclarant
// ses alternates hreflang (fr / en). Source des chemins : PAGE_PATHS (config).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(PAGE_PATHS).flatMap((path) => {
    const languages: Record<string, string> = {};
    for (const l of routing.locales) {
      languages[l] = `${SITE_URL}/${l}${path}`;
    }

    return routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
