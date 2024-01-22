import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SubcategoriesListItem = styled.li``;

export const SubcategoriesItemLink = styled(NavLink)`
  position: relative;
  width: 335px;
  height: 206px;
  cursor: pointer;
  color: #efede8;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
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
