import css from './WelcomePage.module.css';
import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <section className={css.welcome_section}>
      <div className={css.container}>
        <div className={css.page_part}>
          <div className={css.insert_part}>
            <div className={css.welcome_part}>
              <div className={css.text_box}>
                <h1 className={css.title}>
                  Transforming your body shape with Power Pulse
                  <svg className={css.icon_line}>
                    <use
                      className={css.icon_line}
                      href={`${sprite}#icon-Line`}
                    />
                  </svg>
                </h1>
              </div>

              <div className={css.btns}>
                <button
                  type="button"
                  className={`${css.sing_btn} ${css.up} `}
                  onClick={() => navigate('signup')}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className={`${css.sing_btn} ${css.in}`}
                  onClick={() => navigate('signin')}
                >
                  Sign In
                </button>
              </div>
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
                <p className={css.views}>350 +</p>
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

export default WelcomePage;
