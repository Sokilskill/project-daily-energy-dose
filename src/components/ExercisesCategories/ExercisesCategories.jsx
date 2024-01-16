import {
  CategoriesList,
  CategoriesListItem,
} from '../ExercisesCategories/ExercisesCategories.styled';

export const ExercisesCategories = () => {
  return (
    <CategoriesList>
      <CategoriesListItem>Body parts</CategoriesListItem>
      <CategoriesListItem>Muscles</CategoriesListItem>
      <CategoriesListItem>Equipment</CategoriesListItem>
    </CategoriesList>
  );
};
