import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';

// Hero de la page d'accueil. Photo en placeholder (pipeline photo en attente).
export function Hero() {
  const t = useTranslations('Home');
  const tNav = useTranslations('Nav');

  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-primary text-4xl font-normal sm:text-5xl lg:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="text-muted max-w-md text-lg">{t('heroSubtitle')}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#booking">{tNav('book')}</Button>
            <Button href="/#pour-qui" variant="outline">
              {t('heroSecondaryCta')}
            </Button>
          </div>
        </div>
        <PhotoPlaceholder
          ratio="4/5"
          label="Hero — Studio Supérieur (acc_hero · BRH_148)"
        />
      </Container>
    </section>
  );
}
