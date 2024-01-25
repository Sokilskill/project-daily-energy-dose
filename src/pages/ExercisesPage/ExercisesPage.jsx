import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import {
  Container,
  ArrowIcon,
  BackBtn,
  BackBtnWrapper,
  ExercisesPageContainer,
  ExercisesPageHeaderWrapper,
  ExercisesPageHeader,
} from '../ExercisesPage/ExercisesPage.styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';
import bg_min from '../../assets/ExercisesPage/side-view-people-training-gym.jpg';
import bg_max from '../../assets/ExercisesPage/side-view-people-training-gym.jpg';

const ExercisesPage = () => {
  const { categoryType, group } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categoryType) {
      navigate('/exercises/body');
    }
  }, [categoryType, navigate]);

  const newGroupName = group?.charAt(0).toUpperCase() + group?.slice(1);

  return (
    <>
      {group ? (
        <Container bgi={[bg_min, bg_max]}>
          <ExercisesPageContainer className="container">
            <ExercisesPageHeaderWrapper>
              {group && (
                <BackBtnWrapper>
                  <ArrowIcon>
                    <use href={`${sprite}#icon-arrow`}></use>
                  </ArrowIcon>
                  <BackBtn onClick={() => navigate(-1)}>Back</BackBtn>
                </BackBtnWrapper>
              )}
              <ExercisesPageHeader>
                {newGroupName || 'Exercises'}
              </ExercisesPageHeader>
            </ExercisesPageHeaderWrapper>
            <ExercisesCategories>
              <Outlet />
            </ExercisesCategories>
          </ExercisesPageContainer>
        </Container>
      ) : (
        <ExercisesPageContainer className="container">
          <ExercisesPageHeader>
            {newGroupName || 'Exercises'}
          </ExercisesPageHeader>
          <ExercisesCategories>
            <Outlet />
          </ExercisesCategories>
        </ExercisesPageContainer>
      )}
    </>
  );
};

export default ExercisesPage;
