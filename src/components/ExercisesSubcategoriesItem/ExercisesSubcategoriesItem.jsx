import { useLocation } from 'react-router-dom';
import {
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
  SubCategoryLink,
} from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.styled';
import capitalizeString from '../../../hooks/capitalizeString';

export const ExercisesSubcategoriesItem = ({ _id, name, imgURL, filter }) => {
  const location = useLocation();

  return (
    <SubcategoriesListItem key={_id}>
      <SubCategoryLink to={name} state={{ from: location }}>
        <SubcategoriesImg src={imgURL} />
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>{capitalizeString(name)}</SubcategoriesTitle>
          <SubcategoriesText>{filter}</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubCategoryLink>
    </SubcategoriesListItem>
  );
};
