import styles from './SelectArrow.module.scss';

type Props = {
  isDisplayed: boolean;
};

const SelectArrow = ({ isDisplayed }: Props) => {
  const classes = isDisplayed
    ? `${styles.arrow} ${styles.up}`
    : `${styles.arrow}`;

  return <div data-testid="select-arrow" className={classes}></div>;
};

export default SelectArrow;
