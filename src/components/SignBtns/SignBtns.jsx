import css from './SignBtns.module.css';
import { useNavigate } from 'react-router-dom';

export const SignBtns = () => {
  const navigate = useNavigate();

  return (
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
  );
};
