// import { useDispatch } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
// import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
// import { ExercisesList } from '../../components/ExercisesList/ExercisesList';
import {
  ExercisesPageContainer,
  ExercisesPageHeader,
  ExercisesPageHeaderWrapper,
} from '../ExercisesPage/ExercisesPage.styled';
// import { getExercisesByMuscles } from '../../redux/exercises/exercisesOperations';
import { Outlet } from 'react-router-dom';

const ExercisesPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getExercisesByMuscles());
  // }, [dispatch]);

  return (
    <ExercisesPageContainer className="container">
      <ExercisesPageHeaderWrapper>
        <ExercisesPageHeader>Exercises</ExercisesPageHeader>
        <ExercisesCategories />
      </ExercisesPageHeaderWrapper>
      <Outlet />
      {/* <ExercisesSubcategoriesList /> */}
      {/* <ExercisesList /> */}
    </ExercisesPageContainer>
  );
};

export default ExercisesPage;
