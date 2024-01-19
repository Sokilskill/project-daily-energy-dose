import styled from '@emotion/styled';

export const SubcategoriesList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid: repeat(3, 1fr) / repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    margin-top: 64px;
  }
  @media screen and (min-width: 1440px) {
    grid: repeat(2, 1fr) / repeat(5, 1fr);
  }
`;
