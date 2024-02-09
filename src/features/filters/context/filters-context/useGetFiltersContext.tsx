import { useContext } from 'react';

import FiltersContext from './filters-context';

const useGetFiltersContext = () => {
  const ctx = useContext(FiltersContext);
  if (ctx === null) throw Error('ctx context is null');
  const { filtersData, filtersUI, filtersUrl } = ctx;

  return { filtersData, filtersUI, filtersUrl };
};

export default useGetFiltersContext;
