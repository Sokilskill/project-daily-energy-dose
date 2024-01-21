import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  height: 1268px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    

    ::-webkit-scrollbar {
      background-color: var(--default-avatar-fill);
      width: 8px;
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: var(--orange-1);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
  }
`;

export const NotFoundElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const NotFoundText = styled.p`
  color: rgba(239, 237, 232, 0.30);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
  width: 580px;  
  font-size: 16px;
  line-height: 1.5;
  }
`;

export const AccentText = styled.span`
  color: var(--orange);
`;