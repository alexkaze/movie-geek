import { SelectedOption } from '@features/filters/types/filters-types';

const validateOption = (selectedOption: SelectedOption) => {
  const paramIsEmpty = !selectedOption;
  const selectedOptionUI = paramIsEmpty ? '' : selectedOption;

  return { paramIsEmpty, selectedOptionUI };
};

export default validateOption;
