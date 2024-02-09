import styles from './Movie.module.scss';

type Props = {
  url: string;
  label: string;
  rating: number;
};

const MovieLink = ({ url, label, rating }: Props) => {
  const styleMod = label === 'Кинопоиск' ? 'kinopoisk' : 'imdb';

  return (
    <a
      href={url}
      className={`${styles['movie__link']} ${
        styles[`movie__link--${styleMod}`]
      }`}
    >
      <span className={styles['movie__label']}>
        {rating ? `${label}: ${rating}` : label}
      </span>
    </a>
  );
};

export default MovieLink;
