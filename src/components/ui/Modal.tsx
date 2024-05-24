import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

type Props = {
  isDisplayed: boolean;
  modalHandler: () => void;
  className?: string;
  children?: React.ReactNode;
};

const portalElement = document.getElementById('modal-root') as HTMLDivElement;

const Modal = ({ className, isDisplayed, modalHandler, children }: Props) => {
  const modalStyles = isDisplayed
    ? styles.backdrop
    : `${styles.backdrop} ${styles.close}`;

  return (
    <>
      {createPortal(
        <div
          data-testid="backdrop"
          className={className ? `${modalStyles} ${className}` : modalStyles}
          onClick={modalHandler}
        ></div>,
        portalElement
      )}
      {createPortal(<>{children}</>, portalElement)}
    </>
  );
};

export default Modal;
