import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
// import Loader from '../Loader/Loader';
import MyLoader from '../Loader/DiaryLoader';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<MyLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
