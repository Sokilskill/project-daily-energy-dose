import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: unset;
  z-index: 99;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  // padding: 245px 45px 0;
  padding: 0 45px 0;

  background-color: #e6533c;
  z-index: 100;
  transform: translate(110%);
  transition: transform 0.35s ease-in-out;

  &.is-open {
    transform: translate(0);
  }

  @media screen and (min-height: 550px) {
    display: block;
    padding: 245px 45px 0;
  }

  @media screen and (min-width: 768px) {
    // padding: 280px 114px 0;
    padding: 0 114px 0;
  }

  @media screen and (min-width: 768px) and (min-height: 550px) {
    display: block;
    padding: 280px 114px 0;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const IconWrapper = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
  fill: currentColor;
  stroke: currentColor;

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
  color: #efede8;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: green;
  }

  @media screen and (min-width: 768px) {
    right: 32px;
    top: 26px;
  }
`;
