import sprite from '../../assets/sprite.svg';
import { Button, IconWrapper } from './LogOutBtn.styled';

export const LogOutBtn = () => {
  return (
    <Button>
      Logout
      <IconWrapper>
        <use href={`${sprite}#icon-log-out-01`}></use>
      </IconWrapper>
    </Button>
  );
};
