import {
  SelectType,
  SelectTitle,
  SelectParam,
  SelectedOption,
  SelectDataArr,
} from '@features/filters/types/filters-types';

export default (
  title: SelectTitle,
  param: SelectParam,
  selectedOption: SelectedOption,
  dataArr: SelectDataArr
): SelectType => {
  return { title, param, selectedOption, dataArr };
};
