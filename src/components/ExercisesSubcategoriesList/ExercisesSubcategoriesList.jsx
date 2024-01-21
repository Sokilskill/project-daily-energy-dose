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

export const ExercisesSubcategoriesList = ({ subCategory }) => {
  //встановлена активна категорія, яку я передала як пропс, в даному компоненті
  //відображається як undefined, через це не працює логіка далі, бо вона зав'язана на назві категорії
  console.log(subCategory);
  const dispatch = useDispatch();
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState(null);

  const bodyList = useSelector(selectExercisesByBodyParts);
  const musclesList = useSelector(selectExercisesByMuscles);
  const equipmentList = useSelector(selectExercisesByEquipment);

  let selectedExercisesData = useSelector(selectAllExercises);

  useEffect(() => {
    // const screenWidth = window.innerWidth;
    // if (screenWidth <= 768) {
    //   itemsPerPage.current = 9;
    // } else if (screenWidth <= 480) {
    //   itemsPerPage.current = 10;
    // }

    //на цьому моменті все ламається, тому що логіка зав'язана на підкатегорії, тому я не можу вивести список вправ
    setExercises(bodyList);
    // if (subCategory === 'body') {
    //   setExercises(bodyList);
    // } else if (subCategory === 'muscles') {
    //   setExercises(musclesList);
    // } else if (subCategory === 'equipment') {
    //   setExercises(equipmentList);
    // }
  }, [subCategory, bodyList, musclesList, equipmentList]);

  const handleExerciseSelect = async (subcategory, exercise) => {
    dispatch(getExercises());

    setSelectedExercises(selectedExercisesData);
  };

  return (
    <SubcategoriesList>
      {exercises.map((exercise) => (
        <ExercisesSubcategoriesItem
          key={exercise.id}
          data={exercise}
          onClick={() => handleExerciseSelect(subcategory, exercise)}
        ></ExercisesSubcategoriesItem>
      ))}
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
    </SubcategoriesList>
  );
};
