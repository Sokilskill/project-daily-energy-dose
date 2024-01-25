import { useEffect, useCallback } from 'react';
import { MdClose } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import {
  Backdrop,
  ModalContainer,
  Close,
  Image,
  Title,
  Text,
  Button,
  StyledLink,
  IconAdd,
  Accent,
} from './AddProductSuccess.styled';
import foodIcon from "@/assets/images/3d-food-icon-by-OdafeUI.png";
import sprite from '../../assets/sprite.svg';

export const AddProductSuccess = ({ onClose, actualCalories }) => {
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
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <Close>
          <MdClose onClick={onClose} size="22px" />
        </Close>

        <Image src={foodIcon} alt="" />

        <Title>Well done</Title>
        <Text>
          {`Calories: `}
          <Accent>{actualCalories}</Accent>
        </Text>
        <Button type="button" onClick={onClose}>
          Next product
        </Button>

        <StyledLink to="/diary">
          To the diary
          <IconAdd>
            <use href={sprite + '#icon-arrow'} />
          </IconAdd>
        </StyledLink>
      </ModalContainer>
    </>
  );
};
  


