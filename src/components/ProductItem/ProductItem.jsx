import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  Item,
  Chip,
  UpperWrapper,
  WrapBtn,
  AddBtn,
  IconAdd,
  LowerWrapper,
  ProductName,
  Icon,
  InfoText,
  Accent,
  Rectangle,
  RecText,
  WrapDescription,
} from './ProductItem.styled.js';
import sprite from '../../assets/sprite.svg';
import AddProductForm from '../AddProductForm/AddProductForm.jsx';

let recipeWindow;

const initialRecipeWindow = () => {
  if (window.screen.width < 1440) {
    recipeWindow = true;
  } else {
    recipeWindow = false;
  }
};

initialRecipeWindow();

export default function ProductItem({ productItem }) {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = 'auto';
  };

  const { weight, calories, category, title, groupBloodNotAllowed, _id } =
    productItem;
  const groupBlood = useSelector((state) => state.profile.profile.blood);
  

  const normalizedTitle = () => {
    if (title) {
      const upperLetter = title[0].toUpperCase();
      let newTitle;
      if (recipeWindow) {
        newTitle = `${upperLetter + title.slice(1, 19)}`;

        if (title.length > 19) {
          return `${newTitle}...`;
        }
        return newTitle;
      } else {
        newTitle = `${upperLetter + title.slice(1, 24)}`;
        if (title.length > 24) {
          return `${newTitle}...`;
        }
        return newTitle;
      }
    }
    return '';
  };
  const normalizedCategory = () => {
    if (category) {
      const upperLetter = category[0].toUpperCase();
      const newTitle = `${upperLetter + category.slice(1, 10)}`;
      if (category.length > 10) {
        return `${newTitle}...`;
      }
      return newTitle;
    }
    return '';
  };

  return (
    <>
      <Item>
        <UpperWrapper>
          <Chip>DIET</Chip>

          <WrapBtn>
            {groupBloodNotAllowed[groupBlood] ? (
              <>
                <Rectangle color={'#E9101D'} />
                <RecText>{'Not recommended'}</RecText>
              </>
            ) : (
              <>
                <Rectangle color={'#419B09'} />
                <RecText>{'Recommended'}</RecText>
              </>
            )}
            <AddBtn
              onClick={() => {
                setOpenModal(true);
                document.body.style.overflow = 'hidden';
              }}
            >
              Add
              <IconAdd>
                <use href={sprite + '#icon-arrow'} />
              </IconAdd>
            </AddBtn>
          </WrapBtn>
        </UpperWrapper>

        <LowerWrapper>
          <Icon>
            <use href={sprite + '#icon-icon'} />
          </Icon>
          <ProductName>{normalizedTitle()}</ProductName>
          <WrapDescription>
            <InfoText>
              Calories: <Accent> {calories}</Accent>
            </InfoText>
            <InfoText>
              Category: <Accent>{normalizedCategory()}</Accent>
            </InfoText>
            <InfoText>
              Weight: <Accent>{weight}</Accent>
            </InfoText>
          </WrapDescription>
        </LowerWrapper>
      </Item>
      {openModal && (
        <AddProductForm
          onClose={handleCloseModal}
          title={title}
          calories={calories}
          id={_id}
        />
      )}
    </>
  );
}
