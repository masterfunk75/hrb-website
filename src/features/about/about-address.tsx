import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';

// §2 « Notre adresse » — 2 colonnes (texte + photo 4:5).
export function AboutAddress() {
  const t = useTranslations('About');

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
            {t('addressEyebrow')}
          </span>
          <h2 className="font-display text-primary text-3xl font-normal sm:text-4xl">
            {t('addressTitle')}
          </h2>
          <p className="text-muted">{t('addressBody1')}</p>
          <p className="text-muted">{t('addressBody2')}</p>
          <p className="text-primary font-display text-lg italic">
            {t('addressSignature')}
          </p>
        </div>
        <PhotoPlaceholder ratio="4/5" label={t('addressPhoto')} />
      </Container>
    </section>
  );
}
