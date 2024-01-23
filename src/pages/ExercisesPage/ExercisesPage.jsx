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
import { useEffect } from 'react';
import capitalizeString from '../../../hooks/capitalizeString';

const ExercisesPage = () => {
  const { categoryType, group } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryType) {
      navigate('/exercises/body');
    }
  }, [categoryType, navigate]);

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
      <ExercisesPageHeader>
        {capitalizeString(group) || 'Exercises'}
      </ExercisesPageHeader>
      <ExercisesCategories>
        <Outlet />
      </ExercisesCategories>
    </ExercisesPageContainer>
  );
};

export default ExercisesPage;
