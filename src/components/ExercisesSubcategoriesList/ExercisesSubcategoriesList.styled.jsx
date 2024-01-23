import styled from '@emotion/styled';

export const SubcategoriesList = styled.ul`
  margin-top: 40px;
  margin-bottom: 32px;
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

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const PaginationIcon = styled.div`
  width: 14px;
  height: 14px;
  background-color: rgba(239, 237, 232, 0.4);
  border-radius: 50%;
  cursor: poiner;
`;

export const PaginationActiveIcon = styled.svg`
  width: 14px;
  height: 14px;
`;
