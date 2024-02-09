import MoviesSearchLayout from '@layouts/movies/MoviesSearchLayout';
import { MoviesList } from '@features/movies/index';
import Pagination from '@features/pagination/index';

const SearchMovies = () => {
  return (
    <MoviesSearchLayout>
      <MoviesList />
      <Pagination />
    </MoviesSearchLayout>
  );
};

export default SearchMovies;
