import { setRequestLocale } from 'next-intl/server';
import { Reveal } from '@/components/motion/reveal';
import { ContactHero } from '@/features/contact/contact-hero';
import { ContactDetails } from '@/features/contact/contact-details';
import { ContactCta } from '@/features/contact/contact-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

// Page Contact — coordonnées pratiques + CTA. Formulaire différé (pas de backend).
// Motion : Reveal sur les blocs sous le hero (le hero reste intact pour le LCP).
export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ContactHero />
      <Reveal>
        <ContactDetails />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
