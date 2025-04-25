import { useEffect, useState, useCallback } from 'react';
import { RiCloseLine, RiPlayLine, RiPauseLine } from 'react-icons/ri';
import { addEntry } from '../../redux/auth/auth-operations';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';
import {
  Backdrop,
  ModalContainer,
  Close,
  Image,
  Container,
  Flex,
  TimerContainer,
  TimerButton,
  Text,
  StyledList,
  StyledListItem,
  Workout,
  WorkoutName,
  Button,
  ContainerBtn,
  Accent,
} from './AddExerciseForm.styled';
import { Counter } from '../AddExerciseCounter/AddExerciseCounter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  return `${year}-${month}-${day}`;
}

const notify = () => {
  toast.warn('error', {
    position: 'top-center',
    theme: 'dark',
  });
};

let recipeWindow;

const initialRecipeWindow = () => {
  if (window.screen.width < 768) {
    recipeWindow = true;
  } else {
    recipeWindow = false;
  }
};

initialRecipeWindow();

const AddExerciseForm = ({
  onClose,
  burnedCalories,
  time,
  gifUrl,
  bodyPart,
  target,
  equipment,
  name,
  id,
}) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [exerciseTime, setExerciseTime] = useState(0);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handlerSubmit = () => {
    const body = {
      date: formatDate(new Date()),
      exerciseData: {
        exerciseId: id,
        time: exerciseTime,
      },
    };

    addEntry(body)
      .then(() => {
        setOpenSuccess(true);
      })
      .catch(() => {
        notify();
      });
  };

  const startPauseTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const saveBurnedCalories = (remainingTime) => {
    setCaloriesBurned(
      Math.floor(((time * 60 - remainingTime) * burnedCalories) / (time * 60))
    );
    setExerciseTime(time * 60 - remainingTime);
  };

  const normalized = (value) => {
    if (recipeWindow) {
      if (value) {
        const upperLetter = value[0].toUpperCase();
        const newTitle = `${upperLetter + value.slice(1, 13)}`;
        if (value.length > 13) {
          return `${newTitle}...`;
        }
        return newTitle;
      }
      return '';
    } else {
      if (value) {
        const upperLetter = value[0].toUpperCase();
        const newTitle = `${upperLetter + value.slice(1, 15)}`;
        if (value.length > 15) {
          return `${newTitle}...`;
        }
        return newTitle;
      }
      return '';
    }
  };

  return (
    <>
      <Backdrop onClick={onClose}>
        <ToastContainer />
        {!openSuccess ? (
          <ModalContainer onClick={(event) => event.stopPropagation()}>
            <Close>
              <RiCloseLine onClick={onClose} size="22px" />
            </Close>
            <Flex>
              <Container>
                <Image src={gifUrl} alt="" />

                <Text>Time</Text>
                <TimerContainer>
                  <Counter
                    time={time}
                    isTimerRunning={isTimerRunning}
                    saveBurnedCalories={saveBurnedCalories}
                    startPauseTimer={startPauseTimer}
                  />

                  <TimerButton onClick={startPauseTimer}>
                    {isTimerRunning ? <RiPauseLine /> : <RiPlayLine />}
                  </TimerButton>

                  <Text>
                    Burned calories:
                    <Accent>{` ${caloriesBurned}`}</Accent>
                  </Text>
                </TimerContainer>
              </Container>
              <ContainerBtn>
                <StyledList>
                  <StyledListItem>
                    <Workout>Name</Workout>
                    <WorkoutName>{normalized(name)}</WorkoutName>
                  </StyledListItem>
                  <StyledListItem>
                    <Workout>Target</Workout>
                    <WorkoutName>{normalized(target)}</WorkoutName>
                  </StyledListItem>
                  <StyledListItem>
                    <Workout>Body part</Workout>
                    <WorkoutName>{normalized(bodyPart)}</WorkoutName>
                  </StyledListItem>
                  <StyledListItem>
                    <Workout>Equipment</Workout>
                    <WorkoutName>{normalized(equipment)}</WorkoutName>
                  </StyledListItem>
                </StyledList>
                <Button disabled={isTimerRunning} onClick={handlerSubmit}>
                  Add to diary
                </Button>
              </ContainerBtn>
            </Flex>
          </ModalContainer>
        ) : (
          <AddExerciseSuccess
            onClose={onClose}
            time={exerciseTime}
            caloriesBurned={caloriesBurned}
          />
        )}
      </Backdrop>
    </>
  );
};

export default AddExerciseForm;

{
  /* <CountdownCircleTimer
  isPlaying
  duration={7}
  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
  colorsTime={[7, 5, 2, 0]}
>
  {({ remainingTime }) => remainingTime}
</CountdownCircleTimer>; */
}
