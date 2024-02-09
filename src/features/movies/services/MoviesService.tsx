import { useEffect } from 'react';

import useScrollUp from '@hooks/useScrollUp';
import { useAppDispatch } from '@store/hooks';
import useConfigApiUrl from '@services/useConfigApiUrl';
import fetchMovies from '@features/movies/store/fetch-movies';

type Props = {
  children: React.ReactNode;
};

const MoviesService = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const url = useConfigApiUrl();

  useScrollUp();

  useEffect(() => {
    void dispatch(fetchMovies(url));
  }, [dispatch, url]);

  return <>{children}</>;
};

export default MoviesService;
