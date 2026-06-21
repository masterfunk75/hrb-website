import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LocaleSwitcher } from './locale-switcher';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ConstructionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Construction');

  return (
    <main className="bg-canvas text-ink flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
        {t('badge')}
      </span>
      <h1 className="font-display text-primary text-4xl font-normal sm:text-6xl">
        {t('title')}
      </h1>
      <p className="text-muted max-w-md text-base sm:text-lg">
        {t('subtitle')}
      </p>
      <LocaleSwitcher />
    </main>
  );
}
