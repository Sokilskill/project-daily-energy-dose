import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import {
  ExercisesPageContainer,
  ExercisesPageHeader,
  ExercisesPageHeaderWrapper,
} from '../ExercisesPage/ExercisesPage.styled';

const ExercisesPage = () => {
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
