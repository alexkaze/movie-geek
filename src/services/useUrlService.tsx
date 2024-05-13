import { useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { PATH_SEARCH } from '@config/env-config';
import { URL_PARAMS, URL_PARAMS_ORDER } from '@config/url-params';

const useUrlService = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const navigateToSearch = useCallback(
    (keyword: string) =>
      navigate(`${PATH_SEARCH}?${URL_PARAMS.keyword}=${keyword}`, {
        replace: false,
      }),
    [navigate],
  );

  const updateFiltersParams = useCallback(
    (newFiltersParams: URLSearchParams) => {
      searchParams.delete(URL_PARAMS.page);

      const urlParams = URL_PARAMS_ORDER.map(param =>
        newFiltersParams.has(param)
          ? `${param}=${newFiltersParams.get(param)}`
          : '',
      ).join('&');

      setSearchParams(urlParams);
    },
    [searchParams, setSearchParams],
  );

  const resetFiltersParams = useCallback(() => {
    searchParams.delete(URL_PARAMS.country);
    searchParams.delete(URL_PARAMS.genre);
    searchParams.delete(URL_PARAMS.year);
    searchParams.delete(URL_PARAMS.page);

    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const navigateToPage = useCallback(() => {}, []);

  return {
    navigateToSearch,
    resetFiltersParams,
    updateFiltersParams,
    navigateToPage,
  };
};

export default useUrlService;
