import { rest } from 'msw';

import { API_URL, PATH_SEARCH, PATH_FILTERS } from '@config/env-config';

import {
  testReturnedMoviesData,
  testtestReturnedMoviesData,
} from './test-fetched-data';

export const handlers = [
  rest.get(`${API_URL}${PATH_SEARCH}`, (_, res, ctx) =>
    res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json({ ...testReturnedMoviesData })
    )
  ),
  rest.get(`${API_URL}${PATH_FILTERS}`, (_, res, ctx) =>
    res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json({ ...testtestReturnedMoviesData })
    )
  ),
];
