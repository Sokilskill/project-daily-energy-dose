import { useEffect, useState, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import { Backdrop, ModalContainer, Close, Image, Div,TimerContainer, TimerButton, Text, StyledList, StyledListItem, Button} from "./AddExerciseForm.styled";
import BlockIcon from "../../assets/images/block.png";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const AddExerciseForm = ({onClose, open}) => {

  const StartIcon = () => (
    <svg width="24" height="24">
      <use href='../../assets/images/play.svg'></use>
    </svg>
  );
  
  const PauseIcon = () => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      {/* SVG-иконка для "Пауза" */}
      <path d="M3 3h18v18H3V3zm6 12h3V9H9v6zm4 0h3V9h-3v6z"/>
    </svg>
  );

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

  const startPauseTimer = () => {
    setIsTimerRunning((prevState) => !prevState);
  };


  return (
    <>
      <Backdrop onClick={onClose} style={{display: open ? 'flex' : 'none'}}>
          <ModalContainer onClick={event => event.stopPropagation()}>
           <Close>
               <MdClose onClick={onClose} size='22px' />
            </Close>
              <Div>
                <Image src={BlockIcon} alt="" />
              </Div>
              <Text>Time</Text>
              <TimerContainer>
                <CountdownCircleTimer
                    isPlaying
                    duration={180}
                    colors={['#E6533C']}
                    colorsTime={[7, 5, 2, 0]}
                    strokeWidth={[4]}
                  >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
                
              </TimerContainer>
              <TimerButton onClick={startPauseTimer}>
                {isTimerRunning ? <PauseIcon /> : <StartIcon />}
              </TimerButton>
              <Text>Burned calories:</Text>
              <StyledList>
                <StyledListItem>Элемент 1</StyledListItem>
                <StyledListItem>Элемент 2</StyledListItem>
                <StyledListItem>Элемент 3</StyledListItem>
                <StyledListItem>Элемент 4</StyledListItem>
              </StyledList>
              <Button>Next product</Button>
          
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddExerciseForm;





