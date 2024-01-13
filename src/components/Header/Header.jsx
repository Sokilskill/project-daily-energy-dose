import { LogOutBtn } from '../../helperComponents/LogOutBtn/LogOutBtn';
import { Logo } from '../../helperComponents/Logo/Logo';
import { UserBar } from '../../helperComponents/UserBar/UserBar';
import { UserNav } from '../../helperComponents/UserNav/UserNav';
import { HeaderContainer, HeaderWrap, UseMenu } from './Header.styled';

// по ТЗ хедер на всих сторінках
// коли еррор === еррор передаєзначення в стор і лого змінюється

// якщо не авторизований прибрати нижній бордер
const isAuth = !true;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap className="container">
        <Logo />

        {isAuth && (
          <UseMenu>
            <UserNav />
            <UserBar />
            <LogOutBtn />

            <button>burger</button>
          </UseMenu>
        )}
      </HeaderWrap>
    </HeaderContainer>
  );
};
