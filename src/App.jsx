import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import MainLayout from './components/MainLayout/MainLayout';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage.styled';
import {store} from './redux/store'
import { Provider } from 'react-redux';

//неавторизованого користувача переадресовує на Welcome page, авторизованого
//- на Diary page або Profile page(якщо на backendі відсутня інформація про параметри авторизованого користувача)

// та редірект на diary === коли користувач вже залогіненний заходить наприклад з
// нової вкладки його не відправляє на сторінку Welcome

// ліниве завантаження,
// const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage.jsx'));

// авторизований / залогінений
const isAuth = true;
const Diary = lazy(() => import('./pages/DiaryPage/DiaryPage'));

function App() {
  return (
    <Provider store={store}> {}
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="profile" element={isAuth && <ProfilePage />} />
        <Route path="diary" element={isAuth && <DiaryPage />} />
        <Route path="products" element={isAuth && <ProductsPage />} />
        <Route path="exercises" element={isAuth && <ExercisesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </Provider>
  );
}
export default App;
