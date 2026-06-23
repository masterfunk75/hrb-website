import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Faq } from '@/components/ui/faq';
import { getDirectFaq } from '@/content/direct';

type Props = {
  locale: string;
};

// §6 — FAQ réservation directe (accordéon, 6 questions).
export function DirectFaq({ locale }: Props) {
  const t = useTranslations('Direct');

  return (
    <Section eyebrow={t('faqEyebrow')} title={t('faqTitle')}>
      <Faq items={getDirectFaq(locale)} />
    </Section>
  );
}
