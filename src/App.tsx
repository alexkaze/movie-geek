import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PATH_SEARCH, PATH_TOP250, PATH_POPULAR } from '@config/env-config';

import Layout from './layouts/Layout';

const MainPage = React.lazy(() => import('./pages/MainPage'));
const SearchMoviesPage = React.lazy(() => import('./pages/SearchMoviesPage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={PATH_SEARCH} element={<SearchMoviesPage />} />
        <Route path={PATH_TOP250} element={<MoviesPage />} />
        <Route path={PATH_POPULAR} element={<MoviesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
