import { useDispatch, useSelector } from 'react-redux';
import WelcomeLayout from '../../components/WelcomeLayout/WelcomeLayout';
import { Link, Navigate } from 'react-router-dom';
import css from './SignInPage.module.css';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import {
  selectIsLoggedIn,
  selectIsParamsData,
} from '../../redux/auth/auth-selectors';
import { logInThunk } from '../../redux/auth/auth-operations';

const SignInPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isParamsData = useSelector(selectIsParamsData);
  const dispatch = useDispatch();
  const handleFormData = (data) => {
    console.log(isLoggedIn);
    console.log(isParamsData);
    dispatch(logInThunk(data));
  };

  return (
    <WelcomeLayout>
      <div className={css.signin_part}>
        <div className={css.text_box}>
          <h2 className={css.signin_title}>Sign In</h2>
          <p className={css.signin_text}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
        </div>
        <SignInForm onSubmit={handleFormData} />
        <p className={css.signup_option}>
          Don’t have an account?
          <span>
            <Link className={css.signup_link} to="/signup">
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </WelcomeLayout>
  );
};

export default SignInPage;
