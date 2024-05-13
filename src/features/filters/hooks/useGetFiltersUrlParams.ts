import { useSearchParams } from 'react-router-dom';

import { URL_PARAMS } from '@config/url-params';

const useGetFiltersUrlParams = () => {
  const [searchParams] = useSearchParams();

  const selectedCountry = searchParams.get(URL_PARAMS.country) || null;
  const selectedGenre = searchParams.get(URL_PARAMS.genre) || null;
  const selectedYear = searchParams.get(URL_PARAMS.year) || null;

  return {
    selectedCountry,
    selectedGenre,
    selectedYear,
  };
};

export default useGetFiltersUrlParams;
