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
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import capitalizeString from '../../../hooks/capitalizeString';

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
}) => {
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

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const startPauseTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const saveBurnedCalories = (remainingTime) => {
    const elapsedTime = time - remainingTime;
    setCaloriesBurned(Math.floor((elapsedTime * calories) / time));
    // TODO: save burned calories with API call
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
              <Button>Add to diary</Button>
            </Container>
          </Flex>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default AddExerciseForm;
