import { Suspense, useEffect } from 'react';
import ExercisesCategoriesNav from '../../components/ExercisesCategoriesNav/ExercisesCategoriesNav';
import { TitlePage } from '../../components/TitlePage/TitlePage';

import {
  ExercisesPageContainer,
  ExercisesPageHeaderWrapper,
  GoBackBtnWrap,
} from '../ExercisesPage/ExercisesPage.styled';

import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import exercisesOperations from '../../redux/exercises/exercisesOperations';
import MyLoader from '../../components/Loader/DiaryLoader';
import capitalizeString from '../../../hooks/capitalizeString';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';

const ExercisesPage = () => {
  const { subCategory } = useParams();
  // console.log(subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesOperations.getCategories({ category: 'Body parts' }));
  }, [dispatch]);

  return (
    <ExercisesPageContainer className="container">
      {subCategory && (
        <GoBackBtnWrap>
          <GoBackBtn />
        </GoBackBtnWrap>
      )}
      <ExercisesPageHeaderWrapper>
        {subCategory ? (
          <TitlePage text={capitalizeString(subCategory)} />
        ) : (
          <TitlePage text="Exercises" />
        )}

        <ExercisesCategoriesNav />
      </ExercisesPageHeaderWrapper>
      <Suspense fallback={<MyLoader />}>
        <Outlet />
      </Suspense>
    </ExercisesPageContainer>
  );
};

export default ExercisesPage;
