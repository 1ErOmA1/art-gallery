import type { ArtistCardProps } from '../../types/index';
import { memo, useMemo } from 'react';
import styles from './ArtistCard.module.scss';

const ArtistCard = memo(({ artwork, authors, locations }: ArtistCardProps) => {
  const authorName = useMemo(
    () =>
      authors.find(a => a.id === artwork.authorId)?.name || 'Unknown Artist',
    [authors, artwork.authorId],
  );

  const locationName = useMemo(
    () =>
      locations.find(l => l.id === artwork.locationId)?.location
      || 'Unknown Location',
    [locations, artwork.locationId],
  );

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={`https://test-front.framework.team${artwork.imageUrl}`}
          alt={artwork.name || 'Artwork'}
          className={styles.image}
          loading="lazy"
          width={392}
          height={260}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{artwork.name || 'Untitled'}</h3>
          <p className={styles.year}>{artwork.created || 'Unknown year'}</p>

          <h3 className={`${styles.title} ${styles.secondary}`}>
            {authorName}
          </h3>
          <p className={`${styles.year} ${styles.secondary}`}>{locationName}</p>
        </div>
      </div>
    </article>
  );
});

export default ArtistCard;
