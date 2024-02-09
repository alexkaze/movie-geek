import 'dotenv/config';

import { screen } from '@testing-library/react';
import { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';

import FiltersService from '@features/filters/services/FiltersService';
import FiltersProvider from '@features/filters/context/filters-context/FiltersProvider';
import FiltersPanel from '@features/filters/components/FiltersPanel/FiltersPanel';
import { ProviderTestRender } from '@test/ProviderTestRender';
import FiltersMedia from '@features/filters/components/FiltersMedia/FiltersMedia';

const configUI = (ver = 'desktop') => {
  return (
    <FiltersService>
      <FiltersProvider>
        {ver === 'mobile' ? <FiltersMedia /> : <FiltersPanel />}
      </FiltersProvider>
    </FiltersService>
  );
};

const testRoute =
  '/search?keyword=тест&countries=1&genres=2&yearFrom=2010&yearTo=2016';

describe('Filters component', () => {
  // Desktop
  describe('desktop version', () => {
    const version = 'desktop';

    test('rednders as default', () => {
      ProviderTestRender(configUI(version), version);

      expect(screen.getByText('Страна')).toBeInTheDocument();
      expect(screen.getByText('Жанр')).toBeInTheDocument();
      expect(screen.getByText('Год')).toBeInTheDocument();
      expect(screen.getByText('Сбросить')).toBeInTheDocument();
    });

    test('renders with selected options', async () => {
      ProviderTestRender(configUI(version), version, testRoute);

      expect(await screen.findByText('США')).toBeInTheDocument();
      expect(await screen.findByText('драма')).toBeInTheDocument();
      expect(await screen.findByText('2010 - 2016')).toBeInTheDocument();
    });

    test('reset selected options', async () => {
      const { user } = ProviderTestRender(
        configUI(version),
        version,
        testRoute
      );

      await user.click(screen.getByText('Сбросить'));

      expect(await screen.findByText('Страна')).toBeInTheDocument();
      expect(await screen.findByText('Жанр')).toBeInTheDocument();
      expect(await screen.findByText('Год')).toBeInTheDocument();
    });
  });

  //   Mobile
  describe('mobile version', () => {
    const version = 'mobile';

    test('rednders as default', () => {
      ReactDOM.createPortal = jest.fn((node: ReactNode) => node as ReactPortal);

      ProviderTestRender(configUI(version), version);

      expect(screen.getByTestId('filters-media')).toBeInTheDocument();

      expect(screen.getByText('Фильтр')).toBeInTheDocument();
    });

    test('rednders FiltersPanel after clicking on "Фильтр"', async () => {
      ReactDOM.createPortal = jest.fn((node: ReactNode) => node as ReactPortal);

      const { user } = ProviderTestRender(configUI(version), version);

      await user.click(screen.getByText('Фильтр'));

      expect(await screen.findByTestId('filters-panel')).toBeInTheDocument();
    });
  });
});
