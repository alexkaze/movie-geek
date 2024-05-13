import useGetSelectContext from '@features/filters/context/select-context/useGetSelectContext';

import DefaultOption from './DefaultOption';
import OptionsList from './OptionsList';

import styles from './Options.module.scss';

const Options = () => {
  const { selectData, selectState, selectHandlers } = useGetSelectContext();

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
      <OptionsList selectedOption={selectedOption} dataArr={dataArr} />
    </ul>
  ) : (
    <></>
  );
};

export default Options;
