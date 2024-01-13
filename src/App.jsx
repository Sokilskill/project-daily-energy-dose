import { Route, Routes } from 'react-router-dom';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import MainLayout from './components/MainLayout/MainLayout';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage.styled';

// авторизований / залогінений
const isAuth = true;

function App() {
  return (
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
  );
}
export default App;
