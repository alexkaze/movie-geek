import { render, screen } from '@testing-library/react';

import SelectArrow from '@features/filters/components/Select/SelectArrow';

describe('SelectArrow', () => {
  test('redners with isDisplayed=false', () => {
    render(<SelectArrow isDisplayed={false} />);

    expect(screen.getByTestId('select-arrow')).toBeInTheDocument();
  });

  test('redners with isDisplayed=true', () => {
    render(<SelectArrow isDisplayed={true} />);

    expect(screen.getByTestId('select-arrow')).toHaveClass('arrow up');
  });
});
