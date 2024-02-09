import {
  SelectParam,
  SelectedOption,
  FilterItems,
} from '@features/filters/types/filters-types';

const checkSelectedOption = (
  param: SelectParam,
  selectedOption: SelectedOption,
  dataArr?: FilterItems
) => {
  let paramIsEmpty = true;
  let selectedOptionUI = '';

  // NonYears checking
  if (param !== 'years') {
    paramIsEmpty = selectedOption === '0';

    selectedOptionUI =
      (dataArr as FilterItems)[Number(selectedOption) - 1]?.item || '';
  }

  // Years checking
  if (param === 'years' && Array.isArray(selectedOption)) {
    paramIsEmpty = selectedOption[0] === '0' || selectedOption[1] === '0';

    if (selectedOption[0] === '0' && selectedOption[1] === '0')
      selectedOptionUI = '';

    if (selectedOption[0] !== '0' && selectedOption[1] !== '0') {
      selectedOptionUI =
        selectedOption[0] === selectedOption[1]
          ? selectedOption[0] || selectedOption[1]
          : `${selectedOption[0]} - ${selectedOption[1]}`;
    }
  }

  return { paramIsEmpty, selectedOptionUI };
};

export default checkSelectedOption;
