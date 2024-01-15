import css from './WelcomePart.module.css';
import sprite from '../../assets/sprite.svg';
import { SignBtns } from '../SignBtns/SignBtns';

export const WelcomePart = () => {
  return (
    <div className={css.welcome_part}>
      <div className={css.text_box}>
        <h1 className={css.title}>
          Transforming your body shape with Power Pulse
          <svg className={css.icon_line}>
            <use href={`${sprite}#icon-Line`} />
          </svg>
        </h1>
      </div>
      <SignBtns />
    </div>
  );
};
