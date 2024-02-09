import { useContext } from 'react';
import { Link } from 'react-router-dom';

import PaginationContext from '../context/pagination-context';

import styles from './Pagination.module.scss';

const PageArrowL = () => {
  const { activePage, cleanParams } = useContext(PaginationContext);

  return (
    <Link
      to={
        activePage - 1 !== 0
          ? cleanParams + `&page=${activePage - 1}`
          : cleanParams + `&page=${activePage}`
      }
      className={
        activePage - 1 !== 0 ? styles.arrow : styles['arrow--invisible']
      }
    >
      &#60;
    </Link>
  );
};

export default PageArrowL;
