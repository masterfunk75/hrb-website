import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/features/seo/page-metadata';
import { photoSrc } from '@/config/photos';
import { PhotoBand } from '@/components/ui/photo-band';
import { Reveal } from '@/components/motion/reveal';
import { BusinessHero } from '@/features/espace-pro/business-hero';
import { BusinessIntro } from '@/features/espace-pro/business-intro';
import { BusinessAdvantages } from '@/features/espace-pro/business-advantages';
import { BusinessStayTypes } from '@/features/espace-pro/business-stay-types';
import { BusinessConditions } from '@/features/espace-pro/business-conditions';
import { BusinessMap } from '@/features/espace-pro/business-map';
import { QuoteForm } from '@/features/espace-pro/quote-form';
import { BusinessCallDirect } from '@/features/espace-pro/business-call-direct';
import { BusinessFaq } from '@/features/espace-pro/business-faq';
import { BusinessFinalCta } from '@/features/espace-pro/business-final-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'business');
}

// Page Espace Pro / Corporate — assemblée section par section (source : lot-2 corpo v2).
// Motion : Reveal sur les blocs texte/bandeau/carte/FAQ ; les grilles (avantages,
// séjours, conditions, CTA final) cascadent en interne. Le formulaire de devis
// reste sans animation (interactions et focus sensibles).
export default async function EspaceProPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Business');

  return (
    <>
      <BusinessHero />
      <Reveal>
        <BusinessIntro />
      </Reveal>
      <BusinessAdvantages locale={locale} />
      <Reveal>
        <PhotoBand src={photoSrc('lifestyle')} alt={t('bandPhoto')} />
      </Reveal>
      <BusinessStayTypes locale={locale} />
      <BusinessConditions locale={locale} />
      <Reveal>
        <BusinessMap locale={locale} />
      </Reveal>
      <QuoteForm />
      <Reveal>
        <BusinessCallDirect />
      </Reveal>
      <Reveal>
        <BusinessFaq locale={locale} />
      </Reveal>
      <BusinessFinalCta />
    </>
  );
}
