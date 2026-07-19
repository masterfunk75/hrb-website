import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PhotoBand } from '@/components/ui/photo-band';
import { Reveal } from '@/components/motion/reveal';
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
// Motion : Reveal sur les blocs texte/table/CTA ; les grilles de cartes (amenities,
// recommandations) cascadent en interne. RoomsSummary (barre sticky) et
// RoomsCategories (contenu dense) restent sans animation.
export default async function RoomsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Rooms');

  return (
    <>
      <RoomsHero />
      <Reveal>
        <RoomsOverview />
      </Reveal>
      <RoomsSummary locale={locale} />
      <RoomsCategories locale={locale} />
      <Reveal>
        <PhotoBand label={t('bandPhoto')} />
      </Reveal>
      <Reveal>
        <RoomsComparison locale={locale} />
      </Reveal>
      <RoomsAmenities locale={locale} />
      <RoomsRecommendations locale={locale} />
      <Reveal>
        <RoomsCta />
      </Reveal>
    </>
  );
}
