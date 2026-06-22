import { getRoomCategories } from '@/content/rooms-categories';
import { RoomCategory } from './room-category';

type Props = {
  locale: string;
};

// Boucle sur les 8 catégories (contenu piloté par les données).
export function RoomsCategories({ locale }: Props) {
  const categories = getRoomCategories(locale);

  return (
    <div>
      {categories.map((category, index) => (
        <RoomCategory
          key={category.id}
          category={category}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
