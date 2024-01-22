import {
  CategoriesItemLink,
  CategoriesList,
  CategoriesListItem,
} from '../ExercisesCategories/ExercisesCategories.styled';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const ExercisesCategories = ({ children }) => {
  const navigate = useNavigate();
  const { categoryType } = useParams();

  useEffect(() => {
    if (!categoryType) {
      navigate('body');
    }
  }, []);

  return (
    <div>
      <CategoriesList>
        <CategoriesListItem>
          <CategoriesItemLink to={'body'}> Body Parts</CategoriesItemLink>
        </CategoriesListItem>

        <CategoriesListItem>
          <CategoriesItemLink to={'muscles'}>Muscles</CategoriesItemLink>
        </CategoriesListItem>

        <CategoriesListItem>
          <CategoriesItemLink to={'equipment'}>Equipments</CategoriesItemLink>
        </CategoriesListItem>
      </CategoriesList>
      {children}
    </div>
  );
};
