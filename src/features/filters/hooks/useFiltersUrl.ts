import { useCallback } from 'react';

import useFiltersUrlParamsService from '../services/useFiltersUrlParamsService';
import checkSelectedFilter from '../utils/checkSelectedFilter';

const useFiltersUrl = () => {
  const { updateParams, resetParams: resetFilters } =
    useFiltersUrlParamsService();

  const selectOption = useCallback(
    (
      e: React.MouseEvent<Element, MouseEvent>,
      refCurrent: HTMLDivElement | null
    ) => {
      const param = checkSelectedFilter(e.target, refCurrent);
      if (!param) return;
      updateParams(e.target, param);
    },
    [updateParams]
  );

  return { selectOption, resetFilters };
};

export default useFiltersUrl;
