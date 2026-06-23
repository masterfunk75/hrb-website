import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { getComparisonRows } from '@/content/direct';

type Props = {
  locale: string;
};

// §4 — Ce qui change vraiment : tableau comparatif sobre (6 lignes), scrollable en mobile.
export function ComparisonTable({ locale }: Props) {
  const t = useTranslations('Direct');
  const rows = getComparisonRows(locale);

  return (
    <Section
      eyebrow={t('tableEyebrow')}
      title={t('tableTitle')}
      intro={t('tableIntro')}
      className="bg-surface"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="sr-only">{t('tableTitle')}</caption>
          <thead>
            <tr className="border-line-strong border-b">
              <th scope="col" className="w-1/4 py-3 pr-4" />
              <th scope="col" className="text-primary py-3 pr-4 font-medium">
                {t('tableColDirect')}
              </th>
              <th scope="col" className="text-muted py-3 font-medium">
                {t('tableColPlatform')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-line border-b align-top">
                <th scope="row" className="text-ink py-3 pr-4 font-medium">
                  {row.label}
                </th>
                <td className="text-ink py-3 pr-4">{row.direct}</td>
                <td className="text-muted py-3">{row.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-muted mt-6 max-w-2xl text-sm italic">
        {t('tableNote')}
      </p>
    </Section>
  );
}
