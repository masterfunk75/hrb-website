import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Faq } from '@/components/ui/faq';
import { getBusinessFaq } from '@/content/business';

type Props = {
  locale: string;
};

// §9 — FAQ (accordéon, 6 questions).
export function BusinessFaq({ locale }: Props) {
  const t = useTranslations('Business');

  return (
    <Section
      eyebrow={t('faqEyebrow')}
      title={t('faqTitle')}
      className="bg-surface"
    >
      <Faq items={getBusinessFaq(locale)} />
    </Section>
  );
}
