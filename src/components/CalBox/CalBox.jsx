import sprite from '../../assets/sprite.svg';
import {
  CalBoxDiv,
  CalEllips,
  IconRun,
  CaloriesSum,
  K,
  CalText,
} from './CalBox.styled';

const CalBox = ({ caloriesSum }) => {
  const burnCalSum = Math.round(caloriesSum / 1000);

  return (
    <CalBoxDiv>
      <CalEllips>
        <IconRun>
          <use href={`${sprite}#icon-running-stick-figure-svgrepo-com-1-1`} />
        </IconRun>
      </CalEllips>
      <CaloriesSum>
        {!caloriesSum ? 500 : caloriesSum > 1000 ? burnCalSum : caloriesSum}
      </CaloriesSum>
      <K>{caloriesSum > 1000 && 'K '}</K>
      <CalText>cal</CalText>
    </CalBoxDiv>
  );
};
export default CalBox;
