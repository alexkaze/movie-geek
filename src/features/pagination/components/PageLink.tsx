import { useContext } from 'react';
import { Link } from 'react-router-dom';

import PaginationContext from '../context/pagination-context';

import styles from './Pagination.module.scss';

type Props = {
  page: string | number;
};

const PageLink = ({ page }: Props) => {
  const { activePage, cleanParams } = useContext(PaginationContext);

  return (
    <Link
      to={
        page === activePage
          ? cleanParams + `&page=${activePage}`
          : cleanParams + `&page=${page}`
      }
      className={page === activePage ? styles['page--active'] : styles.page}
    >
      {page}
    </Link>
  );
};

export default PageLink;
