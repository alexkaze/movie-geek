import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '@store/hooks';
import getPagesArr from '@features/pagination/utils/get-pages-array';

const useGetPages = () => {
  const { pagesQty } = useAppSelector(state => state.movies);
  const [searchParams] = useSearchParams();

  const activePage = Number(searchParams.get('page')) || 1;

  const pagesArr = getPagesArr(
    pagesQty,
    activePage,
    pagesQty < 8 ? pagesQty : 7
  );

  const pageClickHandler = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.preventDefault();
      if (Number(e.currentTarget.textContent) === activePage) return;
    },
    [activePage]
  );

  return {
    pagesQty,
    activePage,
    pagesArr,
    pageClickHandler,
  };
};

export default useGetPages;
