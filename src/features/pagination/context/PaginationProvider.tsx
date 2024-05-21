import usePaginationService from '../services/usePaginationService';

import PaginationContext from './pagination-context';

type Props = {
  children: React.ReactNode;
};

const PaginationProvider = ({ children }: Props) => {
  const { pagesQty, activePage, pagesArr, pageClickHandler } =
    usePaginationService();

  const context = {
    pagesQty,
    activePage,
    pagesArr,
    pageClickHandler
  };

  return (
    <PaginationContext.Provider value={context}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
