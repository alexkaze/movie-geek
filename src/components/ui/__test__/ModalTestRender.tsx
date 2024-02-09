import { render } from '@testing-library/react';

import Modal from '../Modal';

export const ModalTestRender = (isDisplayed: boolean) => {
  const modalHandler = jest.fn();

  render(
    <div id="modal-root">
      <Modal isDisplayed={isDisplayed} modalHandler={modalHandler}>
        <div>Modal children</div>
      </Modal>
    </div>
  );
};
