import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TestComponent from './TestComponent';

describe('outsideEvent hook', () => {
  test('works with default state (list is hidden)', () => {
    render(<TestComponent />);

    expect(screen.getByText('Click btn')).not.toHaveClass('btn active');
    expect(screen.queryByText('List')).toBeNull();
  });

  test('closes list by clicking on outside element', async () => {
    const user = userEvent.setup();

    render(<TestComponent />);

    await user.click(screen.getByText('Click btn'));
    expect(await screen.findByText('List')).toBeInTheDocument();

    await user.click(screen.getByText('Outside event'));
    expect(screen.queryByText('List')).toBeNull();
  });
});
