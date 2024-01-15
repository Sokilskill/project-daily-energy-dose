import sprite from '../../assets/sprite.svg';
import css from './SignUpPage.module.css';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-operations';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';
import ProfilePage from '../ProfilePage/ProfilePage';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLogedIn);
  const handleFormData = (data) => {
    console.log(data);
    dispatch(registerThunk({ data }));
  };

  return (
    <>
      {isLogedIn ? (
        <ProfilePage />
      ) : (
        <section className={css.welcome_section}>
          <div className={css.container}>
            <div className={css.page_part}>
              <div className={css.insert_part}>
                <div className={css.signup_part}>
                  <div className={css.text_box}>
                    <h2 className={css.signup_title}>Sign Up</h2>
                    <p className={css.signup_text}>
                      Thank you for your interest in our platform. To complete
                      the registration process, please provide us with the
                      following information.
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
              </div>

              <div className={css.welcome_bgd}>
                <div className={css.video_box}>
                  <div className={css.ellips}>
                    <svg className={css.icon_play}>
                      <use
                        className={css.icon_play}
                        href={`${sprite}#icon-polygon1`}
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={css.views}>+ 350</p>
                    <p className={css.views_text}>Video tutorial</p>
                  </div>
                </div>
                <div className={css.cal_box}>
                  <div className={css.cal_ellips}>
                    <svg className={css.icon_run}>
                      <use
                        className={css.icon_run}
                        href={`${sprite}#icon-running-stick-figure-svgrepo-com-1-1`}
                      />
                    </svg>
                  </div>
                  <span className={css.cal}>500</span>
                  <span className={css.cal_text}>cal</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUpPage;
