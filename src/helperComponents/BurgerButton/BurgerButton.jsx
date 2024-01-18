import { Button, IconWrapper } from './BurgerButton.styled';
import sprite from '../../assets/sprite.svg';

export const BurgerButton = ({ toggleMenu }) => {
  return (
    <Button onClick={toggleMenu}>
      <IconWrapper>
        <use href={`${sprite}#icon-menu-02`}> </use>
      </IconWrapper>
    </Button>
  );
};
