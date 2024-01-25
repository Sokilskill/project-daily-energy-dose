import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import {
  Backdrop,
  ModalContainer,
  Close,
  Image,
  Div,
  Title,
  Text,
  Button,
  StyledLink,
  IconAdd,
  Accent,
} from './AddExerciseSuccess.stiled';
import sprite from '../../assets/sprite.svg';
import ThumbIcon from "../../assets/images/thumb_up.png";

const AddExerciseSuccess = ({ onClose, time, caloriesBurned }) => {
  
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

  const normalizeTime = (time) => {
    let minutes;
    let seconds;

    if (time > 60) {
      minutes = String(Math.floor(time / 60)).padStart(2, '0');
      seconds = String(time % 60).padStart(2, '0');
      return `${minutes}:${seconds} minutes`;
    } else {
      return `${time} seconds`;
    }
    
  }



  return (
    <>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <Close onClick={onClose}>
          <MdClose size="22px" fill="white" />
        </Close>
        <Div>
          <Image src={ThumbIcon} alt="" />
        </Div>
        <Title>Well done</Title>
        <Text>
          {`Your  time: `}
          <Accent>{normalizeTime(time)}</Accent>
        </Text>
        <Text>
          {`Burned calories: `}
          <Accent>{caloriesBurned}</Accent>
        </Text>
        <Button type="button" onClick={onClose}>
          Next exercise
        </Button>
        <Div>
          <StyledLink to="/diary">
            To the diary
            <IconAdd>
              <use href={sprite + '#icon-arrow'} />
            </IconAdd>
          </StyledLink>
        </Div>
      </ModalContainer>
    </>
  );
  };
  
export default AddExerciseSuccess;

