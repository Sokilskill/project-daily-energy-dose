import { useDispatch, useSelector } from 'react-redux';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { SubcategoriesList } from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.styled';
import {
  selectAllExercises,
  selectExercisesByBodyParts,
  selectExercisesByEquipment,
  selectExercisesByMuscles,
} from '../../redux/exercises/exercisesSelectors';
import { useEffect, useState } from 'react';
import { getExercises } from '../../redux/exercises/exercisesOperations';

export const ExercisesSubcategoriesList = (exercises) => {
  console.log(exercises.exercises);

  const dispatch = useDispatch();
  // const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState(null);

  // const bodyList = useSelector(selectExercisesByBodyParts);
  // const musclesList = useSelector(selectExercisesByMuscles);
  // const equipmentList = useSelector(selectExercisesByEquipment);

  let selectedExercisesData = useSelector(selectAllExercises);

  // useEffect(() => {
  //   // const screenWidth = window.innerWidth;
  //   // if (screenWidth <= 768) {
  //   //   itemsPerPage.current = 9;
  //   // } else if (screenWidth <= 480) {
  //   //   itemsPerPage.current = 10;
  //   // }
  //   setExercises(bodyList);

  //   // if (subcategory === 'body') {
  //   //   setExercises(bodyList);
  //   // } else if (subcategory === 'muscles') {
  //   //   setExercises(musclesList);
  //   // } else if (subcategory === 'equipment') {
  //   //   setExercises(equipmentList);
  //   // }
  // }, []);

  // console.log(exercises);

  const handleExerciseSelect = async (exercise) => {
    dispatch(getExercises());

    setSelectedExercises(selectedExercisesData);
  };

  exercises.exercises.map((exercise) => console.log(exercise));

  return (
    <SubcategoriesList>
      {exercises.exercises.map((exercise) => (
        <ExercisesSubcategoriesItem
          key={exercise.id}
          data={exercise}
          onClick={() => handleExerciseSelect(subcategory, exercise)}
        ></ExercisesSubcategoriesItem>
      ))}
      {/* <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem /> */}
    </SubcategoriesList>
  );
};
