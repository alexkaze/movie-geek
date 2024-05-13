import { useCallback } from 'react';

import useFiltersUrlParamsService from '../services/useFiltersUrlParamsService';

import validateFilter from '../utils/validate-filter';

const useFiltersUrl = () => {
  const { updateParams, resetParams: resetFilters } =
    useFiltersUrlParamsService();

  const selectOption = useCallback(
    (e: React.MouseEvent<Element, MouseEvent>, refCurrent: HTMLDivElement) => {
      const param = validateFilter(e.target, refCurrent);
      if (!param) return;
      updateParams(e.target, param);
    },
    [updateParams],
  );

  return { selectOption, resetFilters };
};

export default useFiltersUrl;
