import { createSlice } from '@reduxjs/toolkit';

import initialMoviesArr from './initial-state';
import fetchMovies from './fetch-movies';

const initialState = {
  movies: initialMoviesArr,
  pagesQty: 0,
  status: 'idle',
  error: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = 'pending';
        state.error = '';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.pagesQty = action.payload.pages || 0;
        state.movies = action.payload.movies;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      });
  },
});

export default moviesSlice.reducer;
