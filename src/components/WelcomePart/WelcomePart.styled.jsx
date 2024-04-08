import styled from '@emotion/styled';

export const TextBox = styled.div`
  max-width: 335px;
  height: 120px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    max-width: 598px;
    height: 234px;
    margin-bottom: 64px;
  }
`;

export const Title = styled.h1`
  position: relative;
  color: var(--white, #efede8);
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.38px;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
    letter-spacing: 0.7px;
  }
`;

export const IconLine = styled.svg`
  position: absolute;
  top: 43px;
  left: -9px;
  width: 98px;
  height: 35px;
  z-index: -1;
  stroke: var(--orange-1, #ef8964);

  @media (min-width: 768px) {
    top: 84px;
    left: -16px;
    width: 185px;
    height: 67px;
  }
`;
