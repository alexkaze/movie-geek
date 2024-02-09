import styles from './LoadingSpinner.module.scss';

type Props = {
  isLarge?: boolean;
};

const LoadingSpinner = ({ isLarge }: Props) => {
  const classes = isLarge
    ? `${styles['loading-spinner']} ${styles.large}`
    : `${styles['loading-spinner']}`;

  return <div data-testid="loading-spinner" className={classes}></div>;
};

export default LoadingSpinner;
