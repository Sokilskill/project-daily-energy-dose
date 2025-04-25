import { Container } from './DayDashboard.styled';
import { useSelector } from 'react-redux';
import {
  selectTargetBmr,
  selectTargetTime,
  selectDiaryProduct,
  selectBurnedCalories,
} from '../../redux/auth/auth-selectors';
import { Card } from './CardDashboard/CardDashboard';

const DayDashboard = () => {
  const targetBmr = Math.ceil(useSelector(selectTargetBmr));
  const normOfSports = useSelector(selectTargetTime);
  const calorieIntake = useSelector(selectDiaryProduct);
  const burnedCalories = useSelector(selectBurnedCalories);

  const caloriesConsumed = Math.round(
    calorieIntake.reduce(
      (accumulator, currentValue) => accumulator + currentValue.calories,
      0
    )
  );

  const caloriesBurned = Math.round(
    burnedCalories.reduce(
      (accumulator, currentValue) => accumulator + currentValue.burnedCalories,
      0
    )
  );

  const calculateRestOfCalories = () => {
    const caloriesIntake = targetBmr;
    const restOfCalories = caloriesIntake - caloriesConsumed;
    return restOfCalories;
  };

  const calculateRestOfSports = () => {
    const minutesSpentOnSports = Math.floor(normOfSports);

    const restOfSports = Math.floor(normOfSports - minutesSpentOnSports / 60);

    return restOfSports;
  };

  const restOfCalories = calculateRestOfCalories();
  const restOfSports = calculateRestOfSports();

  return (
    <Container>
      <Card value={targetBmr}>Daily calorie intake</Card>
      <Card value={normOfSports}>Daily physical activity</Card>
      <Card value={caloriesConsumed}>Calories consumed</Card>
      <Card value={caloriesBurned}>Calories burned</Card>
      <Card value={restOfCalories} highlight={restOfCalories < 0}>
        Calories remaining
      </Card>
      <Card value={restOfSports} highlight={restOfSports < 0}>
        Sports remaining
      </Card>
    </Container>
  );
};

export { DayDashboard };
