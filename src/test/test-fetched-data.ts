import {
  MoviesData,
  ReturnedMoviesValue,
} from '@features/movies/types/movies-types';

import { ReturnedFiltersValue } from '@features/filters/types/filters-types';

const testMoviesData: MoviesData = [
  {
    id: '1',
    data: {
      kinopoiskId: 111,
      imdbId: 222,
      countries: [
        {
          country: 'Test Country',
        },
      ],
      genres: [
        {
          genre: 'Test Genre',
        },
      ],
      nameOriginal: 'Test Original Name',
      nameRu: 'Test Name Ru',
      posterUrl: '/',
      ratingKinopoisk: 91,
      ratingImdb: 71,
      year: 'test year 2023',
    },
  },
];

export const testReturnedMoviesData: ReturnedMoviesValue = {
  pages: 20,
  movies: testMoviesData,
};

export const testReturnedFiltersData: ReturnedFiltersValue = {
  сountries: ['США', 'Франция'],
  genres: ['триллер', 'драма'],
  years: ['2022', '2017-2021'],
};
