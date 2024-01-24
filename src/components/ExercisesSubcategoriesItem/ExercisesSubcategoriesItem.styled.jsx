import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const SubcategoriesListItem = styled.li``;

export const SubcategoriesItemLink = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 100^;
  cursor: pointer;
  color: #efede8;
`;

export const SubcategoriesImg = styled.img`
  display: block;
  width: 335px;
  height: 206px;
  object-fit: cover;
  border: 1px solid rgba(239, 237, 232, 0.5);
  border-radius: 12px;
  background-color: #040404;
  opacity: 50%;

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
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
  width: 180px;
  font-size: 24px;
  text-align: center;
`;

export const SubcategoriesText = styled.p`
  font-size: 12px;
  color: rgba(239, 237, 232, 0.4);
  white-space: nowrap;
`;
export const SubCategoryLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #efede8;

  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;
