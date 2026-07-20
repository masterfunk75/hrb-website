import { Container } from '@/components/ui/container';
import { getReviews } from '@/content/reviews';

// Cinq étoiles pleines (tous les avis sont 5/5 dans la maquette).
function Stars({ label }: { label: string }) {
  return (
    <div className="review-card__stars" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

type Props = { locale: string };

// A4 — « Ce que l'on dit de nous » : preuve sociale (avis + notes plateformes).
// Repris de la maquette V2. ⚠️ Contenus à remplacer par de vrais avis/notes.
export function Reviews({ locale }: Props) {
  const { eyebrow, title, reviews, tiles } = getReviews(locale);
  const starsLabel = locale === 'en' ? '5 out of 5 stars' : '5 étoiles sur 5';

  return (
    <section className="reviews">
      <Container>
        <header className="mb-12 max-w-3xl">
          <span className="reviews-eyebrow">{eyebrow}</span>
          <h2 className="reviews__title font-display mt-3 text-3xl font-normal sm:text-4xl">
            {title}
          </h2>
        </header>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <article
              key={review.name}
              className={
                review.featured
                  ? 'review-card review-card--featured'
                  : 'review-card'
              }
            >
              <Stars label={starsLabel} />
              <blockquote className="review-card__quote">
                « {review.quote} »
              </blockquote>
              <div className="review-card__meta">
                <strong>{review.name}</strong>
                <span>{review.detail}</span>
              </div>
              <div className="review-card__source">{review.source}</div>
            </article>
          ))}
        </div>

        <div className="reviews__strip">
          {tiles.map((tile) => (
            <div
              key={tile.platform}
              className={
                tile.human ? 'rating-tile rating-tile--human' : 'rating-tile'
              }
            >
              <div className="rating-tile__num">
                {tile.num}
                <small>{tile.unit}</small>
              </div>
              <div className="rating-tile__platform">{tile.platform}</div>
              <div className="rating-tile__sub">{tile.sub}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
