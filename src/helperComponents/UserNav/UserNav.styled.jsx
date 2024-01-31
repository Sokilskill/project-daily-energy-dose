import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 10px 27px;
  transition: background 250ms linear;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &.active {
    background: #e6533c;

    @media screen and (max-width: 1439px) {
      border: 1px solid #efede8;
    }
  }

  &:hover,
  &:focus {
    background: #e6533c;

    @media screen and (max-width: 1439px) {
      border: 1px solid #efede8;
    }
  }
`;
