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

const SelectContext = createContext<SelectState>({
  selectData: {
    title: 'Страна',
    selectedOption: '1',
    param: 'countries',
    dataArr: [],
  },
  selectState: {
    isDisplayed: false,
    shouldRender: false,
    paramIsEmpty: false,
    selectedOptionUI: 'Страна',
  },
  selectHandlers: {
    hideListHandler: () => {},
    toggleListHandler: () => {},
    animationEndHandler: () => {},
  },
});

export default SelectContext;
