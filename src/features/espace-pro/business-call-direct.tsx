import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { PHONE } from '@/config/site';

// §8 — Appel direct : bloc compact encadré, sous le formulaire, avant la FAQ.
export function BusinessCallDirect() {
  const t = useTranslations('Business');

  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="border-line bg-surface max-w-3xl rounded-lg border p-6 md:p-8">
          <p className="text-ink">{t('callIntro')}</p>
          <p className="text-ink mt-2">
            {t('callAction')} :{' '}
            <a
              href={PHONE.href}
              className="text-accent hover:text-primary font-medium"
            >
              {PHONE.display}
            </a>{' '}
            — {t('callHours')}
          </p>
          <p className="text-primary font-display mt-3 text-lg">
            {t('callSignature')}
          </p>
        </div>
      </Container>
    </section>
  );
}
