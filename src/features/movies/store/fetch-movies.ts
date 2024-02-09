import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchWrapper from '@lib/fetch-wrapper';
import errorMessage from '@utils/error-message';

import { FetchedMoviesData, ReturnedMoviesValue } from '../types/movies-types';

const fetchMovies = createAsyncThunk<
  ReturnedMoviesValue,
  string,
  { rejectValue: string }
>('movies/fetchMovies', async (url, { rejectWithValue }) => {
  try {
    const response = await fetchWrapper(url);

    if (!response.ok)
      throw new Error(
        `Ошибка ${response.status}: ${errorMessage(response.status)}`
      );

    const { pages, movies } = (await response.json()) as FetchedMoviesData;
    if (movies.length === 0)
      throw new Error('Попробуйте другой запрос или измените фильтры.');

    return { pages, movies };
  } catch (err) {
    return rejectWithValue((err as Error).message);
  }
});

export default fetchMovies;
