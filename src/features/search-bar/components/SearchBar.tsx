import useSearchBarService from '../services/useSearchBarService';

import SearchBarForm from './SearchBarForm';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const { refInput, keyword, searchMovieHandler, changeKeywordHandler } =
    useSearchBarService();

  return (
    <div className={styles['search-bar']}>
      <SearchBarForm
        refInput={refInput}
        keyword={keyword}
        searchMovieHandler={searchMovieHandler}
        changeKeywordHandler={changeKeywordHandler}
      />
    </div>
  );
};

export default SearchBar;
