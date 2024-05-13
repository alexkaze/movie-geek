import { createContext } from 'react';

import { SelectType } from '@features/filters/types/filters-types';

type FiltersData = {
  filters: SelectType[];
  canBeReseted: boolean;
  status: string;
  error: string;
};

type FiltersUI = {
  isDisplayed: boolean;
  shouldRender: boolean;
  modalHandler: (action: boolean) => void;
  animationEndHandler: () => void;
};

type FiltersUrl = {
  selectOption: (
    e: React.MouseEvent<Element, MouseEvent>,
    refCurrent: HTMLDivElement,
  ) => void;
  resetFilters: () => void;
};

type FiltersContextType = {
  filtersData: FiltersData;
  filtersUI: FiltersUI;
  filtersUrl: FiltersUrl;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export default FiltersContext;
