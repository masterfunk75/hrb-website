import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PhotoBand } from '@/components/ui/photo-band';
import { Reveal } from '@/components/motion/reveal';
import { AboutHero } from '@/features/about/about-hero';
import { AboutAddress } from '@/features/about/about-address';
import { AboutApproach } from '@/features/about/about-approach';
import { AboutEngagements } from '@/features/about/about-engagements';
import { AboutTeam } from '@/features/about/about-team';
import { AboutFinalCta } from '@/features/about/about-final-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page À propos — assemblée section par section (source : lot-2 a-propos v2).
// Motion : Reveal sur les blocs (adresse, approche, bandeau, équipe) ; les
// engagements et le CTA final (CtaCards) cascadent en interne.
export default async function AProposPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');

  return (
    <>
      <AboutHero />
      <Reveal>
        <AboutAddress />
      </Reveal>
      <Reveal>
        <AboutApproach />
      </Reveal>
      <Reveal>
        <PhotoBand label={t('bandPhoto')} />
      </Reveal>
      <AboutEngagements locale={locale} />
      <Reveal>
        <AboutTeam />
      </Reveal>
      <AboutFinalCta />
    </>
  );
}
