import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { UserNav } from '../UserNav/UserNav';
import { CloseButton, Modal, IconWrapper, Overlay } from './MobileMenu.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

export const MobileMenu = ({ isOpenMenu }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpenMenu);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    setMenuIsOpen(isOpenMenu);
  }, [isOpenMenu]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    if (menuIsOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [menuIsOpen]);

  return (
    <>
      {menuIsOpen && <Overlay onClick={handleBackdropClick} />}
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
