export type MovieData = {
  kinopoiskId: number;
  imdbId: number;
  countries: { country: string }[];
  genres: { genre: string }[];
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  ratingImdb: number;
  year: string;
};

export type MoviesData = {
  id: string;
  data: MovieData;
}[];

export type FetchedMoviesData = {
  pages: number;
  movies: MoviesData;
};

export type ReturnedMoviesValue = {
  pages: number;
  movies: MoviesData;
};
