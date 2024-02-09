import { useAppSelector } from '@store/hooks';

import { MovieData } from '../types/movies-types';

import MoviePattern from './Movie/MoviePattern';
import Movie from './Movie/Movie';

import styles from './MoviesList.module.scss';

const MoviesList = () => {
  const { movies, status } = useAppSelector(state => state.movies);

  return (
    <ul className={styles['movies-list']}>
      {movies.map((movie, i) => (
        <li key={movie.id}>
          {status === 'pending' && <MoviePattern />}

          {status === 'fulfilled' && (
            <Movie movieData={{ ...(movie.data as MovieData) }} order={i + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
