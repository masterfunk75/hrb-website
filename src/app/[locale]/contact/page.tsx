import { setRequestLocale } from 'next-intl/server';
import { ContactHero } from '@/features/contact/contact-hero';
import { ContactDetails } from '@/features/contact/contact-details';
import { ContactCta } from '@/features/contact/contact-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page Contact — coordonnées pratiques + CTA. Formulaire différé (pas de backend).
export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactCta />
    </>
  );
}
