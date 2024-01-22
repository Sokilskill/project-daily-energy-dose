import { LogoImg, LogoLink } from './Logo.styled';
import logo from '../../assets/logo/logo.svg';
import whitelogo from '../../assets/logo/whiteLogo.svg';

// пропс colorWhite змінює колір лого на білий, для тесту

export const Logo = ({ colorWhite }) => {
  return (
    <LogoLink to="/">
      {colorWhite ? (
        <LogoImg src={whitelogo} alt="logo img" />
      ) : (
        <LogoImg
          // style={{ width: '152px', height: '17px' }}
          src={logo}
          alt="logo img"
        />
      )}
    </LogoLink>
  );
};
