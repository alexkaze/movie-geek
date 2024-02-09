import { createSlice } from '@reduxjs/toolkit';

import { FilterItems, FilterYears } from '../types/filters-types';

import initialFilters from './initial-state';
import fetchFilters from './fetch-filters';

type InitialState = {
  сountries: FilterItems;
  genres: FilterItems;
  years: FilterYears;
  status: string;
  error: string;
};

const initialState: InitialState = {
  сountries: initialFilters.сountries,
  genres: initialFilters.genres,
  years: initialFilters.years,
  status: 'idle',
  error: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFilters.pending, state => {
        state.status = 'pending';
        state.error = '';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.сountries = action.payload.сountries;
        state.genres = action.payload.genres;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      });
  },
});

export default filtersSlice.reducer;
