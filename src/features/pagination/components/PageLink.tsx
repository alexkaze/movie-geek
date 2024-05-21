import styles from './PageLink.module.scss';

const PageLink = ({ page, isActive }: { page: number; isActive: boolean }) => {
  return (
    <span
      data-value={page}
      className={
        isActive ? `${styles.page} ${styles['page--active']}` : styles.page
      }
    >
      {page}
    </span>
  );
};

export default PageLink;
