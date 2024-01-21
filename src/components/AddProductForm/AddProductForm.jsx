import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";

import { Backdrop, ModalContainer, Close, Form, Input, InputWrapper, Placeholder, Text, Button, Buttons} from "./AddProductForm.stiled";

const AddProductForm = ({onClose, open}) => {
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
            {/* <div style={{textAlign: 'right', position: 'absolute', color: 'white', fill: 'white'}}> */}
            <Close>
               <MdClose onClick={onClose} size='22px' />
            </Close>
             
            {/* </div> */}
            <Form name="addProductForm" action="#">
            <Input 
              id="product" 
              type="text" 
              name="product" 
              placeholder="product">
              </Input>
              <InputWrapper>
                <Input type="text" />
                <Placeholder>grams</Placeholder>
              </InputWrapper>
           
              <Text>Calories:</Text>
              <Buttons>
                <Button>Next product</Button>
                <Button>Cancel</Button>
              </Buttons>
              
            </Form> 
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddProductForm;

