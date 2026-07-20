import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { resolveLegacyRedirect } from './config/legacy-redirects';

// ⚠️ Next.js 16 : ce fichier s'appelait `middleware.ts` jusqu'à Next 15.
// Il gère la détection de langue et la redirection (ex. `/` → `/fr`).
const intlMiddleware = createMiddleware(routing);

// On intercepte d'abord les anciennes URL Wix (migration SEO) : redirection
// PERMANENTE (308) vers la nouvelle URL, avant tout traitement i18n. Sinon on
// laisse next-intl gérer la langue et le préfixe normalement.
export default function proxy(request: NextRequest): NextResponse {
  const target = resolveLegacyRedirect(request.nextUrl.pathname);
  if (target) {
    // Cible résolue contre l'origine → conserve le domaine, ignore l'ancienne
    // query string (lightbox Wix, etc.) et applique une éventuelle ancre.
    return NextResponse.redirect(new URL(target, request.nextUrl.origin), 308);
  }
  return intlMiddleware(request);
}

export const config = {
  // Applique le proxy à tous les chemins SAUF :
  // - ceux commençant par `/api`, `/trpc`, `/_next` ou `/_vercel`
  // - ceux contenant un point (ex. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
