import { SelectType } from '@features/filters/types/filters-types';
import useDisplayAnimation from '@hooks/useDisplayAnimation';

import validateOption from './validate-option';

import SelectContext from './select-context';

type Props = {
  selectObjData: SelectType;
  children: React.ReactNode;
};

const SelectProvider = ({ selectObjData, children }: Props) => {
  const { isDisplayed, shouldRender, displayHandler, animationEndHandler } =
    useDisplayAnimation();

  const { title, param, selectedOption, dataArr } = { ...selectObjData };

  const { paramIsEmpty, selectedOptionUI } = validateOption(selectedOption);

  const hideListHandler = () => displayHandler(false);
  const toggleListHandler = () => displayHandler(!isDisplayed);

  const selectData = { title, selectedOption, param, dataArr };

  const selectState = {
    isDisplayed,
    shouldRender,
    paramIsEmpty,
    selectedOptionUI
  };

  const selectHandlers = {
    hideListHandler,
    toggleListHandler,
    animationEndHandler
  };

  const context = {
    selectData,
    selectState,
    selectHandlers
  };

  return (
    <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
  );
};

export default SelectProvider;
