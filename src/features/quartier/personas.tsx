import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';
import { BOOKING_HREF } from '@/config/site';

// Section « À qui ça parle » : 3 personas (weekend / corpo / événementiel).
// Textes via i18n + href câblé ici (routing). Mêmes conventions que la home.
// CTA événements repointés vers la réservation (page calendrier différée).
export function Personas() {
  const t = useTranslations('Neighborhood');

  const items = [
    {
      title: t('persona1Title'),
      body: t('persona1Body'),
      cta: t('persona1Cta'),
      href: BOOKING_HREF,
    },
    {
      title: t('persona2Title'),
      body: t('persona2Body'),
      cta: t('persona2Cta'),
      href: '/espace-pro',
    },
    {
      title: t('persona3Title'),
      body: t('persona3Body'),
      cta: t('persona3Cta'),
      href: BOOKING_HREF,
    },
  ];

  return (
    <Section
      id="pour-qui"
      eyebrow={t('personasEyebrow')}
      title={t('personasTitle')}
      intro={t('personasIntro')}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="font-display text-primary text-xl">{item.title}</h3>
            <p className="text-muted text-sm">{item.body}</p>
            <Link
              href={item.href}
              className="text-accent hover:text-primary mt-auto pt-2 text-sm font-medium transition-colors"
            >
              {item.cta} →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
