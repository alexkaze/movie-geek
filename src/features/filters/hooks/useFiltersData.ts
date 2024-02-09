import { useAppSelector } from '@store/hooks';

import useConfigFilters from './useConfigFilters';

const useFiltersData = () => {
  const { сountries, genres, years, status, error } = useAppSelector(
    state => state.filters
  );

  const { filters, canBeReseted } = useConfigFilters(сountries, genres, years);

  return {
    filters,
    canBeReseted,
    status,
    error,
  };
};

export default useFiltersData;
