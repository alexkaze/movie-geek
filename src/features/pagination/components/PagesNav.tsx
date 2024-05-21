import useGetPaginationContext from '../context/useGetPaginationContext';

import PageArrow from './PageArrow';
import PageLink from './PageLink';

import styles from './PagesNav.module.scss';

const PagesNav = () => {
  const { activePage, pagesArr, pagesQty, pageClickHandler } =
    useGetPaginationContext();

  return (
    <nav className={styles['pages-nav']}>
      <ul className={styles['pages-list']} onClick={pageClickHandler}>
        <li>
          <PageArrow page={activePage - 1} hidden={activePage - 1 === 0}>
            &#60;
          </PageArrow>
        </li>

        {pagesArr.map((page, i) => (
          <li key={i}>
            {page === '...' ? (
              <div className={styles.separator}>{page}</div>
            ) : (
              <PageLink page={page as number} isActive={page === activePage} />
            )}
          </li>
        ))}

        <li>
          <PageArrow page={activePage + 1} hidden={activePage + 1 > pagesQty}>
            &#62;
          </PageArrow>
        </li>
      </ul>
    </nav>
  );
};

export default PagesNav;
