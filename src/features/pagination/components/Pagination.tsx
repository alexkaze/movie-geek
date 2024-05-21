import PaginationProvider from '../context/PaginationProvider';

import PagesNav from './PagesNav';

const Pagination = () => {
  return (
    <PaginationProvider>
      <PagesNav />
    </PaginationProvider>
  );
};

export default Pagination;
