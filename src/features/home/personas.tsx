import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';
import { Stagger, StaggerItem } from '@/components/motion/stagger';

// A4 — « Pour qui ? » : 3 personas (pro / weekend / événement), chacun avec un CTA.
export function HomePersonas() {
  const t = useTranslations('Home');

  const items = [
    {
      title: t('who1Title'),
      body: t('who1Body'),
      cta: t('who1Cta'),
      href: '/espace-pro',
    },
    {
      title: t('who2Title'),
      body: t('who2Body'),
      cta: t('who2Cta'),
      href: '/quartier',
    },
    {
      title: t('who3Title'),
      body: t('who3Body'),
      cta: t('who3Cta'),
      href: '/quartier',
    },
  ];

  return (
    <Section
      id="pour-qui"
      eyebrow={t('whoEyebrow')}
      title={t('whoTitle')}
      className="bg-surface"
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
