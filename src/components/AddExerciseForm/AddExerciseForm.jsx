import { useEffect, useState, useCallback } from 'react';
import { RiCloseLine, RiPlayLine, RiPauseLine } from 'react-icons/ri';
import {
  Backdrop,
  ModalContainer,
  Close,
  Image,
  Div,
  Container,
  Flex,
  TimerContainer,
  TimerButton,
  ButtonDiv,
  Text,
  StyledList,
  StyledListItem,
  Workout,
  WorkoutName,
  Button,
} from './AddExerciseForm.styled';
// import BlockIcon from '../../assets/images/block.png';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import capitalizeString from '../../../hooks/capitalizeString';
import { useDispatch } from 'react-redux';
import diaryOperations from '../../redux/diary/diaryOperations';
import diarySelectors from '../../redux/diary/diarySelectors';

const AddExerciseForm = ({
  onClose,
  calories,
  time,
  open,
  gifUrl,
  bodyPart,
  target,
  equipment,
  name,
  exercise,
  // handleModalSuccess,
}) => {
  function convertToMinutes(seconds) {
    let minutes = seconds / 60;
    return minutes.toFixed(2);
  }

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

  const dispatch = useDispatch();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  // const [isDisabled, setDisabled] = useState(true);

  const startPauseTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const saveBurnedCalories = (remainingTime) => {
    const elapsedTime = time - remainingTime;
    setCaloriesBurned(
      Math.floor((convertToMinutes(elapsedTime) * calories) / time)
    );
    setElapsedTime(elapsedTime);
  };


  const handleAddToDairy = () => {
    const workoutTime = convertToMinutes(elapsedTime);
    const dataToDiary = {
      date: Date.now(),
      exercise: exercise._id,
     time: workoutTime,
      calories: caloriesBurned,
    };
    dispatch(diaryOperations.postDiaryExercise(dataToDiary));
    console.log(diaryError);
  if(diaryError || dataToDiary.calories === 0){
    return
  }else{
    // handleModalSuccess();
  }
  };

  return (
    <>
      <Backdrop onClick={onClose} style={{ display: open ? 'flex' : 'none' }}>
        <ModalContainer onClick={(event) => event.stopPropagation()}>
          <Close>
            <RiCloseLine onClick={onClose} size="22px" />
          </Close>
          <Flex>
            <Container>
              <Div>
                <Image src={gifUrl} alt="" />
              </Div>
              <Text>Time</Text>
              <TimerContainer>
                <CountdownCircleTimer
                  isPlaying={isTimerRunning}
                  duration={time}
                  colors={['#E6533C']}
                  colorsTime={[7, 5, 2, 0]}
                  strokeWidth={[4]}
                >
                  {({ remainingTime }) => {
                    const minutes = String(
                      Math.floor(remainingTime / 60)
                    ).padStart(2, '0');
                    const seconds = String(remainingTime % 60).padStart(2, '0');
                    saveBurnedCalories(remainingTime);

                    return `${minutes}:${seconds}`;
                  }}
                </CountdownCircleTimer>
              </TimerContainer>
              <ButtonDiv>
                <TimerButton onClick={startPauseTimer}>
                  {isTimerRunning ? <RiPauseLine /> : <RiPlayLine />}
                </TimerButton>
              </ButtonDiv>
              <Text>Burned calories: {calories}</Text>
            </Container>
            <Container>
              <StyledList>
                <StyledListItem>
                  <Workout>Name</Workout>
                  <WorkoutName>{capitalizeString(name)}</WorkoutName>
                </StyledListItem>
                <StyledListItem>
                  <Workout>Target</Workout>
                  <WorkoutName>{capitalizeString(target)}</WorkoutName>
                </StyledListItem>
                <StyledListItem>
                  <Workout>Body part</Workout>
                  <WorkoutName>{capitalizeString(bodyPart)}</WorkoutName>
                </StyledListItem>
                <StyledListItem>
                  <Workout>Equipment</Workout>
                  <WorkoutName>{capitalizeString(equipment)}</WorkoutName>
                </StyledListItem>
              </StyledList>
              <Button
              type='button'
          //     disabled={isDisabled}
          // $hoverColor={
          //   isDisabled ? 'rgb(241, 153, 139, 0.8)' : 'var(--color-main-two)'
          // }
          // color={
          //   isDisabled ? 'rgb(241, 153, 139, 0.8)' : 'var(--color-main-one)'
          // }
          // cursor={isDisabled ? 'not-allowed' : 'pointer'}
          onClick={handleAddToDairy}
              >Add to diary</Button>
            </Container>
          </Flex>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default AddExerciseForm;
