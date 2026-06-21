import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
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

export const metadata: Metadata = {
  title: 'Boulogne Résidence Hôtel',
  description: 'Appart-hôtel 3* à Boulogne-Billancourt.',
};

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

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
