import { render, screen } from '@testing-library/react';

import OptionsListYears from '@features/filters/components/Options/OptionsListYears';
import { testYearsData } from '@features/filters/__tests__/filters-test-data';

describe('OptionsListYears component', () => {
  test('renders as default (without selected option)', () => {
    render(<OptionsListYears selectedOption={[]} dataArr={testYearsData} />);

    const options = screen.getAllByTestId('option');

    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getByText('2010 - 2016')).toBeInTheDocument();
    expect(options[0]).toHaveClass('option');
    expect(options[1]).toHaveClass('option');
    expect(options[0]).not.toHaveClass('option selected');
    expect(options[1]).not.toHaveClass('option selected');
  });

  test('renders with selectedOption=2022', () => {
    render(
      <OptionsListYears
        selectedOption={['2022', '2022']}
        dataArr={testYearsData}
      />
    );

    const options = screen.getAllByTestId('option');
    expect(options[0]).toHaveClass('option selected');
    expect(options[1]).not.toHaveClass('option selected');
  });
});
