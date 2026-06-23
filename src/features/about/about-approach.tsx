import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';

// §3 « Notre approche » — corps + exergue typographique central + signature.
export function AboutApproach() {
  const t = useTranslations('About');

  return (
    <Section eyebrow={t('approachEyebrow')} title={t('approachTitle')}>
      <p className="text-muted max-w-2xl text-lg">{t('approachBody1')}</p>
      <blockquote className="font-display text-primary mx-auto my-12 max-w-3xl text-center text-2xl italic sm:text-3xl">
        {t('approachQuote')}
      </blockquote>
      <p className="text-muted max-w-2xl">{t('approachBody2')}</p>
      <p className="text-primary font-display mt-6 max-w-2xl text-lg">
        {t('approachSignature')}
      </p>
    </Section>
  );
}
