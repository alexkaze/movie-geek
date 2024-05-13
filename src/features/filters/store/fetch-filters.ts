import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchWrapper from '@lib/fetch-wrapper';
import errorMessage from '@utils/error-message';

import { ReturnedFiltersValue } from '../types/filters-types';

const fetchFilters = createAsyncThunk<
  ReturnedFiltersValue,
  string,
  { rejectValue: string }
>('filters/fetchFilters', async (url, { rejectWithValue }) => {
  try {
    const response = await fetchWrapper(url);

    if (!response.ok)
      throw new Error(
        `Ошибка ${response.status}: ${errorMessage(response.status)}`,
      );

    const { сountries, genres, years } =
      (await response.json()) as ReturnedFiltersValue;

    return { сountries, genres, years };
  } catch (err) {
    return rejectWithValue((err as Error).message);
  }
});

export default fetchFilters;
