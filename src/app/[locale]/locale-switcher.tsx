'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

// Bascule FR/EN en conservant la page courante.
// (Composant temporaire ici ; sera déplacé dans components/layout/ avec le vrai Header.)
export function LocaleSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <nav className="mt-2 flex items-center gap-1 rounded-full border border-[#D6CCBB] p-1">
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            aria-current={isActive ? 'true' : undefined}
            className={
              isActive
                ? 'rounded-full bg-[#1F3A2E] px-3 py-1 text-sm font-medium text-[#FAF7F2]'
                : 'rounded-full px-3 py-1 text-sm font-medium text-[#6B7569] transition-colors hover:text-[#1F3A2E]'
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
