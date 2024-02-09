import { useContext } from 'react';

import PaginationContext from '../context/pagination-context';

import PageLink from './PageLink';

import styles from './Pagination.module.scss';

const Pages = () => {
  const { pagesArr, pageClickHandler } = useContext(PaginationContext);

  return (
    <>
      {pagesArr.map(page => (
        <li key={page} onClick={pageClickHandler}>
          {page === '...' ? (
            <div className={styles.separator}>{page}</div>
          ) : (
            <PageLink page={page} />
          )}
        </li>
      ))}
    </>
  );
};

export default Pages;
