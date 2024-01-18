import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import { ExercisesSubcategoriesList } from './components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { ExercisesList } from './components/ExercisesList/ExercisesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//неавторизованого користувача переадресовує на Welcome page, авторизованого
//- на Diary page або Profile page(якщо на backendі відсутня інформація про параметри авторизованого користувача)

// та редірект на diary === коли користувач вже залогіненний заходить наприклад з
// нової вкладки його не відправляє на сторінку Welcome

// додати перед Routes спінер-завантаження/лоадер поки не завантажиться сторінка -

// авторизований / залогінений
const isAuth = true;

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="profile" element={isAuth && <ProfilePage />} />
        <Route path="diary" element={isAuth && <DiaryPage />} />
        <Route path="products" element={isAuth && <ProductsPage />} />
        <Route path="exercises" element={isAuth && <ExercisesPage />}>
          <Route path="bodyParts" element={<ExercisesSubcategoriesList />} />
          <Route path="muscles" element={<ExercisesSubcategoriesList />} />
          <Route path="equipment" element={<ExercisesSubcategoriesList />} />
          <Route path="list" element={<ExercisesList />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
     </Routes>
      <ToastContainer />
    </>
  );
}
export default App;
