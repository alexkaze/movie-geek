import styles from './NavbarBtn.module.scss';

const NavbarBtn = ({
  isDisplayed,
  modalHandler
}: {
  isDisplayed: boolean;
  modalHandler: (action: boolean) => void;
}) => {
  return (
    <div
      className={isDisplayed ? `${styles.btn} ${styles.active}` : styles.btn}
      onClick={() => modalHandler(!isDisplayed)}
    >
      <div className={styles.line}></div>
    </div>
  );
};

export default NavbarBtn;
