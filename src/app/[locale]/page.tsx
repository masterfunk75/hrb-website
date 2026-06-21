import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

// Accueil — placeholder provisoire (la vraie home arrive avec le contenu + les photos).
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Construction');

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
      <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
        {t('badge')}
      </span>
      <h1 className="font-display text-primary text-4xl font-normal sm:text-6xl">
        {t('title')}
      </h1>
      <p className="text-muted max-w-md text-base sm:text-lg">
        {t('subtitle')}
      </p>
    </section>
  );
}
