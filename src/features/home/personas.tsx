import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';

// A4 — « Pour qui ? » : 3 personas (pro / weekend / événement), chacun avec un CTA.
export function Personas() {
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
    <Section id="pour-qui" eyebrow={t('whoEyebrow')} title={t('whoTitle')}>
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
