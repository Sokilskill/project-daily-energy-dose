import { useDispatch } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { Button, IconWrapper } from './LogOutBtn.styled';
import { logOutThunk } from '../../redux/auth/auth-operations';

export const LogOutBtn = ({ className }) => {
  const dispatch = useDispatch();
  const handlerLogOut = () => {
    dispatch(logOutThunk());
    console.log('LOGOut');
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
