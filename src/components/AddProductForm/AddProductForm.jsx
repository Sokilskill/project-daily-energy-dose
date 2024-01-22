import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";

import { Backdrop, ModalContainer, Close, Form, Input, Inputs, InputWrapper, InputContainer,Placeholder, Text, Button1,Button2, Buttons} from "./AddProductForm.stiled";

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
            <Close>
               <MdClose onClick={onClose} size='22px' />
            </Close>
        
            <Form name="addProductForm" action="#">
              <Inputs>
                <Input 
                  id="product" 
                  type="text" 
                  name="product" 
                  placeholder="product">
                </Input>
                <InputContainer>
                  <InputWrapper>
                    <Input type="text" />
                    <Placeholder>grams</Placeholder>
                  </InputWrapper>
                </InputContainer>
              </Inputs>
              <Text>Calories:</Text>
              <Buttons>
                <Button1>Add to diary</Button1>
                <Button2>Cancel</Button2>
              </Buttons>
              
            </Form> 
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddProductForm;

