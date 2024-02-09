import { createContext } from 'react';

type PaginationState = {
  pagesQty: number;
  activePage: number;
  pagesArr: (string | number)[];
  cleanParams: string;
  pageClickHandler: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const PaginationContext = createContext<PaginationState>({
  pagesQty: 5,
  activePage: 1,
  pagesArr: [],
  cleanParams: '',
  pageClickHandler: () => {},
});

export default PaginationContext;
