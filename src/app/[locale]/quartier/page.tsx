import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/features/seo/page-metadata';
import { Reveal } from '@/components/motion/reveal';
import { QuartierHero } from '@/features/quartier/quartier-hero';
import { LivingInBoulogne } from '@/features/quartier/living-in-boulogne';
import { WhatsAround } from '@/features/quartier/whats-around';
import { BreathingBand } from '@/features/quartier/breathing-band';
import { Addresses } from '@/features/quartier/addresses';
import { Transport } from '@/features/quartier/transport';
import { QuartierPersonas } from '@/features/quartier/personas';
import { QuartierCta } from '@/features/quartier/quartier-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'neighborhood');
}

// Page Le Quartier — assemblée section par section (source : lot-2 quartier v2).
// Motion : Reveal sur les blocs (2-col, bandeau, CTA) ; les grilles de cartes
// (événements, adresses, transports, personas) cascadent en interne.
export default async function QuartierPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <QuartierHero />
      <Reveal>
        <LivingInBoulogne />
      </Reveal>
      <WhatsAround />
      <Reveal>
        <BreathingBand />
      </Reveal>
      <Addresses locale={locale} />
      <Transport locale={locale} />
      <QuartierPersonas />
      <Reveal>
        <QuartierCta />
      </Reveal>
    </>
  );
}
