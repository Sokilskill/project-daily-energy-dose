import styled from '@emotion/styled';

export const SubcategoriesList = styled.ul`
  display: grid;
  grid: repeat(2, 1fr) / repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin-top: 64px;
`;

export const SubcategoriesListItem = styled.li`
  position: relative;
  width: 237px;
  height: 206px;
  cursor: pointer;
`;

export const SubcategoriesImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`;

export const SubcategoriesTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const SubcategoriesTitle = styled.p`
  font-size: 24px;
  white-space: nowrap;
`;

export const SubcategoriesText = styled.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  white-space: nowrap;
`;
