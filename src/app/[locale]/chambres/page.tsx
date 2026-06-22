import { setRequestLocale } from 'next-intl/server';
import { RoomsHero } from '@/features/rooms/rooms-hero';
import { RoomsOverview } from '@/features/rooms/rooms-overview';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page Chambres & studios — assemblée section par section.
export default async function RoomsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <RoomsHero />
      <RoomsOverview />
    </>
  );
}
