import { useEffect, useCallback, useState } from 'react';
import { MdClose } from "react-icons/md";

import { Backdrop, ModalContainer, Close, Form, Input, Inputs, InputWrapper, InputContainer,Placeholder, Text, Button1,Button2, Buttons, ImitationInput,TextInInput} from "./AddProductForm.stiled";

const AddProductForm = ({ onClose, open, title, calories }) => {
  const [actualCalories, setactualCalories] = useState(0);
  const [gram, setGram] = useState('');


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

  const handlerInputChange = (e) => {
    const actCalories = ((Number(e.target.value) * calories) / 100)
    
    if (actCalories) {
      setactualCalories(actCalories);
    }
    setGram(e.target.value);
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    onClose();
    return 
  }
  const normalizedTitle = `${title[0].toUpperCase() + title.slice(1,111)}`;
  return (
    <>
      <Backdrop onClick={onClose} >
          <ModalContainer onClick={event => event.stopPropagation()}>
            <Close>
               <MdClose onClick={onClose} size='22px' />
            </Close>
        
            <Form name="addProductForm" onSubmit={handlerSubmit}>
              <Inputs>
              <ImitationInput>
                <TextInInput>
                  {normalizedTitle}
                </TextInInput>
                </ImitationInput>
                <InputContainer>
                  <InputWrapper>
                    <Input type="text" value={gram} onChange={handlerInputChange} required pattern='[1-9]{1,5}'/>
                    <Placeholder>grams</Placeholder>
                  </InputWrapper>
                </InputContainer>
              </Inputs>
            <Text>{`Calories: ${actualCalories}`}</Text>  
            <Buttons>
                <Button1 type='submit'>Add to diary</Button1>
                <Button2 type='button' onClick={onClose}>Cancel</Button2>
              </Buttons>
          </Form> 
          
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddProductForm;

