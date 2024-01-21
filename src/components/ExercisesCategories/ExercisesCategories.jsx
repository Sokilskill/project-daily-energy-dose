import {
  CategoriesList,
  CategoriesListItem,
} from '../ExercisesCategories/ExercisesCategories.styled';
import {
  getExercisesByBodyParts,
  getExercisesByEquipment,
  getExercisesByMuscles,
} from '../../redux/exercises/exercisesOperations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesSubcategoriesList } from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import {
  selectExercisesByBodyParts,
  selectExercisesByEquipment,
  selectExercisesByMuscles,
} from '../../redux/exercises/exercisesSelectors';

export const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const [activeSubcategory, setActiveSubcategory] = useState('body');
  const [exercises, setExercises] = useState(
    useSelector(selectExercisesByBodyParts)
  );

  useEffect(() => {
    dispatch(getExercisesByBodyParts());
  }, [dispatch]);

  useEffect(() => {
    if (activeSubcategory === 'body') {
      dispatch(getExercisesByBodyParts());
    } else if (activeSubcategory === 'muscles') {
      dispatch(getExercisesByMuscles());
    } else if (activeSubcategory === 'equipment') {
      dispatch(getExercisesByEquipment());
    }
  }, [dispatch, activeSubcategory]);

  const bodyList = useSelector(selectExercisesByBodyParts);
  const musclesList = useSelector(selectExercisesByMuscles);
  const equipmentList = useSelector(selectExercisesByEquipment);

  console.log(exercises);

  const setActiveExByBody = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExercises(bodyList);
  };

  const setActiveExByMuscles = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExercises(musclesList);
  };
  const setActiveExByEquipmen = (subcategory) => {
    setActiveSubcategory(subcategory);
    setExercises(equipmentList);
  };
  return (
    <div>
      <CategoriesList>
        <CategoriesListItem onClick={() => setActiveExByBody('body')}>
          Body Parts
        </CategoriesListItem>

        <CategoriesListItem onClick={() => setActiveExByMuscles('muscles')}>
          Muscles
        </CategoriesListItem>

        <CategoriesListItem onClick={() => setActiveExByEquipmen('equipment')}>
          Equipments
        </CategoriesListItem>
      </CategoriesList>
      {activeSubcategory && (
        <ExercisesSubcategoriesList
          subcategory={activeSubcategory}
          exercises={exercises}
          // onSelectExercise={(exercise) => console.log(exercise)}
        />
      )}
    </div>
  );
};
