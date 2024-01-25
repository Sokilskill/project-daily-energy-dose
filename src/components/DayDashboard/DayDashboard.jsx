import { Container } from './DayDashboard.styled';

import { useSelector } from 'react-redux';
// import diarySelectors from '../../redux/diary/diarySelectors';
import { selectTargetBmr } from '../../redux/auth/auth-selectors';
import { Card } from './CardDashboard/CardDashboard';

const DayDashboard = () => {
  const targetBmr = Math.ceil(useSelector(selectTargetBmr));

  const caloriesIntake = targetBmr;
  const normOfSports = 110;

  const caloriesConsumed = 400;
  // const caloriesConsumed = useSelector(
  //   diarySelectors.getDiary
  // ).consumedCalories;

  const caloriesBurned = 500;
  // const caloriesBurned = useSelector(diarySelectors.getDiary).burnedCalories;

  const restOfCalories = caloriesIntake - caloriesConsumed;

  const restOfSports = 777;
  // normOfSports -
  // Math.ceil(useSelector(diarySelectors.getDiary).sportTime / 60);

  return (
    <Container>
      <Card value={caloriesIntake}>Daily calorie intake</Card>
      <Card value={normOfSports}>Daily physical activity</Card>
      <Card value={caloriesConsumed}>Calories consumed</Card>
      <Card value={caloriesBurned}>Calories burned</Card>
      <Card value={restOfCalories}>Calories remaining</Card>
      <Card value={restOfSports}>Sports remaining</Card>
    </Container>
  );
};

export { DayDashboard };