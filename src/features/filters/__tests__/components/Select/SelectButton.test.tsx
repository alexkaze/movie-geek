import { screen } from '@testing-library/react';

import { testCountriesSelectData } from '@features/filters/__tests__/filters-test-data';

import { SelectTestRender } from './SelectTestRender';

describe('SelectButton', () => {
  test('renders as default', () => {
    SelectTestRender(null, testCountriesSelectData);

    expect(screen.getByText('Страна')).toBeInTheDocument();
    expect(screen.getByTestId('select-arrow')).toBeInTheDocument();
  });

  test('renders with new styles after click event', async () => {
    const { user } = SelectTestRender(null, testCountriesSelectData);

    const selectBtn = screen.getByTestId('select-btn');

    await user.click(selectBtn);

    expect(selectBtn).toHaveClass('btn active');
  });

  test('renders with the text "США" as selected option', () => {
    SelectTestRender('США', testCountriesSelectData);

    expect(screen.getByText('США')).toBeInTheDocument();
  });
});
