import { useDispatch, useSelector } from 'react-redux';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { SubcategoriesList } from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.styled';
import {
  selectExercisesByBodyParts,
  selectExercisesByEquipment,
  selectExercisesByMuscles,
} from '../../redux/exercises/exercisesSelectors';
import { useEffect } from 'react';
import {
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
} from '../../redux/exercises/exercisesOperations';
import { useParams } from 'react-router-dom';

export const ExercisesSubcategoriesList = () => {
  const dispatch = useDispatch();
  const { categoryType } = useParams();

  const bodyList = useSelector(selectExercisesByBodyParts);
  const musclesList = useSelector(selectExercisesByMuscles);
  const equipmentList = useSelector(selectExercisesByEquipment);
  const exercisesList =
    categoryType === 'body'
      ? bodyList
      : categoryType === 'muscles'
      ? musclesList
      : categoryType === 'equipment'
      ? equipmentList
      : [];

  useEffect(() => {
    if (categoryType === 'body') {
      dispatch(getExercisesByBodyParts());
    } else if (categoryType === 'muscles') {
      dispatch(getExercisesByMuscles());
    } else if (categoryType === 'equipment') {
      dispatch(getExercisesByEquipment());
    }
  }, [dispatch, categoryType]);

  return (
    <SubcategoriesList>
      {exercisesList?.map((exercise) => (
        <ExercisesSubcategoriesItem
          key={exercise._id}
          data={exercise}
        ></ExercisesSubcategoriesItem>
      ))}
    </SubcategoriesList>
  );
};
