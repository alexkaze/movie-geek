import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';
import { screen } from '@testing-library/react';

import FiltersProvider from '@features/filters/context/filters-context/FiltersProvider';
import FiltersMedia from '@features/filters/components/FiltersMedia/FiltersMedia';

import { ProviderTestRender } from '@test/ProviderTestRender';

const UI = (
  <FiltersProvider>
    <FiltersMedia />
  </FiltersProvider>
);

describe('FiltersMedia component', () => {
  ReactDOM.createPortal = jest.fn((node: ReactNode) => node as ReactPortal);

  test('renders as default', () => {
    ProviderTestRender(UI, 'mobile');

    expect(screen.getByTestId('filters-media')).toBeInTheDocument();
  });

  test('renders FiltersPanel after click on "Фильтр"', async () => {
    const { user } = ProviderTestRender(UI, 'mobile');

    await user.click(screen.getByText('Фильтр'));

    expect(screen.getByTestId('filters-panel')).toBeInTheDocument();
  });
});
