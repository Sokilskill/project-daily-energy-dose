import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import { ExercisesList } from './components/ExercisesList/ExercisesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsParamsData,
  selectIsRefreshing,
} from './redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { ExercisesSubcategoriesList } from './components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import MyLoader from './components/Loader/DiaryLoader';
import { ExercisesCategories } from './components/ExercisesCategories/ExercisesCategories';
import { getUserProfile } from './redux/profileSettings/operations';

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
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  console.log('isParamsData', isParamsData);
  console.log('isLoggedIn', isLoggedIn);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isParamsData) {
      dispatch(getUserProfile());
    }
  }, [dispatch, isParamsData]);

  return isRefreshing ? (
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
            element={isLoggedIn ? <ProfilePage /> : <SignInPage />}
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
            <Route
              path=":categoryType"
              element={<ExercisesSubcategoriesList />}
            />
            <Route path=":categoryType/:group" element={<ExercisesList />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}
export default App;
