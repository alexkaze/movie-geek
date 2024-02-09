import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';
import { screen } from '@testing-library/react';

import { ModalTestRender } from './ModalTestRender';

describe('Modal Component', () => {
  ReactDOM.createPortal = jest.fn((node: ReactNode) => node as ReactPortal);

  test('renders when isDisplayed=false', () => {
    ModalTestRender(false);

    const backdrop = screen.getByTestId('backdrop');
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveClass('backdrop close');
    expect(screen.getByText(/Modal children/)).toBeInTheDocument();
  });

  test('renders when isDisplayed=true', () => {
    ModalTestRender(true);

    const backdrop = screen.getByTestId('backdrop');
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveClass('backdrop');
    expect(backdrop).not.toHaveClass('close');
    expect(screen.getByText(/Modal children/)).toBeInTheDocument();
  });
});
