// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);

  padding: 20px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserMenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-right: 32px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const UserBarWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const BurgerButton = styled.button`
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
// export const StyledLink = styled(Link)`;
//   padding: 8px 16px;
//   color: #ffffff; /* White text color */
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
//   transition:
//     color 0.3s,
//     text-shadow 0.3s;

//   &:hover,
//   &:focus {
//     color: #00baff; /* Blue text color on hover/focus */
//     text-shadow:
//       0 0 5px #00baff,
//       0 0 10px #00baff,
//       0 0 20px #00baff,
//       0 0 40px #00baff,
//       0 0 80px #00baff;
//   }
// `;

// export const IconWrapper = styled.svg`
//   width: ${(props) => props.size || '12px'};
//   height: ${(props) => props.size || '12px'};
//   fill: ${(props) => props.color || '#ffffff'};
//   display: inline-block;
//   margin-right: 5px;
//   box-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
