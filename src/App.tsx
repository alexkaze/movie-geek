import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PATH_SEARCH } from '@config/env-config';

import Layout from './layouts/common/Layout';

const Main = React.lazy(() => import('./pages/Main'));
const Search = React.lazy(() => import('./pages/Search'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={PATH_SEARCH} element={<Search />} />
      </Route>
    </Routes>
  );
};

export default App;
