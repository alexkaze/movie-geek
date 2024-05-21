import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import { URL_PARAMS } from '@config/url-params';
import getPagesArr from '@features/pagination/utils/get-pages-array';

const usePaginationService = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pagesQty } = useAppSelector(state => state.movies);
  const activePage = Number(searchParams.get(URL_PARAMS.page)) || 1;

  const pagesArr = getPagesArr(
    pagesQty,
    activePage,
    pagesQty < 8 ? pagesQty : 7
  );

  const navigateToPage = useCallback(
    (page: number) => {
      searchParams.set(URL_PARAMS.page, `${page}`);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const pageClickHandler = useCallback(
    (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      e.preventDefault();

      const targetEl = (e.target as Element)?.closest('span') as HTMLElement;
      if (!targetEl) return;

      const targetPage = Number(targetEl.dataset.value);
      if (targetPage === activePage) return;
      navigateToPage(targetPage);
    },
    [activePage, navigateToPage]
  );

  return {
    pagesQty,
    activePage,
    pagesArr,
    pageClickHandler
  };
};

export default usePaginationService;
