import { useEffect } from 'react';

import { useAppDispatch } from '@store/hooks';
import { API_URL, PATH_FILTERS } from '@config/env-config';

import fetchFilters from '../store/fetch-filters';

type Props = {
  children: React.ReactNode;
};

const FiltersService = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchFilters(`${API_URL}${PATH_FILTERS}`));
  }, [dispatch]);

  return <>{children}</>;
};

export default FiltersService;
