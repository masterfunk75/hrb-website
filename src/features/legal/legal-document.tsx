import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import type { LegalDoc } from '@/types/legal';

type Props = {
  /** Titre H1 de la page (déjà localisé). */
  title: string;
  doc: LegalDoc;
};

// Rendu d'un document légal : en-tête (eyebrow + H1 + date), bandeau
// d'avertissement « contenu à faire valider », puis les sections en prose.
// Server Component (useTranslations est disponible côté serveur).
export function LegalDocument({ title, doc }: Props) {
  const t = useTranslations('Legal');

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
          {t('eyebrow')}
        </span>
        <h1 className="font-display text-primary mt-4 text-4xl font-normal sm:text-5xl">
          {title}
        </h1>
        <p className="text-muted mt-3 text-sm">
          {t('updatedLabel')} {doc.updated}
        </p>

        {/* Avertissement : données « [à confirmer] » à compléter avant mise en ligne. */}
        <p
          role="note"
          className="bg-warning-soft text-ink mt-8 rounded-lg px-4 py-3 text-sm leading-relaxed"
        >
          {t('validationNotice')}
        </p>

        {doc.intro && (
          <p className="text-muted mt-8 leading-relaxed">{doc.intro}</p>
        )}

        <div className="mt-10 flex flex-col gap-10">
          {doc.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-primary text-2xl font-normal">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
