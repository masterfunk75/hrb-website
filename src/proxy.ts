import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// ⚠️ Next.js 16 : ce fichier s'appelait `middleware.ts` jusqu'à Next 15.
// Il gère la détection de langue et la redirection (ex. `/` → `/fr`).
export default createMiddleware(routing);

export const config = {
  // Applique le proxy à tous les chemins SAUF :
  // - ceux commençant par `/api`, `/trpc`, `/_next` ou `/_vercel`
  // - ceux contenant un point (ex. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
