import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/features/seo/page-metadata';
import { Reveal } from '@/components/motion/reveal';
import { Hero } from '@/features/home/hero';
import { Booking } from '@/features/home/booking';
import { WhyUs } from '@/features/home/why-us';
import { HomePersonas } from '@/features/home/personas';
import { Rooms } from '@/features/home/rooms';
import { BookDirect } from '@/features/home/book-direct';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'home');
}

// Page d'accueil — assemblée section par section.
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Reveal>
        <Booking />
      </Reveal>
      {/* Sections en grille : l'apparition est portée par le stagger interne
          (cascade des cartes), pas par un <Reveal> de bloc — une seule
          mécanique d'animation par élément, sans double fondu. */}
      <WhyUs />
      <HomePersonas />
      <Rooms />
      <Reveal>
        <BookDirect />
      </Reveal>
    </>
  );
}
