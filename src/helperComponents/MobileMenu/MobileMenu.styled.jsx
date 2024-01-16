import styled from 'styled-components';

export const Modal = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: relative;
  height: 100vh;
  outline: 10px solid green;
  padding: 245px 45px 0;

  background-color: #e6533c;
  @media screen and (min-width: 768px) {
    padding: 280px 115px 0;
  }

  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const IconWrapper = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
  fill: currentColor;
  stroke: #efede8;

  transition: stroke 250ms linear;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  padding: 0;
  right: 20px;
  top: 20px;
  background-color: unset;

  &:hover,
  &:focus {
    ${IconWrapper} {
      stroke: green;
    }
  }

  @media screen and (min-width: 768px) {
    right: 32px;
    top: 26px;
  }
`;
