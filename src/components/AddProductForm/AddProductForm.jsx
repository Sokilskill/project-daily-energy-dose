import { useEffect, useCallback, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { addEntry } from '../../redux/auth/auth-operations';
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';
import {
  Accent,
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
  ImitationInput,
  TextInInput,
} from './AddProductForm.stiled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const notify = () => {
  toast.warn('error', {
    position: 'top-center',
    theme: 'dark',
  });
};

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  return `${year}-${month}-${day}`;
}

const AddProductForm = ({ onClose, open, title, calories, id }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [actualCalories, setactualCalories] = useState(0);
  const [gram, setGram] = useState('');

  const normalizedTitle = `${title[0].toUpperCase() + title.slice(1, 111)}`;

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

  const handlerInputChange = (e) => {
    const actCalories = (Number(e.target.value) * calories) / 100;

    if (actCalories) {
      setactualCalories(actCalories);
    }
    setGram(e.target.value);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const body = {
      date: formatDate(new Date()),
      productData: {
        productId: `${id}`,
        amount: Number(gram),
      },
    };

    addEntry(body)
      .then((r) => {
        setOpenSuccess(true);
      })
      .catch((e) => {
        notify();
      });
  };

  return (
    <>
      <Backdrop onClick={onClose}>
        <ToastContainer />
        {!openSuccess ? (
          <ModalContainer onClick={(event) => event.stopPropagation()}>
            <Close>
              <MdClose onClick={onClose} size="22px" />
            </Close>

            <Form name="addProductForm" onSubmit={handlerSubmit}>
              <Inputs>
                <ImitationInput>
                  <TextInInput>{normalizedTitle}</TextInInput>
                </ImitationInput>

                <InputWrapper>
                  <Input
                    type="text"
                    value={gram}
                    onChange={handlerInputChange}
                    required
                    pattern="[0-9]{1,5}"
                    min={1}
                  />
                  <Placeholder>grams</Placeholder>
                </InputWrapper>

                <Text>
                  {`Calories: `} <Accent>{actualCalories}</Accent>
                </Text>
              </Inputs>
              <Buttons>
                <Button1 type="submit">Add to diary</Button1>
                <Button2 type="button" onClick={onClose}>
                  Cancel
                </Button2>
              </Buttons>
            </Form>
          </ModalContainer>
        ) : (
          <AddProductSuccess
            onClose={onClose}
            actualCalories={actualCalories}
          />
        )}
      </Backdrop>
    </>
  );
};

export default AddProductForm;
