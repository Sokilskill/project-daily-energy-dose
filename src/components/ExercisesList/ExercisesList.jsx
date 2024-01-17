import { useNavigate } from 'react-router-dom';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesWrapper, List } from '../ExercisesList/ExercisesList.styled';
import { useEffect } from 'react';

export const ExercisesList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/exercises/list');
  }, []);

  return (
    <ExercisesWrapper>
      <List>
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
        <ExercisesItem />
      </List>
    </ExercisesWrapper>
  );
};
