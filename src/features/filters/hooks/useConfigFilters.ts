import { FILTERS_DATA_PARAMS } from '@features/filters/config/filters-config';

import {
  SelectType,
  FilterItems,
  FilterYears,
} from '@features/filters/types/filters-types';

import createFilterObject from '../utils/createFilterObject';

import useGetFiltersUrlParams from './useGetFiltersUrlParams';

const useConfigFilters = (
  сountries: FilterItems,
  genres: FilterItems,
  years: FilterYears
) => {
  const { selectedCountry, selectedGenre, selectedYearFrom, selectedYearTo } =
    useGetFiltersUrlParams();

  const countriesFilter: SelectType = createFilterObject(
    'Страна',
    FILTERS_DATA_PARAMS.countries,
    selectedCountry,
    сountries
  );

  const genresFilter: SelectType = createFilterObject(
    'Жанр',
    FILTERS_DATA_PARAMS.genres,
    selectedGenre,
    genres
  );

  const yearsFilter: SelectType = createFilterObject(
    'Год',
    FILTERS_DATA_PARAMS.years,
    [selectedYearFrom, selectedYearTo],
    years
  );

  const filters = [countriesFilter, genresFilter, yearsFilter];

  const canBeReseted =
    !!+selectedCountry ||
    !!+selectedGenre ||
    !!+selectedYearFrom ||
    !!+selectedYearTo;

  return {
    filters,
    canBeReseted,
  };
};

export default useConfigFilters;
