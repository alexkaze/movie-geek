import { useContext } from 'react';
import { Link } from 'react-router-dom';

import PaginationContext from '../context/pagination-context';

import styles from './Pagination.module.scss';

const PageArrowR = () => {
  const { activePage, cleanParams, pagesQty } = useContext(PaginationContext);

  return (
    <Link
      to={
        activePage + 1 > pagesQty
          ? cleanParams + `&page=${activePage}`
          : cleanParams + `&page=${activePage + 1}`
      }
      className={
        activePage + 1 > pagesQty ? styles['arrow--invisible'] : styles.arrow
      }
    >
      &#62;
    </Link>
  );
};

export default PageArrowR;
