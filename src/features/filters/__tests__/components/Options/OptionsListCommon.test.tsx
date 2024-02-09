import { render, screen } from '@testing-library/react';

import OptionsListCommon from '@features/filters/components/Options/OptionsListCommon';
import { testCountriesData } from '@features/filters/__tests__/filters-test-data';

describe('OptionsListCommon component', () => {
  test('renders as default (without selected option)', () => {
    render(
      <OptionsListCommon selectedOption={'0'} dataArr={testCountriesData} />
    );

    expect(screen.getByText('США')).toBeInTheDocument();
    expect(screen.getByText('Франция')).toBeInTheDocument();
  });

  test('renders with selectedOption=США', () => {
    render(
      <OptionsListCommon selectedOption={'1'} dataArr={testCountriesData} />
    );

    const options = screen.getAllByTestId('option');

    expect(options[0]).toHaveClass('option selected');
    expect(options[1]).not.toHaveClass('option selected');
  });
});
