import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Photo } from '@/components/ui/photo';
import { BOOKING_HREF } from '@/config/site';
import { photoSrc } from '@/config/photos';

// Hero de la page d'accueil. Photo LCP (priority) — Studio Supérieur (acc_hero).
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
            <Button href={BOOKING_HREF}>{tNav('book')}</Button>
            <Button href="/#pour-qui" variant="outline">
              {t('heroSecondaryCta')}
            </Button>
          </div>
        </div>
        <Photo
          src={photoSrc('accHero')}
          alt={t('heroPhotoAlt')}
          ratioClass="aspect-[4/5] md:aspect-[16/9]"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Container>
    </section>
  );
}
