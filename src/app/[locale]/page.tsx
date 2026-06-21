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
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FAF7F2] px-6 text-center text-[#1A1F1C]">
      <span className="font-mono text-xs tracking-[0.2em] text-[#B86D4A] uppercase">
        {t('badge')}
      </span>
      <h1 className="font-display text-4xl font-normal text-[#1F3A2E] sm:text-6xl">
        {t('title')}
      </h1>
      <p className="max-w-md text-base text-[#6B7569] sm:text-lg">
        {t('subtitle')}
      </p>
      <LocaleSwitcher />
    </main>
  );
}
