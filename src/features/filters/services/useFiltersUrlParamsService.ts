import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FILTERS_URL_PARAMS } from '@features/filters/config/filters-config';
import useUrlService from '@services/useUrlService';

import checkNonYearsParam from '../utils/checkNonYearsParam';
import checkYearsParam from '../utils/checkYearsParam';

const useFiltersUrlParamsService = () => {
  const { resetFiltersParams, updateFiltersParams } = useUrlService();
  const [searchParams] = useSearchParams();

  const updateParams = useCallback(
    (eventTarget: EventTarget, param: string) => {
      // NonYears Filter
      if (param !== 'years')
        checkNonYearsParam(searchParams, eventTarget, param);

      // Years Filter
      if (param === 'years')
        checkYearsParam(
          searchParams,
          eventTarget,
          FILTERS_URL_PARAMS.yearFrom,
          FILTERS_URL_PARAMS.yearTo
        );

      // Final
      updateFiltersParams(searchParams);
    },
    [searchParams, updateFiltersParams]
  );

  const resetParams = useCallback(
    () => resetFiltersParams(),
    [resetFiltersParams]
  );

  // Country or Genre Filter
  return { updateParams, resetParams };
};

export default useFiltersUrlParamsService;
