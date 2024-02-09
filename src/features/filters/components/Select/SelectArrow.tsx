import styles from './SelectArrow.module.scss';

type Props = {
  isDisplayed: boolean;
};

const SelectArrow = ({ isDisplayed }: Props) => {
  return (
    <div
      data-testid="select-arrow"
      className={`${styles.arrow} ${isDisplayed ? `${styles.up}` : ''}`}
    ></div>
  );
};

export default SelectArrow;
