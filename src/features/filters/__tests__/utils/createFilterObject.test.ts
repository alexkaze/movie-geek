import createFilterObject from '@features/filters/utils/create-filter-object';

import { testCountriesData } from '../filters-test-data';

describe('createFilterObject function', () => {
  test('returns correct object', () => {
    const mockFn = jest.fn(createFilterObject);

    mockFn('Страна', 'country', 'США', testCountriesData);

    expect(mockFn).toHaveReturnedWith({
      title: 'Страна',
      param: 'country',
      selectedOption: 'США',
      dataArr: testCountriesData,
    });
  });
});
