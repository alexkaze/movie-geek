import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useUrlNavigation from '@services/useUrlService';

const useSearchBarService = () => {
  const [searchParams] = useSearchParams();
  const { navigateToSearch } = useUrlNavigation();

  const urlKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const refInput = useRef<HTMLInputElement>(null);

  const searchMovieHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword || keyword === urlKeyword) return;
    refInput.current!.blur();
    navigateToSearch(keyword);
  };

  const changeKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return { refInput, keyword, searchMovieHandler, changeKeywordHandler };
};

export default useSearchBarService;
