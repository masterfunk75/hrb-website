import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';

// §2 « Pourquoi nous » — corps + signature.
export function BusinessIntro() {
  const t = useTranslations('Business');

  return (
    <Section
      eyebrow={t('whyEyebrow')}
      title={t('whyTitle')}
      className="bg-surface"
    >
      <div className="max-w-2xl">
        <p className="text-muted text-lg">{t('whyBody')}</p>
        <p className="text-primary font-display mt-6 text-xl">
          {t('whySignature')}
        </p>
      </div>
    </Section>
  );
}
