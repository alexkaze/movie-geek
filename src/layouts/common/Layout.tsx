import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LoadingSpinner from '@components/ui/LoadingSpinner';

import Page from './Page';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Page>
        <Header />
        <Main>
          <Suspense fallback={<LoadingSpinner isLarge={true} />}>
            <Outlet />
          </Suspense>
        </Main>
      </Page>
      <Footer />
    </>
  );
};

export default Layout;
