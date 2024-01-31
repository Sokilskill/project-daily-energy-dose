import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import diaryOperations from '../../redux/diary/diaryOperations';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  PageTitleText,
  WrapTitle,
  InfoText,
  WrapInfoText,
  WrapTableBlock,
  WrapMainBlock,
  WrapDashBoard,
  WrapDaySwitcher,
  MobileDaySwitch,
  NotMobileDaySwitch,
} from './DiaryPage.styled';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import diarySelectors from '../../redux/diary/diarySelectors';
import authSelectors from '../../redux/auth/auth-selectors';
import '../../index.css';

const Icon = styled.svg`
  &.orange {
    fill: ${({ theme }) => theme.secondaryOrange};
  }
`;

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  return `${year}-${month}-${day}`;
}

const notify = () => {
  toast.warn('the date must be greater than your birthday', {
    position: 'top-center',
    theme: 'dark',
  });
};

const Diary = () => {
  const storDate = localStorage.getItem('PowerPulsDate');
  const newDate = storDate ? new Date(storDate) : new Date();
  const [date, setDate] = useState(newDate);
  const dispatch = useDispatch();

  const diary = useSelector(diarySelectors.getDiary);
  const { products, exercises } = diary;

  const userMetricData = useSelector(authSelectors.getUserMetricData);

  const dayOfBirthday = userMetricData
    ? new Date(userMetricData.birthday)
    : null;

  const handlerDate = (date) => {
    if (date < dayOfBirthday) {
      notify();
      setDate(dayOfBirthday);
    } else setDate(date);
    localStorage.setItem('PowerPulsDate', date);
  };

  useEffect(() => {
    dispatch(diaryOperations.getDiary(formatDate(date)));
  }, [dispatch, date, products.length, exercises.length]);

  return (
    <Container className="container">
      <ToastContainer />
      <WrapTitle>
        <PageTitleText>Diary</PageTitleText>
        <WrapDaySwitcher>
          <MobileDaySwitch>
            <DaySwitch
              currentDate={date}
              handlerDate={handlerDate}
              birthdayDate={dayOfBirthday}
              textSize={18}
              textWeight={'bold'}
              textHeight={20}
              sizeArrow={18}
              iconColor={`var(--orange-1)`}
            />
          </MobileDaySwitch>
          <NotMobileDaySwitch>
            <DaySwitch
              currentDate={date}
              handlerDate={handlerDate}
              textSize={24}
              textWeight={'bold'}
              textHeight={32}
              sizeArrow={18}
              iconColor={`var(--orange-1)`}
            />
          </NotMobileDaySwitch>
        </WrapDaySwitcher>
      </WrapTitle>
      <WrapMainBlock>
        <WrapDashBoard>
          <DayDashboard />
          <WrapInfoText>
            <IconInfo size={24} />
            <InfoText>
              Record all your meals in a calorie diary every day. This will help
              me be aware of my nutrition and make me responsible for my
              choices.
            </InfoText>
          </WrapInfoText>
        </WrapDashBoard>
        <WrapTableBlock>
          <DayProducts />
          <DayExercises />
        </WrapTableBlock>
      </WrapMainBlock>
    </Container>
  );
};

export const IconInfo = ({ size }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      <Icon width={size} height={size} className="orange">
        <use
          href={sprite + '#icon-Ellipse-1'}
          style={{
            fill: 'rgba(239, 160, 130, 1)',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        />
        <use
          href={sprite + '#icon-tabler_exclamation-mark'}
          style={{
            fill: 'rgba(239, 237, 232, 1)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
          }}
        />
      </Icon>
    </div>
  );
};

export default Diary;
