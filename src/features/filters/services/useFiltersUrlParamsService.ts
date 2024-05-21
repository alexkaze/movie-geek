import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { URL_PARAMS, URL_PARAMS_ORDER } from '@config/url-params';

const useFiltersUrlParamsService = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = useCallback(
    (eventTarget: EventTarget, param: string) => {
      const selectedOption = (
        (eventTarget as Element)?.closest('li') as HTMLElement
      )?.dataset?.value;

      if (!selectedOption) searchParams.delete(param);
      if (selectedOption) searchParams.set(param, selectedOption);

      const urlParamsInOrder = URL_PARAMS_ORDER.map(param =>
        searchParams.has(param) ? `${param}=${searchParams.get(param)}` : ''
      ).join('&');

      setSearchParams(urlParamsInOrder);
    },
    [searchParams, setSearchParams]
  );

  const resetParams = useCallback(() => {
    searchParams.delete(URL_PARAMS.country);
    searchParams.delete(URL_PARAMS.genre);
    searchParams.delete(URL_PARAMS.year);
    searchParams.delete(URL_PARAMS.page);

    setSearchParams(searchParams);
  }, []);

  return { updateParams, resetParams };
};

export default useFiltersUrlParamsService;
