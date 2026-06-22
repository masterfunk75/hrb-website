import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/features/home/hero';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page d'accueil — assemblée section par section (le Hero d'abord).
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Hero />;
}
