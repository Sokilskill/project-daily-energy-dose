// import { useEffect, useCallback, useState } from 'react';
// import { MdClose } from "react-icons/md";

// import { Backdrop, ModalContainer, Close, Form, Input, Inputs, InputWrapper, InputContainer,Placeholder, Text, Button1,Button2, Buttons, ImitationInput,TextInInput} from "./AddProductForm.stiled";

// const AddProductForm = ({ onClose, title, calories }) => {
//   const [actualCalories, setactualCalories] = useState(0);
//   const [gram, setGram] = useState('');


//   const handleKeyDown = useCallback((event) => {
//     if (event.key === 'Escape') {
//       onClose();
//     }
//   }, [onClose]);

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]); 

//   const handlerInputChange = (e) => {
//     const actCalories = ((Number(e.target.value) * calories) / 100)
    
//     if (actCalories) {
//       setactualCalories(actCalories);
//     }
//     setGram(e.target.value);
//   }

//   const handlerSubmit = (e) => {
//     e.preventDefault()
//     onClose();
//     return 
//   }
//   const normalizedTitle = `${title[0].toUpperCase() + title.slice(1,111)}`;
//   return (
//     <>
//       <Backdrop onClick={onClose} >
//           <ModalContainer onClick={event => event.stopPropagation()}>
//             <Close>
//                <MdClose onClick={onClose} size='22px' />
//             </Close>
        
//             <Form name="addProductForm" onSubmit={handlerSubmit}>
//               <Inputs>
//               <ImitationInput>
//                 <TextInInput>
//                   {normalizedTitle}
//                 </TextInInput>
//                 </ImitationInput>
//                 <InputContainer>
//                   <InputWrapper>
//                     <Input type="text" value={gram} onChange={handlerInputChange} required pattern='[1-9]{1,5}'/>
//                     <Placeholder>grams</Placeholder>
//                   </InputWrapper>
//                 </InputContainer>
//               </Inputs>
//             <Text>{`Calories: ${actualCalories}`}</Text>  
//             <Buttons>
//                 <Button1 type='submit'>Add to diary</Button1>
//                 <Button2 type='button' onClick={onClose}>Cancel</Button2>
//               </Buttons>
//           </Form> 
          
//           </ModalContainer>
//         </Backdrop>
        
    
//     </>
//     );
//   };
  
// export default AddProductForm;

import { useEffect, useState, useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  Backdrop,
  ModalContainer,
  Close,
  Form,
  Input,
  Inputs,
  InputWrapper,
  InputContainer,
  Placeholder,
  Text,
  Button1,
  Button2,
  Buttons,
} from './AddProductForm.stiled';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';

const AddProductForm = ({
  onClose,
  open,
  onAddSuccess,
  onError,
  product,
}) => {
 
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [calories, setCalories] = useState(0);

  const userProfile = useSelector(state => state.profile.profile.owner._id);
  const calculateCalories = (amount) => {
    return (product.calories * amount) / product.weight;
  };

  const updateCalories = event => {

    const value = event.target.value
    setCalories(calculateCalories(value))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataForm = {
      userId: userProfile,
      date: new Date(),
      productData: {
        productId: product.id,
        amount: calories,
      },
    };

    try {
      await axios.post('/diary/add-entry', dataForm);
      console.log("ok")
      setShowSuccessModal(true);
      onAddSuccess();
    } catch (error) {
      console.error('Помилка відправки на бекенд:', error);

      onError('Помилка відправки на бекенд.');
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };
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

  return (
    <>
      <Backdrop onClick={onClose} style={{ display: open ? 'flex' : 'none' }}>
        <ModalContainer onClick={(event) => event.stopPropagation()}>
          <Close>
            <MdClose onClick={onClose} size="22px" />
          </Close>
          <Form name="addProductForm" action="#" onSubmit={handleSubmit}>
            <Inputs>
              <Input
                id="product"
                type="text"
                name="product"
                disabled
                value={product.title}
                placeholder="product"
              ></Input>
              <InputContainer>
                <InputWrapper>
                  <Input type="number" 
                  onInput={updateCalories}
                  />
                  <Placeholder>grams</Placeholder>
                </InputWrapper>
              </InputContainer>
            </Inputs>
            <Text>Calories: {calories}</Text>
            <Buttons>
              <Button1 type="submit">Add to diary</Button1>
              <Button2 type="button" onClick={onClose}>
                Cancel
              </Button2>
            </Buttons>
          </Form>
        </ModalContainer>
      </Backdrop>
      {showSuccessModal && (
        <AddProductSuccess onClose={handleSuccessModalClose} />
      )}
    </>
  );
};

export default AddProductForm;