import { useLocation } from 'react-router-dom';
import {
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
  SubcategoriesItemLink,
} from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.styled';

export const ExercisesSubcategoriesItem = ({ data }) => {
  return (
    <SubcategoriesListItem>
      <SubcategoriesItemLink to={data.name}>
        <SubcategoriesImg src={data?.imgURL} alt={data?.name} />
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>{data?.name}</SubcategoriesTitle>
          <SubcategoriesText>{data?.filter}</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesItemLink>
    </SubcategoriesListItem>
  );
};
