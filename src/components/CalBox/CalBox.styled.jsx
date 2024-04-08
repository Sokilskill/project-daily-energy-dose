import styled from '@emotion/styled';
import '../../index.css';

export const CalBoxDiv = styled.div`
  width: fit-content;
  min-width: 119px;
  height: 76px;
  padding: 14px 18px;
  margin-left: auto;
  border-radius: 12px;
  background-color: var(--orange-1, #ef8964);

  @media (min-width: 768px) {
    width: fit-content;
    min-width: 180px;
    height: 110px;
    padding: 14px 38px 14px 28px;
  }
`;

export const CalEllips = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--beige, #efa082);
  margin-bottom: 4px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export const IconRun = styled.svg`
  width: 12px;
  height: 12px;
  fill: var(--white, #efede8);

  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CaloriesSum = styled.span`
  color: var(--white, #efede8);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin-right: 4px;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
    margin-right: 6px;
  }
`;

export const K = styled.span`
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CalText = styled.span`
  color: var(--vievs-text, #efede8a6);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  margin-left: 4px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
