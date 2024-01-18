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

export const ExercisesPageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  color: rgb(239, 237, 232, 0.4);
  cursor: pointer;
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgb(239, 237, 232, 0.4);
  transform: scaleX(-1);
`;

export const BackText = styled.p``;
