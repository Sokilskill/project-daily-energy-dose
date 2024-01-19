import { useDispatch } from 'react-redux';
import { logInThunk } from '../../redux/auth/auth-operations';
import WelcomeLayout from '../../components/WelcomeLayout/WelcomeLayout';
import { Link } from 'react-router-dom';
import css from './SignInPage.module.css';
import { SignInForm } from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
  const dispatch = useDispatch();
  const handleFormData = (data) => {
    console.log(data);
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
