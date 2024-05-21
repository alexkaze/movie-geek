import { useAppSelector } from '@store/hooks';
import { MoviesLayout, MoviesList } from '@features/movies/index';
import { Pagination } from '@features/pagination/index';
import Error from '@components/ui/Error';

const MoviesPage = () => {
  const { status, error } = useAppSelector(state => state.movies);

  return (
    <MoviesLayout>
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

export default MoviesPage;
