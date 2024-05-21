import { useState, useRef, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PATH_SEARCH } from '@config/env-config';
import { URL_PARAMS } from '@config/url-params';

const useSearchBarService = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlKeyword = searchParams.get(URL_PARAMS.keyword);
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const refInput = useRef<HTMLInputElement>(null);

  const navigateToSearch = useCallback(
    (keyword: string) =>
      navigate(`${PATH_SEARCH}?${URL_PARAMS.keyword}=${keyword}`, {
        replace: false
      }),
    [navigate]
  );

  const searchMovieHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!keyword || keyword === urlKeyword) return;
      refInput.current!.blur();
      navigateToSearch(keyword);
    },
    [urlKeyword, keyword, navigateToSearch]
  );

  const changeKeywordHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value),
    []
  );

  return { refInput, keyword, searchMovieHandler, changeKeywordHandler };
};

export default useSearchBarService;
