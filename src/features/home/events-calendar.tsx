import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getEvents } from '@/content/events';

type Props = { locale: string };

// A6 — Calendrier événementiel (compact) : grands événements parisiens à
// proximité, avec la distance depuis l'hôtel. Lien vers la carte du quartier
// (version complète). À terme : brancher une API d'événements de la zone.
export function EventsCalendar({ locale }: Props) {
  const t = useTranslations('Home');
  const events = getEvents(locale);

  return (
    <Section
      id="calendrier"
      eyebrow={t('eventsEyebrow')}
      title={t('eventsTitle')}
      intro={t('eventsIntro')}
      className="scroll-mt-20"
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <StaggerItem key={event.id} className="h-full">
            <Card className="h-full">
              <div className="flex items-center justify-between gap-3">
                <span className="text-accent font-mono text-xs tracking-wide">
                  {event.dateLabel}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    event.status === 'warn'
                      ? 'bg-warning-soft text-accent'
                      : 'bg-success-soft text-success'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {event.statusLabel}
                </span>
              </div>
              <h3 className="font-display text-primary text-xl">
                {event.title}
              </h3>
              <p className="text-muted text-sm">{event.sub}</p>
              <p className="text-ink mt-auto pt-2 text-sm font-medium">
                {event.meta}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-10 text-center">
        <Button href="/quartier" variant="outline">
          {t('eventsCta')}
        </Button>
      </div>
    </Section>
  );
}
