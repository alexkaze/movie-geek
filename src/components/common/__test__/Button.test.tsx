import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

describe('Button', () => {
  test('renders without props', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders with the specific text', () => {
    render(<Button text="Поиск" />);
    expect(screen.getByRole('button', { name: /Поиск/ })).toBeInTheDocument();
  });

  test('renders with default className', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveClass('btn');
  });

  test('renders with the additional className', () => {
    render(<Button className="test" />);
    expect(screen.getByRole('button')).toHaveClass('btn test');
  });

  test('renders with default type', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  test('renders with the specific type', () => {
    render(<Button type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('click works', async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(<Button text="Search" onClick={clickHandler} />);

    await user.click(screen.getByText(/search/i));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
