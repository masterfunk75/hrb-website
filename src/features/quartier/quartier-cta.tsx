import { useTranslations } from 'next-intl';
import { PageCta } from '@/components/layout/page-cta';
import { Button } from '@/components/ui/button';
import { PHONE } from '@/config/site';

// CTA final de la page Quartier + rappel téléphone (numéro cliquable via t.rich :
// le pattern next-intl pour insérer un lien dans une chaîne traduite).
export function QuartierCta() {
  const t = useTranslations('Neighborhood');
  const tNav = useTranslations('Nav');

  return (
    <PageCta
      title={t('finalTitle')}
      subtitle={t('finalSubtitle')}
      note={t.rich('finalPhone', {
        phone: (chunks) => (
          <a
            href={PHONE.href}
            className="text-on-emphasis font-medium underline underline-offset-2"
          >
            {chunks}
          </a>
        ),
      })}
    >
      <Button href="/#booking" variant="light">
        {tNav('book')}
      </Button>
    </PageCta>
  );
}
