import { useContext } from 'react';

import PaginationContext from './pagination-context';

const useGetPaginationContext = () => {
  const ctx = useContext(PaginationContext);
  if (ctx === null) throw Error('select context is null');
  const { pagesQty, activePage, pagesArr, pageClickHandler } = ctx;

  return { pagesQty, activePage, pagesArr, pageClickHandler };
};

export default useGetPaginationContext;
