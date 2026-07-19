import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PhotoBand } from '@/components/ui/photo-band';
import { Reveal } from '@/components/motion/reveal';
import { DirectHero } from '@/features/pourquoi-direct/direct-hero';
import { DirectPillars } from '@/features/pourquoi-direct/direct-pillars';
import { DirectEngagements } from '@/features/pourquoi-direct/direct-engagements';
import { ComparisonTable } from '@/features/pourquoi-direct/comparison-table';
import { DirectBooking } from '@/features/pourquoi-direct/direct-booking';
import { DirectFaq } from '@/features/pourquoi-direct/direct-faq';
import { DirectFinalCta } from '@/features/pourquoi-direct/direct-final-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page Pourquoi réserver en direct — assemblée section par section (source : lot-2 v2).
// Motion : Reveal sur les blocs (bandeau, tableau, réservation, FAQ, CTA final) ;
// piliers et engagements cascadent en interne.
export default async function PourquoiDirectPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Direct');

  return (
    <>
      <DirectHero />
      <DirectPillars locale={locale} />
      <Reveal>
        <PhotoBand label={t('bandPhoto')} />
      </Reveal>
      <DirectEngagements locale={locale} />
      <Reveal>
        <ComparisonTable locale={locale} />
      </Reveal>
      <Reveal>
        <DirectBooking />
      </Reveal>
      <Reveal>
        <DirectFaq locale={locale} />
      </Reveal>
      <Reveal>
        <DirectFinalCta />
      </Reveal>
    </>
  );
}
