import { createContext } from 'react';

import { SelectType } from '@features/filters/types/filters-types';

type SelectState = {
  selectData: SelectType;
  selectState: {
    isDisplayed: boolean;
    shouldRender: boolean;
    paramIsEmpty: boolean;
    selectedOptionUI: string;
  };
  selectHandlers: {
    hideListHandler: () => void;
    toggleListHandler: () => void;
    animationEndHandler: () => void;
  };
};

const SelectContext = createContext<SelectState | null>(null);

export default SelectContext;
