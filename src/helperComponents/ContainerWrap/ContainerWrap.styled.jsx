import styled from 'styled-components';

export const ContainerWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;

    // max-width: 1439px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
