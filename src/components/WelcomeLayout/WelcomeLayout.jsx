import StatisticsInfo from '../StatisticsInfo/StatisticsInfo';
import css from './WelcomeLayout.module.css';


const WelcomeLayout = ({ children }) => {
  return (
    <>
      <section className={css.welcome_section}>
        <div className={css.container}>
          <div className={css.page_part}>
            <div className={css.insert_part}>{children}</div>
            <div className={css.welcome_bgd}>

              <StatisticsInfo />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WelcomeLayout;
