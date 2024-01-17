import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  background-color: unset;
  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const IconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #e6533c;
`;
