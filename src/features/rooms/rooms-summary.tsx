import { Container } from '@/components/ui/container';
import { getRoomCategories } from '@/content/rooms-categories';

type Props = {
  locale: string;
};

// Barre d'ancres (sticky) pour sauter directement à une catégorie.
export function RoomsSummary({ locale }: Props) {
  const categories = getRoomCategories(locale);

  return (
    <div className="border-line bg-canvas/90 sticky top-0 z-10 border-y backdrop-blur">
      <Container className="flex gap-2 overflow-x-auto py-3">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="border-line-strong text-muted hover:border-primary hover:text-primary shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
          >
            {category.name}
          </a>
        ))}
      </Container>
    </div>
  );
}
