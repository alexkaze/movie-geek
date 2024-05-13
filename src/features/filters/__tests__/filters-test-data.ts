import { FILTERS_TITLES, FILTERS_PARAMS } from '../config/filters-config';

export const testCountriesData = ['США', 'Франция'];

export const testCountriesSelectData = {
  title: FILTERS_TITLES.country,
  param: FILTERS_PARAMS.country,
  dataArr: testCountriesData,
};

export type TestCountriesSelectData = typeof testCountriesSelectData;
