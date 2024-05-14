import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import useUrlService from '@services/useUrlService';

import manageFilterUrlParam from './manage-filter-url-param';

const useFiltersUrlParamsService = () => {
  const { resetFiltersParams, updateFiltersParams } = useUrlService();
  const [searchParams] = useSearchParams();

  const updateParams = useCallback(
    (eventTarget: EventTarget, param: string) => {
      manageFilterUrlParam(searchParams, eventTarget, param);
      updateFiltersParams(searchParams);
    },
    [searchParams, updateFiltersParams],
  );

  const resetParams = useCallback(
    () => resetFiltersParams(),
    [resetFiltersParams],
  );

  return { updateParams, resetParams };
};

export default useFiltersUrlParamsService;
