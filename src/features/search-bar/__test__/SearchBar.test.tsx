import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import * as ReactRouterDom from 'react-router-dom';

import { ProviderTestRender } from '@test/ProviderTestRender';

import SearchBar from '../components/SearchBar';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', (): typeof ReactRouterDom => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('SearchBar', () => {
  test('renders', () => {
    ProviderTestRender(<SearchBar />, 'desktop');

    expect(
      screen.getByPlaceholderText(/фильмы, сериалы, тв-шоу.../i),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /поиск/i })).toBeInTheDocument();
  });

  test('button is disabled when input is empty', () => {
    ProviderTestRender(<SearchBar />, 'desktop');

    const input: HTMLInputElement = screen.getByPlaceholderText(
      /фильмы, сериалы, тв-шоу.../i,
    );

    expect(input.value).toBe('');
    expect(screen.getByRole('button', { name: /поиск/i })).toHaveClass(
      'searchbar__item searchbar__btn--disabled',
    );
  });

  test('button is able when input is NOT empty', async () => {
    const user = userEvent.setup();

    render(<SearchBar />, { wrapper: BrowserRouter });

    const input: HTMLInputElement = screen.getByPlaceholderText(
      /фильмы, сериалы, тв-шоу.../i,
    );
    await user.type(input, 'Movie');

    expect(input.value).toBe('Movie');
    expect(screen.getByRole('button', { name: /поиск/i })).toHaveClass(
      'searchbar__item searchbar__btn',
    );
  });

  test('callback works', async () => {
    const { user } = ProviderTestRender(<SearchBar />, 'desktop');

    const input: HTMLInputElement = screen.getByPlaceholderText(
      /фильмы, сериалы, тв-шоу.../i,
    );

    await user.type(input, 'Movie');

    await user.click(screen.getByRole('button', { name: /поиск/i }));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
