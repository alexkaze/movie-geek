import { useAppSelector } from '@store/hooks';
import { SearchBar } from '@features/search-bar/index';
import { Filters } from '@features/filters/index';
import { MoviesLayout, MoviesList } from '@features/movies/index';
import { Pagination } from '@features/pagination/index';
import Error from '@components/ui/Error';

import styles from './SearchMoviesPage.module.scss';

const SearchMoviesPage = () => {
  const { status, error } = useAppSelector(state => state.movies);

  return (
    <MoviesLayout>
      <div className={styles.wrapper}>
        <SearchBar />
      </div>
      <Filters />
      {status !== 'rejected' ? (
        <>
          <MoviesList />
          <Pagination />
        </>
      ) : (
        <Error>{error}</Error>
      )}
    </MoviesLayout>
  );
};

export default SearchMoviesPage;
