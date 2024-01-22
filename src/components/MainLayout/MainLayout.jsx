import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import Loader from '../Loader/Loader';

const MainLayout = () => {
  const location = useLocation();

  // Define an array of valid paths where the header should be displayed
  const validPaths = [
    '/signup',
    '/signin',
    '/profile',
    '/diary',
    '/products',
    '/exercises',
    '/exercises/bodyParts',
    '/exercises/muscles',
    '/exercises/equipment',
    '/exercises/list',
  ];

  // Check if the current location is in the valid paths array
  const isHeaderVisible = validPaths.includes(location.pathname);

  return (
    <>
      {isHeaderVisible && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
