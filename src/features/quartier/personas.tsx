import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { BOOKING_HREF } from '@/config/site';

// Section « À qui ça parle » : 3 personas (weekend / corpo / événementiel).
// Textes via i18n + href câblé ici (routing). Mêmes conventions que la home.
// CTA événements repointés vers la réservation (page calendrier différée).
export function QuartierPersonas() {
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
      <Stagger className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            {/* Carte entière cliquable : cible plus large et lift au survol
                justifié par l'action. Le CTA reste un repère visuel (span,
                pas un lien imbriqué). Anneau de focus : :focus-visible global. */}
            <Link href={item.href} className="group block h-full rounded-lg">
              <Card className="group-hover:border-line-strong h-full transition group-hover:shadow-md motion-safe:group-hover:-translate-y-1">
                <h3 className="font-display text-primary text-xl">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.body}
                </p>
                <span className="text-accent group-hover:text-primary mt-auto pt-2 text-sm font-medium transition-colors">
                  {item.cta} →
                </span>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
