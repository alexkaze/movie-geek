import PaginationProvider from '../context/PaginationProvider';

import PageArrowL from './PageArrowL';
import Pages from './Pages';
import PageArrowR from './PageArrowR';

import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <PaginationProvider>
      <nav className={styles['pages-nav']}>
        <ul className={styles['pages-list']}>
          <li>
            <PageArrowL />
          </li>

          <Pages />

          <li>
            <PageArrowR />
          </li>
        </ul>
      </nav>
    </PaginationProvider>
  );
};

export default Pagination;
