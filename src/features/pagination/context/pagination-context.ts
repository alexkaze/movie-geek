import { createContext } from 'react';

type PaginationState = {
  pagesQty: number;
  activePage: number;
  pagesArr: (string | number)[];
  pageClickHandler: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
};

const PaginationContext = createContext<PaginationState | null>(null);

export default PaginationContext;
