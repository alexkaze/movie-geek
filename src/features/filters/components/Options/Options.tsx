import { useContext } from 'react';

import { FilterItems, FilterYears } from '../../types/filters-types';
import SelectContext from '../../context/select-context/select-context';

import DefaultOption from './DefaultOption';
import OptionsListCommon from './OptionsListCommon';
import OptionsListYears from './OptionsListYears';

import styles from './Options.module.scss';

const Options = () => {
  const { selectData, selectState, selectHandlers } = useContext(SelectContext);

  const { selectedOption, param, dataArr } = selectData;
  const { isDisplayed, shouldRender, paramIsEmpty } = selectState;
  const { animationEndHandler } = selectHandlers;

  return shouldRender ? (
    <ul
      data-param={param}
      className={
        isDisplayed ? styles.options : `${styles.options} ${styles.close}`
      }
      onAnimationEnd={animationEndHandler}
    >
      <DefaultOption paramIsEmpty={paramIsEmpty} />

      {param !== 'years' ? (
        <OptionsListCommon
          selectedOption={selectedOption as string}
          dataArr={dataArr as FilterItems}
        />
      ) : (
        <OptionsListYears
          selectedOption={selectedOption as string[]}
          dataArr={dataArr as FilterYears}
        />
      )}
    </ul>
  ) : (
    <></>
  );
};

export default Options;
