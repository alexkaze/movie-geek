type FetchedFilterCountryItem = {
  id: number;
  country: string;
};

type FetchedFilterGenreItem = {
  id: number;
  genre: string;
};

export type FetchedFiltersData = {
  countries: FetchedFilterCountryItem[];
  genres: FetchedFilterGenreItem[];
};

type FetchedFilterItem = FetchedFilterCountryItem | FetchedFilterGenreItem;

export type FetchedFilter = FetchedFilterItem[];

export type FilterItems = {
  id: string;
  item: string;
}[];

export type FilterYears = (string | string[])[];

export type ReturnedFiltersValue = {
  сountries: FilterItems;
  genres: FilterItems;
};

export type SelectTitle = string;
export type SelectParam = string;
export type SelectedOption = string | string[];
export type SelectDataArr = FilterItems | FilterYears;

export type SelectType = {
  title: SelectTitle;
  param: SelectParam;
  selectedOption: SelectedOption;
  dataArr: SelectDataArr;
};
