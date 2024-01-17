import {
  SubcategoriesListItem,
  SubcategoriesImg,
  SubcategoriesTextWrapper,
  SubcategoriesTitle,
  SubcategoriesText,
  Link,
} from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem.styled';
import Shoulders from '../../assets/Exercises/Shoulders.png';

export const ExercisesSubcategoriesItem = () => {
  return (
    <SubcategoriesListItem>
      <Link
      // to="list"
      >
        <SubcategoriesImg src={Shoulders}></SubcategoriesImg>
        <SubcategoriesTextWrapper>
          <SubcategoriesTitle>Shoulders</SubcategoriesTitle>
          <SubcategoriesText>Body parts</SubcategoriesText>
        </SubcategoriesTextWrapper>
      </Link>
    </SubcategoriesListItem>
  );
};
