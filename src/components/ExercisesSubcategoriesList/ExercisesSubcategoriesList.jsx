import { useDispatch, useSelector } from 'react-redux';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { SubcategoriesList } from '../ExercisesSubcategoriesList/ExercisesSubcategoriesList.styled';
import { selectAllExercises } from '../../redux/exercises/exercisesSelectors';
import { useEffect, useState } from 'react';
import { getExercises } from '../../redux/exercises/exercisesOperations';

export const ExercisesSubcategoriesList = ({ subcategory, exercises }) => {
  const dispatch = useDispatch();
  const [selectedExercises, setSelectedExercises] = useState([]);

  let selectedExercisesData = useSelector(selectAllExercises); //всі вправи

  // useEffect(() => {
  //   // const screenWidth = window.innerWidth;
  //   // if (screenWidth <= 768) {
  //   //   itemsPerPage.current = 9;
  //   // } else if (screenWidth <= 480) {
  //   //   itemsPerPage.current = 10;
  //   // }
  // }, []);

  // const handleExerciseSelect = async (subcategory, exercise) => {
  //   const { name } = exercise;
  //   const newName = transformString(name);

  //   if (subcategory === 'Body parts') {
  //     dispatch(fetchleBodyPartExercise(newName));
  //   }
  //   if (subcategory === 'Muscles') {
  //     dispatch(fetchleMusculesExercise(newName));
  //   }
  //   if (subcategory === 'Equipment') {
  //     dispatch(fetchleEquipmentExercise(newName));
  //   }

  //   dispatch(setExerciseTitle(name));
  //   setSelectedExercises(selectedExercisesData);
  // };

  // useEffect(() => {
  //   dispatch(getExercises());
  // }, []);

  const handleExerciseSelect = async () => {
    dispatch(getExercises());

    setSelectedExercises(selectedExercisesData);
  };

  // const visibleExercises = selectedExercisesData.data.filter = (data) => {
  //
  // }
  // exercises.map((exercise) => {
  //   console.log(exercise);
  // });

  // const visibleExercises = selectedExercisesData.data.filter((data) => {
  //   console.log(data);
  //   // data.bodyPart === 'shoulders';
  // });

  console.log(selectedExercisesData);

  return (
    <SubcategoriesList>
      {exercises.map((exercise) => (
        <ExercisesSubcategoriesItem
          key={exercise.id}
          data={exercise}
          onClick={() => handleExerciseSelect()}
        ></ExercisesSubcategoriesItem>
      ))}

      {/* <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem />
      <ExercisesSubcategoriesItem /> */}
    </SubcategoriesList>
  );
};
