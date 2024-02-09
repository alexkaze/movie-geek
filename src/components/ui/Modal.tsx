import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

type Props = {
  isDisplayed: boolean;
  modalHandler: (action: boolean) => void;
  children?: React.ReactNode;
};

const portalElement = document.getElementById('modal-root') as HTMLDivElement;

const Modal = ({ isDisplayed, modalHandler, children }: Props) => {
  const modalStyles = isDisplayed
    ? styles.backdrop
    : `${styles.backdrop} ${styles.close}`;

  return (
    <>
      {createPortal(
        <div
          data-testid="backdrop"
          className={modalStyles}
          onClick={() => modalHandler(false)}
        ></div>,
        portalElement
      )}
      {createPortal(<>{children}</>, portalElement)}
    </>
  );
};

export default Modal;
