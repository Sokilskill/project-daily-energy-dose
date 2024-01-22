import styled from '@emotion/styled';

export const ExercisesPageContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 78px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 92px;
  }
`;

export const ExercisesPageHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const BackBtnWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.4);
  transform: scaleX(-1);
`;

export const BackBtn = styled.div`
  font-size: 16px;
  color: rgba(239, 237, 232, 0.4);
  background-color: transparent;
`;
