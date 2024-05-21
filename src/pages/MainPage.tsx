import { SearchBar } from '@features/search-bar/index';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
};

export default MainPage;
