import { useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { PATH_SEARCH } from '@config/env-config';

const paramsOrder = ['keyword', 'countries', 'genres', 'yearFrom', 'yearTo'];

const useUrlService = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const navigateToSearch = useCallback(
    (keyword: string) =>
      navigate(`${PATH_SEARCH}?keyword=${keyword}`, { replace: false }),
    [navigate]
  );

  const updateFiltersParams = useCallback(
    (newFiltersParams: URLSearchParams) => {
      searchParams.delete('page');

      const urlParams = paramsOrder
        .map(param =>
          newFiltersParams.has(param)
            ? `${param}=${newFiltersParams.get(param)}`
            : ''
        )
        .join('&');

      setSearchParams(urlParams);
    },
    [searchParams, setSearchParams]
  );

  const resetFiltersParams = useCallback(() => {
    searchParams.delete('countries');
    searchParams.delete('genres');
    searchParams.delete('yearFrom');
    searchParams.delete('yearTo');
    searchParams.delete('page');
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
