import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/config/site';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import '../globals.css';

// Polices du design system V1 : Fraunces (titres), Inter (corps), JetBrains Mono (labels).
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// Métadonnées de base, partagées par toutes les pages localisées :
// - metadataBase : résout les URLs relatives (OG, canonical) en absolu ;
// - title.template : suffixe « · Boulogne Résidence Hôtel » sur chaque page
//   (les pages fournissent leur titre court ; l'accueil pose un titre absolu) ;
// - openGraph / robots : valeurs par défaut, surchargées au besoin par page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('homeTitle'),
      template: `%s · ${t('siteName')}`,
    },
    description: t('homeDescription'),
    applicationName: t('siteName'),
    openGraph: {
      siteName: t('siteName'),
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

// Pré-génère les pages pour chaque langue (rendu statique).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Valide la langue de l'URL ; sinon → 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Active le rendu statique pour cette langue
  setRequestLocale(locale);
  const t = await getTranslations('Nav');

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider>
          <a
            href="#contenu"
            className="bg-primary text-on-emphasis focus:ring-accent sr-only z-50 rounded-md px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:ring-2"
          >
            {t('skipToContent')}
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
