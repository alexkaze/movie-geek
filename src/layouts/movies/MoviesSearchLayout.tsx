import { useAppSelector } from '@store/hooks';
import MoviesLayout from '@features/movies/layouts/MoviesLayout';
import SearchBar from '@features/search-bar/index';
import Filters from '@features/filters/index';
import Error from '@components/ui/Error';

type Props = {
  children: React.ReactNode;
};

const MoviesSearchLayout = ({ children }: Props) => {
  const { status, error } = useAppSelector(state => state.movies);

  return (
    <MoviesLayout>
      <SearchBar />
      <Filters />
      {status !== 'rejected' ? children : <Error>{error}</Error>}
    </MoviesLayout>
  );
};

export default MoviesSearchLayout;
