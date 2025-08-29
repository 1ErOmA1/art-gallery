import styles from './ArtistCard.module.scss';
import type { IArtistCard } from '../../types/index';

interface ArtistCardProps {
  artwork: IArtistCard;
}

const ArtistCard = ({ artwork }: ArtistCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={artwork.imageUrl}
          alt={artwork.title || 'Artwork'}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{artwork.title || 'Untitled'}</h3>
          <p className={styles.year}>{artwork.year || 'Unknown year'}</p>

          <h3 className={`${styles.title} ${styles.secondary}`}>
            {artwork.artist || 'Unknown Artist'}
          </h3>
          <p className={`${styles.year} ${styles.secondary}`}>
            {artwork.location || 'Unknown Location'}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArtistCard;
