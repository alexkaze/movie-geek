import useDisplayAnimation from '@hooks/useDisplayAnimation';
import bodyScroll from '@utils/body-scroll';
import Modal from '@components/ui/Modal';

import NavbarBtn from './NavbarBtn';
import NavbarLinks from './NavbarList';

import styles from './Navbar.module.scss';

const NavbarMedia = () => {
  const { isDisplayed, shouldRender, animationEndHandler, displayHandler } =
    useDisplayAnimation();

  const modalHandler = (action: boolean) => bodyScroll(action, displayHandler);

  return (
    <>
      <NavbarBtn isDisplayed={isDisplayed} modalHandler={modalHandler} />

      {shouldRender && (
        <Modal
          className={styles.modal}
          isDisplayed={isDisplayed}
          modalHandler={() => modalHandler(false)}
        >
          <NavbarLinks
            isDisplayed={isDisplayed}
            modalHandler={modalHandler}
            animationEndHandler={animationEndHandler}
          />
        </Modal>
      )}
    </>
  );
};

export default NavbarMedia;
