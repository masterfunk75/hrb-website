import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { mainNav } from '@/config/navigation';
import { BOOKING_HREF } from '@/config/site';
import { LocaleSwitcher } from './locale-switcher';
import { MobileMenu } from './mobile-menu';

// En-tête global du site (Server Component). Le tiroir mobile et le switch
// de langue sont des Client Components imbriqués.
export function Header() {
  const t = useTranslations('Nav');

  return (
    <header className="border-line bg-canvas relative border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-primary text-lg">
            Boulogne Résidence
          </span>
          <span className="text-muted font-mono text-[10px] tracking-[0.2em] uppercase">
            {t('brandKind')}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label={t('mainNavLabel')}
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink hover:text-primary text-sm transition-colors"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher />
          <Link
            href={BOOKING_HREF}
            className="bg-primary text-on-emphasis hover:bg-primary-hover rounded-full px-4 py-2 text-sm font-medium transition-colors"
          >
            {t('book')}
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
