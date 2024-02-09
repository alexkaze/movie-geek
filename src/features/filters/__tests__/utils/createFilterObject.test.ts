import createFilterObject from '@features/filters/utils/createFilterObject';

import { testCountriesData } from '../filters-test-data';

describe('createFilterObject function', () => {
  test('returns correct object', () => {
    const mockFn = jest.fn(createFilterObject);

    mockFn('Страна', 'countries', '1', testCountriesData);

    expect(mockFn).toHaveReturnedWith({
      title: 'Страна',
      param: 'countries',
      selectedOption: '1',
      dataArr: testCountriesData,
    });
  });
});
