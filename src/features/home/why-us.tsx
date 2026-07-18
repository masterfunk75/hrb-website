import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';

// A3 — « Pourquoi nous » : 3 USP (appart-hôtel / Boulogne / camp de base événementiel).
export function WhyUs() {
  const t = useTranslations('Home');

  const items = [
    { n: '01', title: t('why1Title'), body: t('why1Body') },
    { n: '02', title: t('why2Title'), body: t('why2Body') },
    { n: '03', title: t('why3Title'), body: t('why3Body') },
  ];

  return (
    <Section eyebrow={t('whyEyebrow')} title={t('whyTitle')}>
      <Stagger className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <StaggerItem key={item.n} className="h-full">
            {/* Cartes informatives (numérotées) : pas d'affordance de clic,
                donc pas de lift au survol — le mouvement doit signifier une action. */}
            <Card className="h-full">
              <span className="font-display text-accent text-3xl">
                {item.n}
              </span>
              <h3 className="font-display text-primary text-xl">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.body}</p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
