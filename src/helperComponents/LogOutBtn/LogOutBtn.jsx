import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { Button, IconWrapper } from './LogOutBtn.styled';
import { logOutThunk } from '../../redux/auth/auth-operations';
import { setInitialState } from '../../redux/profileSettings/slice';

export const LogOutBtn = ({ className, closeMenu }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handlerLogOut = async () => {
    await dispatch(logOutThunk());
    dispatch(setInitialState());
    if (closeMenu) {
      closeMenu();
    }
  };

  // після відповіді від бека перейти на сторінку Welcome
  return (
    <Button className={className} onClick={handlerLogOut}>
      Logout
      <IconWrapper className={className}>
        <use href={`${sprite}#icon-log-out-01`}></use>
      </IconWrapper>
    </Button>
  );
};
