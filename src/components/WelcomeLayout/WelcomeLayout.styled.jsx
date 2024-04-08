import styled from '@emotion/styled';

export const WelcomeContainer = styled.div`
  position: relative;
  padding-top: 180px;

  @media (min-width: 768px) {
    padding-top: 48px;
  }

  @media (min-width: 1440px) {
    padding-top: 0;
  }
`;
export const InsertPart = styled.div`
  position: absolute;
  top: 66px;

  @media (min-width: 768px) {
    top: 105px;
  }

  @media (min-width: 1440px) {
    top: 200px;
  }
`;
export const WelcomeBgd = styled.div`
  max-width: 298px;
  height: 100%;
  margin-left: auto;
  margin-right: -20px;
  padding: 319px 20px 40px 44px;
  background-image: url(${(props) => props.bgi[0]}), var(--bg-gradient);
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${(props) => props.bgi[1]}), var(--bg-gradient);
  }

  @media (min-width: 768px) {
    max-width: 437px;
    padding: 583px 32px 48px 0;
    margin-right: -32px;
    background: url(${(props) => props.bgi[2]}), var(--bg-gradient);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) => props.bgi[3]}), var(--bg-gradient);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @media (min-width: 1440px) {
    max-width: 670px;
    margin-top: -84px;
    margin-right: -96px;
    padding: 384px 32px 172px 0;
    background-image: url(${(props) => props.bgi[4]}), var(--bg-desk-gradient);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(props) => props.bgi[5]}), var(--bg-desk-gradient);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
