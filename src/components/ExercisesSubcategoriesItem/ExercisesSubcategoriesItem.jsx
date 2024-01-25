import capitalizeString from '../../../hooks/capitalizeString';
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
          <SubcategoriesTitle>{capitalizeString(data.name)}</SubcategoriesTitle>
          <SubcategoriesText>{data?.filter}</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </SubcategoriesItemLink>
    </SubcategoriesListItem>
  );
};
