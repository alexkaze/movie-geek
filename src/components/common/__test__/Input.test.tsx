import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../Input';

describe('Input', () => {
  test('renders without props', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders with default className', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toHaveClass('input');
  });

  test('renders with the additional className', () => {
    render(<Input className="test" />);
    expect(screen.getByRole('textbox')).toHaveClass('input test');
  });

  test('renders with the specific value', () => {
    render(<Input value="some text" onChange={() => {}} />);
    expect(screen.getByDisplayValue(/some text/i)).toBeInTheDocument();
  });

  test('renders with the specific type', () => {
    render(<Input type="text" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  test('changes while typing', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<Input type="text" onChange={onChange} />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input.value).toBe('');

    await user.type(input, 'Movie');

    expect(input.value).toBe('Movie');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
