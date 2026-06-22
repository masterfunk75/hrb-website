import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

// A5 — « Vos logements » : teaser de 4 catégories (photos en placeholder).
export function Rooms() {
  const t = useTranslations('Home');

  const items = [
    {
      name: t('room1Name'),
      pitch: t('room1Pitch'),
      photo: 'Studio Supérieur · BRH_071',
    },
    {
      name: t('room2Name'),
      pitch: t('room2Pitch'),
      photo: 'Chambre Standard · BRH_021',
    },
    {
      name: t('room3Name'),
      pitch: t('room3Pitch'),
      photo: 'Studio Classique · BRH_008',
    },
    {
      name: t('room4Name'),
      pitch: t('room4Pitch'),
      photo: 'Chambre Twin · BRH_048',
    },
  ];

  return (
    <Section eyebrow={t('roomsEyebrow')} title={t('roomsTitle')}>
      <p className="text-muted mb-10 max-w-2xl">{t('roomsIntro')}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href="/chambres"
            className="group flex flex-col gap-3"
          >
            <PhotoPlaceholder ratio="4/3" label={item.photo} />
            <div>
              <h3 className="font-display text-primary group-hover:text-accent text-lg transition-colors">
                {item.name}
              </h3>
              <p className="text-muted text-sm">{item.pitch}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/chambres" variant="outline">
          {t('roomsCta')}
        </Button>
      </div>
    </Section>
  );
}
