import {
  FilterItems,
  FilterYears,
} from '@features/filters/types/filters-types';

import { FILTERS_DATA_PARAMS } from '../config/filters-config';

export const testCountriesData: FilterItems = [
  { id: '1', item: 'США' },
  { id: '2', item: 'Франция' },
];

// The genre filter is similar to the country filter, so there is no need to test it

export const testYearsData: FilterYears = ['2022', ['2010', '2016']];

export const testCountriesSelectData = {
  title: 'Страна',
  param: FILTERS_DATA_PARAMS.countries,
  dataArr: testCountriesData,
};

export const testYearsSelectData = {
  title: 'Год',
  param: FILTERS_DATA_PARAMS.years,
  dataArr: testYearsData,
};

export type TestCountriesSelectData = typeof testCountriesSelectData;
export type TestYearsSelectData = typeof testYearsSelectData;
