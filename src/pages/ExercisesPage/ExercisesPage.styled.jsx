import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        107deg,
        rgba(4, 4, 4, 1) 50%,
        rgba(4, 4, 4, 0) 100%
      ),
      url(${(props) => props.bgi[0]});

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          107deg,
          rgba(4, 4, 4, 1) 50%,
          rgba(4, 4, 4, 0) 100%
        ),
        url(${(props) => props.bgi[1]});

      background-size: contain;
    }
  }
`;

export const ExercisesPageContainer = styled.div`
  padding-top: 40px;
  padding-top: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 66px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 80px;
  }
`;

export const ExercisesPageHeaderWrapper = styled.div`
  position: relative;
`;

export const ExercisesPageHeader = styled.h3`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 42px;
  }
`;

export const BackBtnWrapper = styled.div`
  position: absolute;
  bottom: 50px;
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
export const GoBackBtnWrap = styled.div`
  position: absolute;
  top: 116px;
`;
