import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { Backdrop, ModalContainer, Close, Image, Div, Title, Text, Button, StyledLink} from "./AddProductSuccess.styled";
import foodIcon from "@/assets/images/3d-food-icon-by-OdafeUI.png";

const AddProductSuccess = ({onClose, open,linkTo, linkText }) => {
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
                <Image src={foodIcon} alt="" />
              </Div>
              <Title>Well done</Title>
              <Text>Calories:</Text>
              <Button>Next product</Button>
              <Div>
                <StyledLink to={linkTo}>{linkText}<IoMdArrowForward /></StyledLink>
              </Div>
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddProductSuccess;

