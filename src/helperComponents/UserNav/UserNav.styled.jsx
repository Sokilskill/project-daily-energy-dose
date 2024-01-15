import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 10px 27px;
  transition: background 250ms linear;

  &: hover,
  &:focus {
    background: #e6533c;
  }
`;
