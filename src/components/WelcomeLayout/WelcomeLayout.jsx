import css from './WelcomeLayout.module.css';
import { CalBox } from '../CalBox/CalBox';
// import { VideoBox } from '../VideoBox/VideoBox';

const WelcomeLayout = ({ children }) => {
  return (
    <>
      <section className={css.welcome_section}>
        <div className={css.container}>
          <div className={css.page_part}>
            <div className={css.insert_part}>{children}</div>
            <div className={css.welcome_bgd}>
              {/* <VideoBox /> */}
              <CalBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WelcomeLayout;
