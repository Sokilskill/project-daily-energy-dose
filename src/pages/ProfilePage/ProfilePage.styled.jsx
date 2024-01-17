import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding: 0 20px;
  margin: 40px 0 0 0;

  @media (min-width: 768px) {
    margin: 72px 0 0 0;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between
    width: 1248px;
    padding: 0 96px;
  }
`;
