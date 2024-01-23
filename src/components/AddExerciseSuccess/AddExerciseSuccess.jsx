import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Backdrop, ModalContainer, Close, Image, Div, Title, Text, Button, StyledLink} from "./AddExerciseSuccess.stiled";
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
        <Text>{`Your  time: ${time}`}</Text>
        <Text>{`Burned calories: ${caloriesBurned}`}</Text>
        <Button type="button" onClick={onClose}>
          Next exercise
        </Button>
        <Div>
          <StyledLink to="/diary">
            To the diary <IoMdArrowForward />
          </StyledLink>
        </Div>
      </ModalContainer>
    </>
  );
  };
  
export default AddExerciseSuccess;

