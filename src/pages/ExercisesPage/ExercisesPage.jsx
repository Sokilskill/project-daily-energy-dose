import { useDispatch } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import { ExercisesList } from '../../components/ExercisesList/ExercisesList';
import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import {
  ExercisesPageContainer,
  ExercisesPageHeader,
  ExercisesPageHeaderWrapper,
} from '../ExercisesPage/ExercisesPage.styled';
import { useEffect } from 'react';
import { getExercises } from '../../redux/exercises/exercisesOperations';

const ExercisesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <ExercisesPageContainer className="container">
      <ExercisesPageHeaderWrapper>
        <ExercisesPageHeader>Exercises</ExercisesPageHeader>
        <ExercisesCategories />
      </ExercisesPageHeaderWrapper>
      {/* <ExercisesSubcategoriesList /> */}
      <ExercisesList />
    </ExercisesPageContainer>
  );
};

export default ExercisesPage;
