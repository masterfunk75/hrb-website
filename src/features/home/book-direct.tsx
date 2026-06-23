import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF } from '@/config/site';

// A9 — bandeau de clôture « Réservez en direct » (fond appuyé) + CTA.
export function BookDirect() {
  const t = useTranslations('Home');
  const tNav = useTranslations('Nav');

  const reasons = [
    { title: t('direct1Title'), body: t('direct1Body') },
    { title: t('direct2Title'), body: t('direct2Body') },
    { title: t('direct3Title'), body: t('direct3Body') },
  ];

  return (
    <section className="bg-emphasis text-on-emphasis">
      <Container className="py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            {t('directTitle')}
          </h2>
          <p className="text-on-emphasis/80 mt-3">{t('directSubtitle')}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-display text-lg">{reason.title}</h3>
              <p className="text-on-emphasis/70 mt-2 text-sm">{reason.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href={BOOKING_HREF} variant="light">
            {tNav('book')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
