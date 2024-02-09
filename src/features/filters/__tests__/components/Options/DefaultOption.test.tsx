import { render, screen } from '@testing-library/react';

import DefaultOption from '@features/filters/components/Options/DefaultOption';
DefaultOption;

describe('DefaultOption component', () => {
  test('renders with paramIsEmpty=true', () => {
    render(<DefaultOption paramIsEmpty={true} />);

    const defOpt = screen.getByText('--- Не важно ---');

    expect(defOpt).toBeInTheDocument();
    expect(defOpt).toHaveClass('option selected');
    expect(defOpt).toHaveAttribute('data-active', 'active');
  });

  test('renders with paramIsEmpty=false', () => {
    render(<DefaultOption paramIsEmpty={false} />);

    const defOpt = screen.getByText('--- Не важно ---');

    expect(defOpt).toHaveClass('option');
    expect(defOpt).not.toHaveClass('option selected');
    expect(defOpt).not.toHaveAttribute('data-active');
  });
});
