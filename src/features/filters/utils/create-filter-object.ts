import {
  SelectedOption,
  FilterItems,
  SelectType,
} from '@features/filters/types/filters-types';

export default (
  title: string,
  param: string,
  selectedOption: SelectedOption,
  dataArr: FilterItems,
): SelectType => ({ title, param, selectedOption, dataArr });
