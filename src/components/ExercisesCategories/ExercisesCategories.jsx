import { useDispatch } from 'react-redux';
import {
  CategoriesList,
  CategoriesListItem,
  Link,
} from '../ExercisesCategories/ExercisesCategories.styled';
import {
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
} from '../../redux/exercises/exercisesOperations';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/exercises/bodyParts');
  }, []);

  return (
    <CategoriesList>
      <CategoriesListItem
        onClick={() => {
          dispatch(getExercisesByBodyParts());
        }}
      >
        <Link to="bodyParts">Body parts</Link>
      </CategoriesListItem>
      <CategoriesListItem
        onClick={() => {
          dispatch(getExercisesByMuscles());
        }}
      >
        <Link to="muscles">Muscles</Link>
      </CategoriesListItem>
      <CategoriesListItem
        onClick={() => {
          dispatch(getExercisesByEquipment());
        }}
      >
        <Link to="equipment">Equipment</Link>
      </CategoriesListItem>
    </CategoriesList>
  );
};
