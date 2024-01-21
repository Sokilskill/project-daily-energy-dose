import { useEffect } from 'react';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import {
  ExercisesPageContainer,
  ExercisesPageHeader,
  ExercisesPageHeaderWrapper,
} from '../ExercisesPage/ExercisesPage.styled';
import { useDispatch } from 'react-redux';
import { getExercisesByBodyParts } from '../../redux/exercises/exercisesOperations';

const ExercisesPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getExercisesByBodyParts());
  // }, [dispatch]);

  return (
    <ExercisesPageContainer className="container">
      <ExercisesPageHeaderWrapper>
        <ExercisesPageHeader>Exercises</ExercisesPageHeader>
        <ExercisesCategories />
      </ExercisesPageHeaderWrapper>
    </ExercisesPageContainer>
  );
};

export default ExercisesPage;
