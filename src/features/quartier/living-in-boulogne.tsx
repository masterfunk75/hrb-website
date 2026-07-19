import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Photo } from '@/components/ui/photo';
import { photoSrc } from '@/config/photos';

// Section « Vivre à Boulogne » — 2 colonnes (texte + photo 4:5), empilé en mobile.
export function LivingInBoulogne() {
  const t = useTranslations('Neighborhood');

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
            {t('livingEyebrow')}
          </span>
          <h2 className="font-display text-primary text-3xl font-normal sm:text-4xl">
            {t('livingTitle')}
          </h2>
          <p className="text-muted text-lg">{t('livingBody1')}</p>
          <p className="text-muted">{t('livingBody2')}</p>
        </div>
        <Photo src={photoSrc('lifestyle')} alt={t('livingPhoto')} ratio="4/5" />
      </Container>
    </section>
  );
}
