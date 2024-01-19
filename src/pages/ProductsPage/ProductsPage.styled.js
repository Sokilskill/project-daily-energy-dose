import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        to left,
        transparent -100px,
        rgba(4, 4, 4, 0.5) 150px,
        black 470px
      ),
      url(${(props) => props.bgi[0]});

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to left,
          transparent -100px,
          rgba(4, 4, 4, 0.5) 150px,
          black 470px
        ),
        url(${(props) => props.bgi[1]});

      background-size: contain;
    }
  }
`;

export const TitlePage = styled.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16;
  margin: 0;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px){
    margin-bottom: 0;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1440px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
  }
`;

