import { render, screen } from '@testing-library/react';

import Error from '../Error';

describe('Error Component', () => {
  test('renders', () => {
    render(
      <Error>
        <div>Ошибка</div>
      </Error>
    );
    expect(screen.getByText(/Нет результатов/)).toBeInTheDocument();
    expect(screen.getByText(/Ошибка/)).toBeInTheDocument();
  });
});
