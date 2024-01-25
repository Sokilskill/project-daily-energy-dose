import StatisticsInfo from '../StatisticsInfo/StatisticsInfo';
import css from './WelcomeLayout.module.css';

const WelcomeLayout = ({ children }) => {
  return (
    <>
      <section className={css.welcome_section}>
        <div className={`${css.container} ${css.welcome_container}`}>
          <div className={css.insert_part}>{children}</div>
          <div className={css.ststistics}>
            <StatisticsInfo />
          </div>
        </div>
      </section>
    </>
  );
};
export default WelcomeLayout;
