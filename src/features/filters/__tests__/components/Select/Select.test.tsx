import { screen } from '@testing-library/react';

import {
  testCountriesSelectData,
  testYearsSelectData,
} from '@features/filters/__tests__/filters-test-data';

import { SelectTestRender } from './SelectTestRender';

describe('Select component', () => {
  // Non-Years Select
  describe('with non-years data', () => {
    test('renders as default (without selected option)', () => {
      SelectTestRender('0', testCountriesSelectData);

      expect(screen.getByText('Страна')).toBeInTheDocument();
      expect(screen.queryByText('США')).toBeNull();
      expect(screen.queryByText('Франция')).toBeNull();
    });

    test('renders options list after click event', async () => {
      const { user } = SelectTestRender('0', testCountriesSelectData);

      await user.click(screen.getByText('Страна'));

      expect(screen.getByText('США')).toBeInTheDocument();
      expect(screen.getByText('Франция')).toBeInTheDocument();
    });

    test('renders with the text "США" as selected option', () => {
      SelectTestRender('1', testCountriesSelectData);

      expect(screen.getByText('США')).toBeInTheDocument();
    });
  });

  // Years Select
  describe('with years data', () => {
    test('renders as default (without selected option)', () => {
      SelectTestRender([], testYearsSelectData);

      expect(screen.getByText('Год')).toBeInTheDocument();
      expect(screen.queryByText('2022')).toBeNull();
      expect(screen.queryByText('2010 - 2016')).toBeNull();
    });

    test('renders options list after click event', async () => {
      const { user } = SelectTestRender([], testYearsSelectData);

      await user.click(screen.getByText('Год'));

      expect(screen.getByText('2022')).toBeInTheDocument();
      expect(screen.getByText('2010 - 2016')).toBeInTheDocument();
    });

    test('renders with the text "2010 - 2016" as selected option', () => {
      SelectTestRender(['2010', '2016'], testYearsSelectData);

      expect(screen.getByText('2010 - 2016')).toBeInTheDocument();
    });
  });
});
