import { render, screen } from '@testing-library/react';

import OptionsList from '@features/filters/components/Options/OptionsList';
import { testCountriesData } from '@features/filters/__tests__/filters-test-data';

describe('OptionsList component', () => {
  test('renders as default (without selected option)', () => {
    render(<OptionsList selectedOption={null} dataArr={testCountriesData} />);

    expect(screen.getByText('США')).toBeInTheDocument();
    expect(screen.getByText('Франция')).toBeInTheDocument();
  });

  test('renders with selectedOption=США', () => {
    render(<OptionsList selectedOption={'США'} dataArr={testCountriesData} />);

    const options = screen.getAllByTestId('option');

    expect(options[0]).toHaveClass('option selected');
    expect(options[1]).not.toHaveClass('option selected');
  });
});
