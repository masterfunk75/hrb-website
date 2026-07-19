import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Photo } from '@/components/ui/photo';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { photoSrc, type PhotoKey } from '@/config/photos';

// A5 — « Vos logements » : teaser de 4 catégories (photos réelles).
export function Rooms() {
  const t = useTranslations('Home');

  const items: { name: string; pitch: string; photo: PhotoKey }[] = [
    { name: t('room1Name'), pitch: t('room1Pitch'), photo: 'studioSuperieur' },
    { name: t('room2Name'), pitch: t('room2Pitch'), photo: 'chambreStandard' },
    { name: t('room3Name'), pitch: t('room3Pitch'), photo: 'studioClassique' },
    { name: t('room4Name'), pitch: t('room4Pitch'), photo: 'chambreTwin' },
  ];

  return (
    <Section eyebrow={t('roomsEyebrow')} title={t('roomsTitle')}>
      <p className="text-muted mb-10 max-w-2xl">{t('roomsIntro')}</p>

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <StaggerItem key={item.name}>
            {/* Carte entière cliquable : lift au survol + léger press signifient
                l'action. Anneau de focus clavier : :focus-visible global. */}
            <Link
              href="/chambres"
              className="group flex h-full flex-col gap-3 rounded-lg motion-safe:transition-transform motion-safe:hover:-translate-y-1 motion-safe:active:scale-[0.99]"
            >
              <Photo
                src={photoSrc(item.photo)}
                alt={item.name}
                ratio="4/3"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div>
                <h3 className="font-display text-primary group-hover:text-accent text-lg transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.pitch}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-10">
        <Button href="/chambres" variant="outline">
          {t('roomsCta')}
        </Button>
      </div>
    </Section>
  );
}
