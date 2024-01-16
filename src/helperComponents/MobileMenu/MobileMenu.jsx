import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { UserNav } from '../UserNav/UserNav';
import { CloseButton, Modal, IconWrapper } from './MobileMenu.styled';
import sprite from '../../assets/sprite.svg';

export const MobileMenu = () => {
  return (
    <Modal show="true">
      <CloseButton>
        <IconWrapper>
          <use href={`${sprite}#icon-x`}></use>
        </IconWrapper>
      </CloseButton>
      <nav>
        <UserNav className="mobile" />
      </nav>

      <LogOutBtn className="mobile" />
    </Modal>
  );
};
