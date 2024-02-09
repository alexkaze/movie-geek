import { useSearchParams } from 'react-router-dom';

import { FILTERS_URL_PARAMS } from '@features/filters/config/filters-config';

const useGetFiltersUrlParams = () => {
  const [searchParams] = useSearchParams();

  const selectedCountry = searchParams.get(FILTERS_URL_PARAMS.countries) || '0';
  const selectedGenre = searchParams.get(FILTERS_URL_PARAMS.genres) || '0';
  const selectedYearFrom = searchParams.get(FILTERS_URL_PARAMS.yearFrom) || '0';
  const selectedYearTo = searchParams.get(FILTERS_URL_PARAMS.yearTo) || '0';

  return { selectedCountry, selectedGenre, selectedYearFrom, selectedYearTo };
};

export default useGetFiltersUrlParams;
