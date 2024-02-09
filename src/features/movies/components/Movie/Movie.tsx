import RoundedBlock from '@components/ui/RoundedBlock';
import Image from '@components/ui/Image';

import { MovieData } from '../../types/movies-types';

import MovieLabel from './MovieLabel';
import MovieLink from './MovieLink';

import styles from './Movie.module.scss';

type Props = {
  movieData: MovieData;
  order: number;
};

const Movie = ({ movieData, order }: Props) => {
  const {
    kinopoiskId,
    imdbId,
    countries,
    genres,
    nameOriginal,
    nameRu,
    posterUrl,
    ratingKinopoisk,
    ratingImdb,
    year,
  } = movieData;

  return (
    <RoundedBlock className={styles.movie}>
      <Image
        src={posterUrl}
        alt={nameRu || nameOriginal}
        loading={order < 10 ? undefined : 'lazy'}
      />

      <div className={styles['movie__content']}>
        <div className={styles['movie__header']}>
          <div className={styles['movie__title']}>{nameRu}</div>
          <div className={styles['movie__subtitle']}>
            {nameOriginal && `${nameOriginal} `}
          </div>
          <div>{(year && `${year}`) || ''}</div>
        </div>

        <MovieLabel label="Страна" data={countries} />
        <MovieLabel label="Жанр" data={genres} />

        <div className={styles['movie__links']}>
          {kinopoiskId && (
            <MovieLink
              url={`https://www.kinopoisk.ru/film/${kinopoiskId}/`}
              label="Кинопоиск"
              rating={ratingKinopoisk}
            />
          )}

          {imdbId && (
            <MovieLink
              url={`https://www.imdb.com/title/${imdbId}/`}
              label="IMDb"
              rating={ratingImdb}
            />
          )}
        </div>
      </div>
    </RoundedBlock>
  );
};

export default Movie;
