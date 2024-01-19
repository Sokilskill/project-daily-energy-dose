import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 72px;
  }
`;

export const TitleContainer = styled.div`
  // display: flex;
  // padding: 0 20px;
  // width: 100%;
  @media (min-width: 768px) {
    // margin: 72px 0 0 0;
    // padding: 0 32px;
  }

  @media (min-width: 1440px) {
    // width: 1248px;
    // padding: 0 96px;
  }
`;

export const ReversDiv = styled.div`
  // @media (min-width: 1440px) {
  //   display: flex;
  // justify-content: center;
  // width: 100%;
 
  //   flex-direction: row-reverse;
  //   justify-content: space-between;
  //   max-width: 100%;
    
  // }

  display: flex;
  flex-direction: row-reverse;
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
    display: none; /* Початково приховуємо лінію */
  }

  @media (min-width: 1440px) {
    &:before {
      display: block; /* Показуємо лінію на десктопі */
    }
  }

  @media (max-width: 1439px) {
    flex-direction: column-reverse;

  }
`;


export const UserCardContainer = styled.div`
  @media (min-width: 1440px) {
    // width: 704px;
  }
`;

export const UserFormContainer = styled.div`
@media (min-width: 1440px) {
//  width: 445px;
 &::before {
  content: '';
  position: absolute;
  top: 0;
  left: -8px;
  height: 100%;
  width: 1px;
  background-color: var(--border, #efede84d);
}
`;
