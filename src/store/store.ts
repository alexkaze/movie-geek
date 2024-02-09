import { configureStore } from '@reduxjs/toolkit';

import { moviesReducer } from '@features/movies/index';
import { filtersReducer } from '@features/filters/index';

export const store = configureStore({
  reducer: { movies: moviesReducer, filters: filtersReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
