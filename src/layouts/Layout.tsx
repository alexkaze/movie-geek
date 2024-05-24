import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Navbar } from '@features/navbar';
import LoadingSpinner from '@components/ui/LoadingSpinner';

import layoutStyles from './Layout.module.scss';
import headerStyles from './Header.module.scss';

const Layout = () => {
  return (
    <>
      <div className={layoutStyles.layout}>
        <header className={headerStyles.header}>
          <div className={headerStyles['header__content']}>
            <div>
              <Link to="/" className={headerStyles['header__logo-link']}>
                <h1 className={headerStyles['header__logo']}>Movie Geek</h1>
              </Link>
            </div>

            <Navbar />
          </div>
        </header>

        <main className={layoutStyles.main}>
          <Suspense fallback={<LoadingSpinner isLarge={true} />}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      <footer className={layoutStyles.footer}>Movie Geek</footer>
    </>
  );
};

export default Layout;
