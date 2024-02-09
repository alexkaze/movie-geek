import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '@features/filters/components/Select/Select';
import {
  TestCountriesSelectData,
  TestYearsSelectData,
} from '@features/filters/__tests__/filters-test-data';

export const SelectTestRender = (
  selectedOption: string | string[],
  selectData: TestCountriesSelectData | TestYearsSelectData
) => {
  const user = userEvent.setup();
  const { title, param, dataArr } = selectData;

  const objData = { title, param, selectedOption, dataArr };

  return {
    user,
    ...render(<Select selectObjData={objData} />),
  };
};
