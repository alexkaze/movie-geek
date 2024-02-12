import { RefObject } from 'react';

import Input from '@components/common/Input';
import Button from '@components/common/Button';

import styles from './SearchBar.module.scss';

type Props = {
  refInput: RefObject<HTMLInputElement>;
  keyword: string;
  searchMovieHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  changeKeywordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBarForm = ({
  refInput,
  keyword,
  searchMovieHandler,
  changeKeywordHandler,
}: Props) => {
  const btnClass =
    keyword.trim().length > 0
      ? styles['search-bar__btn']
      : styles['search-bar__btn--disabled'];

  return (
    <form className={styles['search-bar__form']} onSubmit={searchMovieHandler}>
      <Input
        refValue={refInput}
        className={`${styles['search-bar__item']} ${styles['search-bar__input']}`}
        type="text"
        value={keyword}
        placeholder="фильмы, сериалы, тв-шоу..."
        onChange={changeKeywordHandler}
      />
      <Button
        className={`${styles['search-bar__item']} ${btnClass}`}
        text="Поиск"
        type="submit"
      />
    </form>
  );
};

export default SearchBarForm;
