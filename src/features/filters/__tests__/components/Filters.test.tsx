import { screen } from '@testing-library/react';
import { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';

import { ProviderTestRender } from '@test/ProviderTestRender';
import Filters from '@features/filters/components/Filters';

describe('Filters component', () => {
  // Desktop
  describe('desktop version', () => {
    test('rednders as default', () => {
      ProviderTestRender(<Filters />, 'desktop');

      expect(screen.queryByTestId('filters-media')).toBeNull();
      expect(screen.getByTestId('filters-panel')).toBeInTheDocument();
    });
  });

  //   Mobile
  describe('mobile version', () => {
    test('rednders as default', () => {
      ReactDOM.createPortal = jest.fn((node: ReactNode) => node as ReactPortal);

      ProviderTestRender(<Filters />, 'mobile');

      expect(screen.getByTestId('filters-media')).toBeInTheDocument();
    });
  });
});
