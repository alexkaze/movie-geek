import { FilterItems } from '@features/filters/types/filters-types';
import {
  FILTERS_TITLES,
  FILTERS_PARAMS,
} from '@features/filters/config/filters-config';

import createFilterObject from '../utils/create-filter-object';

import useGetFiltersUrlParams from './useGetFiltersUrlParams';

const useConfigFilters = (
  сountries: FilterItems,
  genres: FilterItems,
  years: FilterItems,
) => {
  const { selectedCountry, selectedGenre, selectedYear } =
    useGetFiltersUrlParams();

  const countriesFilter = createFilterObject(
    FILTERS_TITLES.country,
    FILTERS_PARAMS.country,
    selectedCountry,
    сountries,
  );

  const genresFilter = createFilterObject(
    FILTERS_TITLES.genre,
    FILTERS_PARAMS.genre,
    selectedGenre,
    genres,
  );

  const yearsFilter = createFilterObject(
    FILTERS_TITLES.year,
    FILTERS_PARAMS.year,
    selectedYear,
    years,
  );

  const filters = [countriesFilter, genresFilter, yearsFilter];

  const canBeReseted = !!selectedCountry || !!selectedGenre || !!selectedYear;

  return {
    filters,
    canBeReseted,
  };
};

export default useConfigFilters;
