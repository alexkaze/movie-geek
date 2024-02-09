import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__content']}>
        <Link to="/" className={styles['header__logo-link']}>
          <h1 className={styles['header__logo']}>Movie Geek</h1>
          {/* there is going to be a user form */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
