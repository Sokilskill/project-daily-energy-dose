import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import { ExercisesList } from './components/ExercisesList/ExercisesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { ExercisesSubcategoriesList } from './components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';

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
  // const isLoggedIn = true;
  const isParams = false;
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              isLoggedIn ? <Navigate to="/diary" replace /> : <WelcomePage />
            }
          />
          <Route
            path="signup"
            element={
              isLoggedIn ? <Navigate to="/diary" replace /> : <SignUpPage />
            }
          />
          <Route
            path="signin"
            element={
              isLoggedIn ? (
                isParams ? (
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
