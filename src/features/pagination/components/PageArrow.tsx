import styles from './PageArrow.module.scss';

type Props = {
  page: number;
  hidden: boolean;
  children: React.ReactNode;
};

const PageArrow = ({ page, hidden, children }: Props) => {
  return (
    <span
      data-value={page}
      className={
        hidden ? `${styles.arrow} ${styles['arrow--hidden']}` : styles.arrow
      }
    >
      {children}
    </span>
  );
};

export default PageArrow;
