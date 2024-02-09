import { screen } from '@testing-library/react';

import {
  testCountriesSelectData,
  testYearsSelectData,
} from '@features/filters/__tests__/filters-test-data';

import { SelectTestRender } from './SelectTestRender';

describe('SelectButton', () => {
  test('renders as default', () => {
    SelectTestRender('0', testCountriesSelectData);

    expect(screen.getByText('Страна')).toBeInTheDocument();
    expect(screen.getByTestId('select-arrow')).toBeInTheDocument();
  });

  test('renders with new styles after click event', async () => {
    const { user } = SelectTestRender('0', testCountriesSelectData);

    const selectBtn = screen.getByTestId('select-btn');

    await user.click(selectBtn);

    expect(selectBtn).toHaveClass('btn active');
  });

  test('renders with the text "США" as selected option', () => {
    SelectTestRender('1', testCountriesSelectData);

    expect(screen.getByText('США')).toBeInTheDocument();
  });

  test('renders with the text "2010 - 2016" as selected option', () => {
    SelectTestRender(['2010', '2016'], testYearsSelectData);

    expect(screen.getByText('2010 - 2016')).toBeInTheDocument();
  });
});
