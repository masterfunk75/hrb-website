import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Langues supportées par le site
  locales: ['fr', 'en'],

  // Langue par défaut (utilisée si aucune ne correspond)
  defaultLocale: 'fr',
});
