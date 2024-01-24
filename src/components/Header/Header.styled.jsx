import styled from '@emotion/styled';

export const HeaderContainer = styled.header``;

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

  @media screen and (max-width: 1339px) {
    display: none;
  }
`;

export const UserBarWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
