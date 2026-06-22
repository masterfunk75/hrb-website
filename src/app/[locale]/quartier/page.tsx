import { setRequestLocale } from 'next-intl/server';
import { QuartierHero } from '@/features/quartier/quartier-hero';
import { LivingInBoulogne } from '@/features/quartier/living-in-boulogne';
import { WhatsAround } from '@/features/quartier/whats-around';
import { BreathingBand } from '@/features/quartier/breathing-band';
import { Addresses } from '@/features/quartier/addresses';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page Le Quartier — assemblée section par section (source : lot-2 quartier v2).
export default async function QuartierPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <QuartierHero />
      <LivingInBoulogne />
      <WhatsAround locale={locale} />
      <BreathingBand />
      <Addresses locale={locale} />
    </>
  );
}
