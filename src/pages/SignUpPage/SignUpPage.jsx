import { selectIsLogedIn } from '../../redux/auth/auth-selectors';
import WelcomeLayout from '../../components/WelcomeLayout/WelcomeLayout';
import css from './SignUpPage.module.css';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-operations';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLogedIn);
  const handleFormData = (data) => {
    console.log(isLogedIn);
    dispatch(registerThunk({ data }));
  };

  return (
    <WelcomeLayout>
      <div className={css.signup_part}>
        <div className={css.text_box}>
          <h2 className={css.signup_title}>Sign Up</h2>
          <p className={css.signup_text}>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </p>
        </div>
        <SignUpForm onSubmit={handleFormData} />
        <p className={css.signin_option}>
          Already have an account?
          <span>
            <Link className={css.signin_link} to="/signin">
              Sign In
            </Link>
          </span>
        </p>
      </div>
    </WelcomeLayout>
  );
};

export default SignUpPage;
