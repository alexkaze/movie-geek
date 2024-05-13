import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { handlers } from '@test/handlers';

import matchMedia from '@test/match-media';
import { store } from '@store/store';

const server = setupServer(handlers[1]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export const ProviderTestRender = (
  ui: JSX.Element,
  media: 'desktop' | 'mobile',
  route: string = '/',
) => {
  if (media === 'desktop') matchMedia(false);
  if (media === 'mobile') matchMedia(true);

  const user = userEvent.setup();

  return {
    user,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </Provider>,
    ),
  };
};
