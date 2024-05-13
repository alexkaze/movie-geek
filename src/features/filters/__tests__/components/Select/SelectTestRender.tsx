import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SelectedOption } from '@features/filters/types/filters-types';
import { TestCountriesSelectData } from '@features/filters/__tests__/filters-test-data';
import Select from '@features/filters/components/Select/Select';

export const SelectTestRender = (
  selectedOption: SelectedOption,
  selectData: TestCountriesSelectData,
) => {
  const user = userEvent.setup();
  const { title, param, dataArr } = selectData;

  const objData = { title, param, selectedOption, dataArr };

  return {
    user,
    ...render(<Select selectObjData={objData} />),
  };
};
