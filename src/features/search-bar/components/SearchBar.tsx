import Input from '@components/common/Input';
import Button from '@components/common/Button';

import useSearchBarService from '../services/useSearchBarService';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const { refInput, keyword, searchMovieHandler, changeKeywordHandler } =
    useSearchBarService();

  const btnClass =
    keyword.trim().length > 0
      ? styles['searchbar__btn']
      : styles['searchbar__btn--disabled'];

  return (
    <form className={styles.searchbar} onSubmit={searchMovieHandler}>
      <Input
        refValue={refInput}
        className={`${styles['searchbar__item']} ${styles['searchbar__input']}`}
        type="text"
        value={keyword}
        placeholder="фильмы, сериалы, тв-шоу..."
        onChange={changeKeywordHandler}
      />
      <Button
        className={`${styles['searchbar__item']} ${btnClass}`}
        text="Поиск"
        type="submit"
      />
    </form>
  );
};

export default SearchBar;
