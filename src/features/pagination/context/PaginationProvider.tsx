import { useLocation } from 'react-router-dom';

import useGetPages from '../services/useGetPages';

import PaginationContext from './pagination-context';

type Props = {
  children: React.ReactNode;
};

const PaginationProvider = ({ children }: Props) => {
  const { pagesQty, activePage, pagesArr, pageClickHandler } = useGetPages();
  const cleanParams = useLocation().search.replace(/&page.*/i, '');

  const context = {
    pagesQty,
    activePage,
    pagesArr,
    cleanParams,
    pageClickHandler,
  };

  return (
    <PaginationContext.Provider value={context}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
