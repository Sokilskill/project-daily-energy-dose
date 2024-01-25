import sprite from '../../assets/sprite.svg';
import css from './CalBox.module.css';

const CalBox = ({ caloriesSum }) => {
  const burnCalSum = Math.round(caloriesSum / 1000);

  return (
    <div className={css.cal_box}>
      <div className={css.cal_ellips}>
        <svg className={css.icon_run}>
          <use
            className={css.icon_run}
            href={`${sprite}#icon-running-stick-figure-svgrepo-com-1-1`}
          />
        </svg>
      </div>
      <span className={css.cal}>
        {!caloriesSum ? 500 : caloriesSum > 1000 ? burnCalSum : caloriesSum}
      </span>
      <span className={css.k}>{caloriesSum > 1000 && 'K '}</span>
      {/* <span className={css.cal}>{!caloriesSum ? `500` : caloriesSum}</span> */}
      <span className={css.cal_text}>cal</span>
    </div>
  );
};
export default CalBox;
