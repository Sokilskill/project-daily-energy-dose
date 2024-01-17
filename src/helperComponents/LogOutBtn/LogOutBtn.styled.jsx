import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: unset;

  height: 20px;
  color: #efede8;
  font-size: 14px;
  line-height: 128.571%;
  padding: 0;

  &.mobile {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
  &.desktop {
    @media screen and (max-width: 1400px) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
    padding: 2px 0;

    line-height: 150%;
  }
`;

export const IconWrapper = styled.svg`
  margin-left: 8px;

  width: 20px;
  height: 20px;
  stroke: #e6533c;
  fill: none;
  &.mobile {
    stroke: #efede8;
  }
`;
