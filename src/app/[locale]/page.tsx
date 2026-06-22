import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/features/home/hero';
import { WhyUs } from '@/features/home/why-us';
import { Personas } from '@/features/home/personas';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page d'accueil — assemblée section par section.
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <WhyUs />
      <Personas />
    </>
  );
}
