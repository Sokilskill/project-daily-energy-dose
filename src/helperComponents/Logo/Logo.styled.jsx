import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  padding: 24px 0;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding: 34px 0;
  }
`;

export const LogoImg = styled.img`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 151px;
    height: 17px;
  }
`;
