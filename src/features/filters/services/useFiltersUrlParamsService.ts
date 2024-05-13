import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import useUrlService from '@services/useUrlService';

import manageUrlParam from './manage-url-param';

const useFiltersUrlParamsService = () => {
  const { resetFiltersParams, updateFiltersParams } = useUrlService();
  const [searchParams] = useSearchParams();

  const updateParams = useCallback(
    (eventTarget: EventTarget, param: string) => {
      manageUrlParam(searchParams, eventTarget, param);
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
