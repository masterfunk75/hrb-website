import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { getRoomCategories } from '@/content/rooms-categories';
import { getRoomComparison } from '@/content/rooms-extras';

type Props = {
  locale: string;
};

// §5 — Tableau comparatif des 8 catégories (scrollable en mobile). En-têtes de
// colonne = catégories (th scope=col), intitulés de ligne = critères (th scope=row).
export function RoomsComparison({ locale }: Props) {
  const t = useTranslations('Rooms');
  const categories = getRoomCategories(locale);
  const rows = getRoomComparison(locale);

  return (
    <Section
      eyebrow={t('comparisonEyebrow')}
      title={t('comparisonTitle')}
      className="bg-surface"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[60rem] border-collapse text-left text-sm">
          <caption className="sr-only">{t('comparisonTitle')}</caption>
          <thead>
            <tr className="border-line-strong border-b">
              <th scope="col" className="py-3 pr-4" />
              {categories.map((category) => (
                <th
                  key={category.id}
                  scope="col"
                  className="text-primary py-3 pr-4 align-bottom font-medium"
                >
                  {category.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-line border-b align-top">
                <th
                  scope="row"
                  className="text-ink py-3 pr-4 font-medium whitespace-nowrap"
                >
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={categories[index].id}
                    className="text-muted py-3 pr-4"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
