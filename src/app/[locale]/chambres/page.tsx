import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PhotoBand } from '@/components/ui/photo-band';
import { RoomsHero } from '@/features/rooms/rooms-hero';
import { RoomsOverview } from '@/features/rooms/rooms-overview';
import { RoomsSummary } from '@/features/rooms/rooms-summary';
import { RoomsCategories } from '@/features/rooms/rooms-categories';
import { RoomsComparison } from '@/features/rooms/rooms-comparison';
import { RoomsAmenities } from '@/features/rooms/rooms-amenities';
import { RoomsRecommendations } from '@/features/rooms/rooms-recommendations';
import { RoomsCta } from '@/features/rooms/rooms-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page Chambres & studios — assemblée section par section (source : lot-3 chambres v1).
export default async function RoomsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Rooms');

  return (
    <>
      <RoomsHero />
      <RoomsOverview />
      <RoomsSummary locale={locale} />
      <RoomsCategories locale={locale} />
      <PhotoBand label={t('bandPhoto')} />
      <RoomsComparison locale={locale} />
      <RoomsAmenities locale={locale} />
      <RoomsRecommendations locale={locale} />
      <RoomsCta />
    </>
  );
}
