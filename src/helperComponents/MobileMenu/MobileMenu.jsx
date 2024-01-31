import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { UserNav } from '../UserNav/UserNav';
import { CloseButton, Modal, IconWrapper, Overlay } from './MobileMenu.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

export const MobileMenu = ({ isOpenMenu }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpenMenu);

  const closeMenu = () => {
    setMenuIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    if (isOpenMenu) {
      setMenuIsOpen(true);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKey);
    }
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpenMenu]);

  return (
    <>
      {menuIsOpen && <Overlay onClick={closeMenu} />}
      <Modal className={menuIsOpen ? 'is-open' : ''}>
        <CloseButton onClick={closeMenu}>
          <IconWrapper>
            <use href={`${sprite}#icon-x`}></use>
          </IconWrapper>
        </CloseButton>
        <nav>
          <UserNav closeMenu={closeMenu} />
        </nav>

        <LogOutBtn className="mobile" closeMenu={closeMenu} />
      </Modal>
    </>
  );
};
