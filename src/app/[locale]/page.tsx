import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/features/home/hero';
import { Booking } from '@/features/home/booking';
import { WhyUs } from '@/features/home/why-us';
import { Personas } from '@/features/home/personas';
import { Rooms } from '@/features/home/rooms';
import { BookDirect } from '@/features/home/book-direct';

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
      <Booking />
      <WhyUs />
      <Personas />
      <Rooms />
      <BookDirect />
    </>
  );
}
