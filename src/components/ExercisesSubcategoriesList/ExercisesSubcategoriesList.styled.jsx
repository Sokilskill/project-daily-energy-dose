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

export const PaginationActiveIcon = styled.svg`
  width: 14px;
  height: 14px;
`;

export const Pagination = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
export const PaginationItem = styled.button`
  width: 14px;
  height: 14px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 1.5px solid #efede8;
  border-radius: 50%;
  position: relative;

  border-color: ${(props) => props.active};
  background-color: ${(props) => props.color};
`;

export const PaginationIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;
