import { screen } from '@testing-library/react';

import { testCountriesSelectData } from '../../filters-test-data';

import { SelectTestRender } from './SelectTestRender';

describe('Select component', () => {
  // Non-Years Select
  describe('with non-years data', () => {
    test('renders as default (without selected option)', () => {
      SelectTestRender(null, testCountriesSelectData);

      expect(screen.getByText('Страна')).toBeInTheDocument();
      expect(screen.queryByText('США')).toBeNull();
      expect(screen.queryByText('Франция')).toBeNull();
    });

    test('renders options list after click event', async () => {
      const { user } = SelectTestRender(null, testCountriesSelectData);

      await user.click(await screen.findByText('Страна'));

      expect(await screen.findByText('США')).toBeInTheDocument();
      expect(await screen.findByText('Франция')).toBeInTheDocument();
    });

    test('renders with the text "США" as selected option', () => {
      SelectTestRender('США', testCountriesSelectData);

      expect(screen.getByText('США')).toBeInTheDocument();
    });
  });
});
