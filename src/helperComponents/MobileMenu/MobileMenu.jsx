import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { UserNav } from '../UserNav/UserNav';
import { Modal, Nav } from './MobileMenu.styled';

export const MobileMenu = () => {
  return (
    <Modal show="false">
      <button>close X</button>
      <Nav>
        <UserNav />
      </Nav>
      <LogOutBtn />
    </Modal>
  );
};
