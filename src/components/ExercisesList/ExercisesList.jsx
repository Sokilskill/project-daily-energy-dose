import { useParams } from 'react-router-dom';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesWrapper, List } from '../ExercisesList/ExercisesList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercises } from '../../redux/exercises/exercisesSelectors';
import { useEffect } from 'react';
import exercisesOperations from '../../redux/exercises/exercisesOperations';

export const ExercisesList = () => {
  const { category, subCategory } = useParams();
  const dispatch = useDispatch();

  const exercises = useSelector(selectExercises);

  useEffect(() => {
    dispatch(
      exercisesOperations.getExercises({
        category: category,
        subCategory: subCategory,
      })
    );
  }, [dispatch, category, subCategory]);
  return (
    <ExercisesWrapper>
      <List>
        {exercises.map(
          ({
            _id,
            name,
            bodyPart,
            equipment,
            target,
            gifUrl,
            burnedCalories,
            time,
          }) => (
            <ExercisesItem
              key={_id}
              id={_id}
              name={name}
              gifUrl={gifUrl}
              bodyPart={bodyPart}
              equipment={equipment}
              target={target}
              burnedCalories={burnedCalories}
              time={time}
            />
          )
        )}
      </List>
    </ExercisesWrapper>
  );
};
