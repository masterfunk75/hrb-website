import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* options Next.js ici */
};

// Branche next-intl (lit automatiquement src/i18n/request.ts)
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
