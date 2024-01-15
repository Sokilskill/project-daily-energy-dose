import { LogOutBtn } from '../../helperComponents/LogOutBtn/LogOutBtn';
import { Logo } from '../../helperComponents/Logo/Logo';
import { MobileMenu } from '../../helperComponents/MobileMenu/MobileMenu';
import { UserBar } from '../../helperComponents/UserBar/UserBar';
import { UserNav } from '../../helperComponents/UserNav/UserNav';
import {
  HeaderContainer,
  HeaderWrap,
  Nav,
  UserBarWrapper,
  UserMenuBox,
} from './Header.styled';

// по ТЗ хедер на всих сторінках
// коли еррор === еррор передаєзначення в стор і лого змінюється
const borderBottomStyle = '1px solid rgba(239, 237, 232, 0.2)';
// якщо не авторизований прибрати нижній бордер
const isAuth = true;

export const Header = () => {
  return (
    <HeaderContainer
      style={{ borderBottom: isAuth ? borderBottomStyle : 'none' }}
    >
      <HeaderWrap className="container">
        <Logo />

        {isAuth && (
          <UserMenuBox>
            <Nav>
              <UserNav />
            </Nav>

            <UserBarWrapper>
              <UserBar />
              <LogOutBtn />
              <BurgerButton>burger</BurgerButton>
            </UserBarWrapper>

            <MobileMenu />
          </UserMenuBox>
        )}
      </HeaderWrap>
    </HeaderContainer>
  );
};
