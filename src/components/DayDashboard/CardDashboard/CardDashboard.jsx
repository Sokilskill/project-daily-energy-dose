import styled from '@emotion/styled';
import sprite from '../../../assets/sprite.svg';
import {
  ContentContainerCard,
  TitleTextCard,
  ValueTextCard,
  WrapperTitleCard,
} from '../DayDashboard.styled';
import MyLoader from '../../Loader/DiaryLoader';
import { useSelector } from 'react-redux';
import diarySelectors from '../../../redux/diary/diarySelectors';

const Icon = styled.svg`
  &.orange {
    fill: ${({ theme }) => theme.secondaryOrange};
  }
`;

export const Card = ({ value, children }) => {
  const isLoading = useSelector(diarySelectors.getIsLoading);

  let icon = '';
  let displayValue = value;

  switch (children) {
    case 'Daily calorie intake':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
        </Icon>
      );
      break;
    case 'Daily physical activity':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-dumbbell`}></use>
        </Icon>
      );
      displayValue = displayValue.toString() + ' min';

      break;
    case 'Calories consumed':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-apple`}></use>
        </Icon>
      );
      break;
    case 'Calories burned':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-calories-1`}></use>
        </Icon>
      );
      break;
    case 'Calories remaining':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-bubble`}></use>
        </Icon>
      );
      break;
    case 'Sports remaining':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-running`}></use>
        </Icon>
      );
      displayValue = displayValue.toString() + ' min';
      break;
  }
  if (children === 'Calories remaining' && value < 0) {
    displayValue = '- ' + Math.abs(value).toString();
  }
  if (children === 'Sports remaining' && value < 0) {
    displayValue = '+ ' + Math.abs(value).toString() + ' min';
  }
  if (!displayValue) displayValue = 0;
  return (
    <ContentContainerCard value={value} title={children}>
      <WrapperTitleCard>
        {icon}
        <TitleTextCard>{children}</TitleTextCard>
      </WrapperTitleCard>
      {isLoading ? (
        <MyLoader display={'block'} />
      ) : (
        <ValueTextCard> {displayValue}</ValueTextCard>
      )}
    </ContentContainerCard>
  );
};
