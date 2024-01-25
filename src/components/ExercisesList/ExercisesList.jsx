import { useParams } from 'react-router-dom';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesWrapper, List } from '../ExercisesList/ExercisesList.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchExercises } from '../../services/api';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';

export const ExercisesList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { categoryType, group } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const categoryKey =
      categoryType === 'body'
        ? 'bodyPart'
        : categoryType === 'muscles'
        ? 'target'
        : categoryType === 'equipment'
        ? 'equipment'
        : '';
    if (categoryKey === '' || !isLoggedIn) return;

    fetchExercises({
      [categoryKey]: group,
    })
      .then((data) => {
        setExercises(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [categoryType, group, isLoggedIn]);

  return (
    <ExercisesWrapper>
      <List>
        {exercises.map((exercise) => {
          return <ExercisesItem key={exercise._id} {...exercise} />;
        })}
      </List>
    </ExercisesWrapper>
  );
};
