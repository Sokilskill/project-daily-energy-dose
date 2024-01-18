// import { useDispatch } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
// import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
// import { ExercisesList } from '../../components/ExercisesList/ExercisesList';
import {
  ExercisesPageContainer,
  ExercisesPageHeader,
  ExercisesPageHeaderWrapper,
  BackWrapper,
  ArrowIcon,
  BackText,
} from '../ExercisesPage/ExercisesPage.styled';
// import { getExercisesByMuscles } from '../../redux/exercises/exercisesOperations';
import { Outlet } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { useNavigate } from 'react-router-dom';

const ExercisesPage = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getExercisesByMuscles());
  // }, [dispatch]);

  return (
    <ExercisesPageContainer className="container">
      <BackWrapper
        onClick={() => {
          navigate('/exercises/bodyParts');
        }}
      >
        <ArrowIcon>
          <use href={`${sprite}#icon-arrow`}></use>
        </ArrowIcon>
        <BackText>Back</BackText>
      </BackWrapper>
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
