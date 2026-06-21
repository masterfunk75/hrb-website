'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { mainNav } from '@/config/navigation';
import { LocaleSwitcher } from './locale-switcher';

// Bouton burger + tiroir de navigation (mobile uniquement).
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Nav');

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? t('closeMenu') : t('openMenu')}
        className="text-ink hover:bg-surface flex h-10 w-10 items-center justify-center rounded-full transition-colors"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="border-line bg-canvas absolute inset-x-0 top-full border-t px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-ink hover:text-primary text-lg transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <LocaleSwitcher />
            <Link
              href="/#booking"
              onClick={() => setOpen(false)}
              className="bg-primary text-on-emphasis hover:bg-primary-hover rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {t('book')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
