import { useRef } from 'react';

import useGetSelectContext from '@features/filters/context/select-context/useGetSelectContext';
import outsideEvent from '@features/filters/utils/outside-event';

import SelectArrow from './SelectArrow';

import styles from './SelectButton.module.scss';

const SelectButton = () => {
  const refSelectBtn = useRef<HTMLDivElement>(null);
  const { selectData, selectState, selectHandlers } = useGetSelectContext();

  const { title } = selectData;
  const { isDisplayed, paramIsEmpty, selectedOptionUI } = selectState;
  const { hideListHandler, toggleListHandler } = selectHandlers;

  outsideEvent(styles.btn, refSelectBtn.current!, isDisplayed, hideListHandler);

  return (
    <div
      data-testid="select-btn"
      ref={refSelectBtn}
      className={
        isDisplayed || !paramIsEmpty
          ? `${styles.btn} ${styles.active}`
          : styles.btn
      }
      onClick={toggleListHandler}
    >
      <div>{selectedOptionUI || title}</div>
      <SelectArrow isDisplayed={isDisplayed} />
    </div>
  );
};

export default SelectButton;
