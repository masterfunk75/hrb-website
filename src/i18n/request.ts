import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

// Fournit la langue + les messages aux Server Components, par requête.
export default getRequestConfig(async ({ requestLocale }) => {
  // Correspond en général au segment `[locale]` de l'URL
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
