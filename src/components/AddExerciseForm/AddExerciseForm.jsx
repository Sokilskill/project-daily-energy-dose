import { useEffect, useState, useCallback } from 'react';
import { RiCloseLine, RiPlayLine, RiPauseLine } from "react-icons/ri";
import { Backdrop, ModalContainer, Close, Image, Div, Container,Flex,TimerContainer, TimerButton, Text, StyledList, StyledListItem, Workout,WorkoutName, Button} from "./AddExerciseForm.styled";
import BlockIcon from "../../assets/images/block.png";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const AddExerciseForm = ({onClose, calories, time, open}) => {
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

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
    setCaloriesBurned(Math.floor(elapsedTime * calories / time))
    // TODO: save burned calories with API call
  }

  return (
    <>
      <Backdrop onClick={onClose} style={{display: open ? 'flex' : 'none'}}>
          <ModalContainer onClick={event => event.stopPropagation()}>
            <Close>
              <RiCloseLine onClick={onClose} size='22px' />
            </Close>
              <Flex>
                <Container>
                  <Div>
                    <Image src={BlockIcon} alt="" />
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
                        const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0')
                        const seconds = String(remainingTime % 60).padStart(2, '0')
                        saveBurnedCalories(remainingTime);
                      
                        return `${minutes}:${seconds}`
                      }}
                    </CountdownCircleTimer>
                  </TimerContainer>
                  <TimerButton onClick={startPauseTimer}>
                    {isTimerRunning ? <RiPauseLine /> : <RiPlayLine />}
                  </TimerButton>
                  <Text>Burned calories: {caloriesBurned}</Text>
                </Container>
                <Container >
                  <StyledList>
                    <StyledListItem>
                      <Workout>Name</Workout>
                      <WorkoutName>Air bike</WorkoutName>
                    </StyledListItem>
                    <StyledListItem>
                      <Workout>Name</Workout>
                      <WorkoutName>Air bike</WorkoutName>
                    </StyledListItem>
                    <StyledListItem>
                      <Workout>Name</Workout>
                      <WorkoutName>Air bike</WorkoutName>
                    </StyledListItem>
                    <StyledListItem>
                      <Workout>Name</Workout>
                      <WorkoutName>Air bike</WorkoutName>
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





