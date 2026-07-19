import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/features/seo/page-metadata';
import { LegalDocument } from '@/features/legal/legal-document';
import { getLegalDoc } from '@/content/legal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'confidentialite');
}

// Page Politique de confidentialité (RGPD). Contenu data-driven, à faire valider.
export default async function ConfidentialitePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Meta');

  return (
    <LegalDocument
      title={t('confidentialiteTitle')}
      doc={getLegalDoc(locale, 'confidentialite')}
    />
  );
}
