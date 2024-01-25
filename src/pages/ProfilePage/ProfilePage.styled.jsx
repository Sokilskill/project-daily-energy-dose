import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }
  @media (min-width: 1440px) {
  
  }
  
`;

export const TitleContainer = styled.div`


  
`;

export const ReversDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 60%;
    transform: translateX(-50%);
    width: 1px;
    background-color: rgba(239, 237, 232, 0.2);
    display: none; 
  }

  @media (min-width: 1440px) {
     flex-direction: row-reverse;
    padding-top: 20px;
    &:before {
      display: block; 
    }
  }


  
`;

export const UserCardContainer = styled.div`
  @media (min-width: 1440px) {
    // width: 704px;
  }
`;


