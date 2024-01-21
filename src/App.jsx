import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import { ExercisesSubcategoriesList } from './components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { ExercisesList } from './components/ExercisesList/ExercisesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsParamsData,
  selectIsRefreshing,
} from './redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { refreshThunk } from './redux/auth/auth-operations';
import MyLoader from './components/Loader/DiaryLoader';

//неавторизованого користувача переадресовує на Welcome page, авторизованого
//- на Diary page або Profile page(якщо на backendі відсутня інформація про параметри авторизованого користувача)

// та редірект на diary === коли користувач вже залогіненний заходить наприклад з
// нової вкладки його не відправляє на сторінку Welcome

// додати перед Routes спінер-завантаження/лоадер поки не завантажиться сторінка -

// авторизований / залогінений
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage/ExercisesPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isParamsData = useSelector(selectIsParamsData);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing || isLoading ? (
    <MyLoader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              isLoggedIn ? (
                isParamsData ? (
                  <Navigate to="/diary" replace />
                ) : (
                  <Navigate to="/profile" replace />
                )
              ) : (
                <WelcomePage />
              )
            }
          />
          <Route
            path="signup"
            element={
              isLoggedIn ? (
                isParamsData ? (
                  <Navigate to="/diary" replace />
                ) : (
                  <Navigate to="/profile" replace />
                )
              ) : (
                <SignUpPage />
              )
            }
          />
          <Route
            path="signin"
            element={
              isLoggedIn ? (
                isParamsData ? (
                  <Navigate to="/diary" replace />
                ) : (
                  <Navigate to="/profile" replace />
                )
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            path="profile"
            element={isLoggedIn ? <ProfilePage /> : <Navigate to="/" />}
          />
          <Route
            path="diary"
            element={isLoggedIn ? <DiaryPage /> : <Navigate to="/" />}
          />
          <Route
            path="products"
            element={isLoggedIn ? <ProductsPage /> : <Navigate to="/" />}
          />

          <Route
            path="exercises"
            element={isLoggedIn ? <ExercisesPage /> : <Navigate to="/" />}
          >
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
