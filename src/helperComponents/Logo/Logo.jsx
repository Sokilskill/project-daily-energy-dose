import { useState } from 'react';
import { LogoImg, LogoLink } from './Logo.styled';
import logo from '../../assets/logo/logo.svg';
import whitelogo from '../../assets/logo/whiteLogo.svg';

//в стор colorwhite на true для зміни кольору лого
// пропс colorWhite змінює колір лого на білий, для тесту

export const Logo = () => {
  const [colorWhite, setColorWhite] = useState(false);

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
