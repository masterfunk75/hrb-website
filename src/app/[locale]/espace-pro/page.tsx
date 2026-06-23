import { setRequestLocale, getTranslations } from 'next-intl/server';
import { PhotoBand } from '@/components/ui/photo-band';
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

// Page Espace Pro / Corporate — assemblée section par section (source : lot-2 corpo v2).
export default async function EspaceProPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Business');

  return (
    <>
      <BusinessHero />
      <BusinessIntro />
      <BusinessAdvantages locale={locale} />
      <PhotoBand label={t('bandPhoto')} />
      <BusinessStayTypes locale={locale} />
      <BusinessConditions locale={locale} />
      <BusinessMap locale={locale} />
      <QuoteForm />
      <BusinessCallDirect />
      <BusinessFaq locale={locale} />
      <BusinessFinalCta />
    </>
  );
}
