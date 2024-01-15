import sprite from '../../assets/sprite.svg';
import css from './SignInPage.module.css';
import { Link } from 'react-router-dom';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-operations';

const SignInPage = (data) => {
  const dispatch = useDispatch();
  dispatch(registerThunk(data));
  const handleFormData = (data) => {
    console.log(data);
  };

  return (
    <section className={css.welcome_section}>
      <div className={css.container}>
        <div className={css.page_part}>
          <div className={css.insert_part}>
            <div className={css.signin_part}>
              <div className={css.text_box}>
                <h2 className={css.signin_title}>Sign In</h2>
                <p className={css.signin_text}>
                  Welcome! Please enter your credentials to login to the
                  platform:
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
  );
};

export default SignInPage;
