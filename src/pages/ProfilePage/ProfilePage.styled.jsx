import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  // width: 100%;
  // display: flex;
  // flex-direction: column

  // margin: 40px 0 0 0;

  padding-top: 40px;

  @media (min-width: 768px) {
    // margin: 72px 0 0 0;
    padding-top: 72px;
  }

  @media (min-width: 1440px) {
    // width: 1248px;
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
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    // width: 100%;

    flex-direction: row-reverse;
    justify-content: space-between;
    // max-width: 100%;
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
