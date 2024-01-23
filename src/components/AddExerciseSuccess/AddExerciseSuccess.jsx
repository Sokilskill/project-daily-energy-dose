import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Backdrop, ModalContainer, Close, Image, Div, Title, Text, Button, StyledLink} from "./AddExerciseSuccess.stiled";
import ThumbIcon from "../../assets/images/thumb_up.png";

const AddExerciseSuccess = ({onClose, open, handleModalSuccess }) => {
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
      <Backdrop onClick={onClose} style={{display: open ? 'flex' : 'none'}}>
          <ModalContainer onClick={event => event.stopPropagation()}>
           <Close>
               <MdClose onClick={onClose} size='22px' />
            </Close>
              <Div>
                <Image src={ThumbIcon} alt="" />
              </Div>
              <Title>Well done</Title>
              <Text>Your  time: </Text>
              <Text>Burned calories:</Text>
              <Button type='button' onClick={handleModalSuccess}>Next product</Button>
              <Div>
                <StyledLink to="/diary">To the diary <IoMdArrowForward /></StyledLink>
              </Div>
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddExerciseSuccess;

