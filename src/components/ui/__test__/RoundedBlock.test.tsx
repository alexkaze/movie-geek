import { render, screen } from '@testing-library/react';

import RoundedBlock from '../RoundedBlock';

describe('RoundedBlock', () => {
  test('renders', () => {
    render(
      <RoundedBlock className="addStyle">
        <div>RoundedBlock children</div>
      </RoundedBlock>
    );

    expect(screen.getByTestId('rounded-block')).toHaveClass(
      'rounded-block addStyle'
    );
    expect(screen.getByText('RoundedBlock children')).toBeInTheDocument();
  });
});
