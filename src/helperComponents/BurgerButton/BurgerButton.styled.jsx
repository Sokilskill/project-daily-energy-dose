import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 0;
  background-color: unset;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #e6533c;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
