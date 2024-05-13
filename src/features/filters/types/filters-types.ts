export type FilterItems = string[];

export type ReturnedFiltersValue = {
  сountries: FilterItems;
  genres: FilterItems;
  years: FilterItems;
};

export type SelectedOption = string | null;

export type SelectType = {
  title: string;
  param: string;
  selectedOption: SelectedOption;
  dataArr: FilterItems;
};
