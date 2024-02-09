import checkSelectedOption from '@features/filters/context/select-context/checkSelectedOption';
import { testCountriesData } from '@features/filters/__tests__/filters-test-data';

describe('checkSelectedOption function', () => {
  const mockFn = jest.fn(checkSelectedOption);

  test('returns empty option', () => {
    mockFn('countries', '0', testCountriesData);

    expect(mockFn).toHaveReturnedWith({
      paramIsEmpty: true,
      selectedOptionUI: '',
    });
  });

  test('returns specific non-years option', () => {
    // США
    mockFn('countries', '1', testCountriesData);

    expect(mockFn).toHaveReturnedWith({
      paramIsEmpty: false,
      selectedOptionUI: 'США',
    });

    // Франция
    mockFn('countries', '2', testCountriesData);

    expect(mockFn).toHaveReturnedWith({
      paramIsEmpty: false,
      selectedOptionUI: 'Франция',
    });
  });

  test('returns years option', () => {
    // 2022
    mockFn('years', ['2022', '2022']);

    expect(mockFn).toHaveReturnedWith({
      paramIsEmpty: false,
      selectedOptionUI: '2022',
    });

    // 2010-2016
    mockFn('years', ['2010', '2016']);

    expect(mockFn).toHaveReturnedWith({
      paramIsEmpty: false,
      selectedOptionUI: '2010 - 2016',
    });
  });

  test('does not return wrong values', () => {
    mockFn('countries', '2', testCountriesData);

    expect(mockFn).not.toHaveReturnedWith({
      paramIsEmpty: true,
      selectedOptionUI: 'США',
    });
  });
});
