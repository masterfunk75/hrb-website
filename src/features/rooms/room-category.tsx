import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { Button } from '@/components/ui/button';
import type { RoomCategory as RoomCategoryType } from '@/types/rooms';

type Props = {
  category: RoomCategoryType;
  /** Inverse photo/texte (alternance au scroll). */
  reverse?: boolean;
};

export function RoomCategory({ category, reverse = false }: Props) {
  const tNav = useTranslations('Nav');

  return (
    <section
      id={category.id}
      className="border-line scroll-mt-20 border-t py-14 md:py-20"
    >
      <Container className="grid items-start gap-10 md:grid-cols-2">
        <div className={reverse ? 'md:order-2' : undefined}>
          <PhotoPlaceholder ratio="4/3" label={category.photoLabel} />
        </div>

        <div className={reverse ? 'md:order-1' : undefined}>
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
            {category.name}
          </span>
          <h2 className="font-display text-primary mt-3 text-2xl sm:text-3xl">
            {category.title}
          </h2>
          <p className="text-muted mt-1">{category.subtitle}</p>
          <p className="text-muted mt-4">{category.description}</p>

          <dl className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {category.specs.map((spec) => (
              <div
                key={spec.label}
                className="border-line flex items-baseline justify-between gap-3 border-b py-1.5 text-sm"
              >
                <dt className="text-muted">{spec.label}</dt>
                <dd className="text-ink text-right font-medium">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <Button href="/#booking">{tNav('book')}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
