import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';

// §5 « L'équipe » — présentation collective (layout asymétrique photo + texte + citation).
export function AboutTeam() {
  const t = useTranslations('About');

  return (
    <Section eyebrow={t('teamEyebrow')} title={t('teamTitle')}>
      <div className="grid items-start gap-10 md:grid-cols-2">
        <PhotoPlaceholder ratio="16/9" label={t('teamPhoto')} />
        <div className="flex flex-col gap-4">
          <p className="text-muted">{t('teamBody1')}</p>
          <p className="text-muted">{t('teamBody2')}</p>
          <blockquote className="border-accent text-primary font-display mt-2 border-l-2 pl-4 text-lg italic">
            {t('teamQuote')}
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
