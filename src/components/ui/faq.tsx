import type { FaqItem } from '@/types/faq';

type Props = {
  items: FaqItem[];
};

// Accordéon FAQ accessible, sans JS : <details>/<summary> natifs (reste Server Component).
export function Faq({ items }: Props) {
  return (
    <div className="border-line divide-line divide-y border-y">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="text-accent shrink-0 text-xl transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="text-muted mt-3 max-w-2xl text-sm">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
