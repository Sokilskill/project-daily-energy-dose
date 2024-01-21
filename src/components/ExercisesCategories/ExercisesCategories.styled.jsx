import styled from '@emotion/styled';

export const CategoriesList = styled.ul`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const CategoriesListItem = styled.li`
  position: relative;
  padding-bottom: 5px;
  font-size: 14px;
  cursor: pointer;
  color: rgba(239, 237, 232, 0.4);
  transition: color 250ms linear;

  @media screen and (min-width: 768px) {
    padding-bottom: 7px;
    font-size: 16px;
  }

  &.active {
    color: #efede8;
  }

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ef8964;
    border-radius: 2px;
  }

  &:hover,
  &:focus {
    color: #efede8;
  }
`;
