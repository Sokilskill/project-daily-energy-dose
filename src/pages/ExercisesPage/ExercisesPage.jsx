import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import {
  ArrowIcon,
  BackBtn,
  BackBtnWrapper,
  ExercisesPageContainer,
  ExercisesPageHeader,
} from '../ExercisesPage/ExercisesPage.styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const ExercisesPage = () => {
  const { group } = useParams();
  const navigate = useNavigate();

  return (
    <ExercisesPageContainer className="container">
      {group && (
        <BackBtnWrapper>
          <ArrowIcon>
            <use href={`${sprite}#icon-arrow`}></use>
          </ArrowIcon>
          <BackBtn onClick={() => navigate(-1)}>Back</BackBtn>
        </BackBtnWrapper>
      )}
      <ExercisesPageHeader>{group || 'Exercises'}</ExercisesPageHeader>
      <ExercisesCategories>
        <Outlet />
      </ExercisesCategories>
    </ExercisesPageContainer>
  );
};

export default ExercisesPage;
