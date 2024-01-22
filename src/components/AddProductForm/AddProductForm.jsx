import { useEffect, useState, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import axios from 'axios';
import { Backdrop, ModalContainer, Close, Form, Input, Inputs, InputWrapper, InputContainer,Placeholder, Text, Button1,Button2, Buttons} from "./AddProductForm.stiled";
import AddProductSuccess from "../AddProductSuccess/AddProductSuccess";

const AddProductForm = ({onClose, open, title,  onAddSuccess, onError, userId}) => {

  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

 const calculateCalories = (amount) => {
   
    return (amount * 100) / 100; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const calories = calculateCalories(amount);

    const dataForm = {
      product,
      amount,
      calories,
      userId, 
    };

    try {
      await axios.post('/add-entry', dataForm);

      setShowSuccessModal(true);
      setProduct('');
      setAmount(1);

      // Викликайте onAddSuccess
      onAddSuccess();
    } catch (error) {
      // Обробка помилок відправки на бекенд
      console.error('Помилка відправки на бекенд:', error);
      // Викликайте функцію onError, щоб показати повідомлення про помилку
      onError('Помилка відправки на бекенд. Спробуйте ще раз.');
    }
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };
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
            <Form name="addProductForm" action="#" onSubmit={handleSubmit}>
              <Inputs>
                <Input 
                  id="product" 
                  type="text" 
                  name="product" 
                  disabled
                  value={title}
                  placeholder="product"
                  >
                </Input>
                <InputContainer>
                  <InputWrapper>
                    <Input 
                      type="text"
                    />
                    <Placeholder>grams</Placeholder>
                  </InputWrapper>
                </InputContainer>
              </Inputs>
              <Text>Calories:</Text>
              <Buttons>
                <Button1 type="submit" >Add to diary</Button1>
                <Button2 type="button" onClick={onClose}>Cancel</Button2>
              </Buttons>
            </Form>
            {showSuccessModal && (
              <AddProductSuccess
              
              />
              <div>
                <p>Додано продукт успішно!</p>
                <button onClick={handleSuccessModalClose}>Закрити</button>
              </div> 
          </ModalContainer>
        </Backdrop>
        
    
    </>
    );
  };
  
export default AddProductForm;

