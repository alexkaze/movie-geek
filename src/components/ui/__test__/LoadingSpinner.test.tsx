import { render, screen } from '@testing-library/react';

import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('renders', () => {
    render(<LoadingSpinner />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders with prop "large"', () => {
    render(<LoadingSpinner isLarge={true} />);

    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('large');
  });
});
