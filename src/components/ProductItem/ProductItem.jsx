import { useSelector } from 'react-redux';
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
} from './ProductItem.styled.js';
import {RectangleAndText} from '../RectangleInCard/Rectangle.jsx'
import sprite from '../../assets/sprite.svg';



export default function ProductItem({ productItem  }) {
  const { weight, calories, category, title, groupBloodNotAllowed, _id } =
    productItem;
  // const groupBlood = useSelector((state) => state.auth.user.bodyParams.blood);
  const groupBlood = 2;
  
  const normalizedTitle = () => {
    if (title) {
      const upperLetter = title[0].toUpperCase();
      const newTitle = `${upperLetter + title.slice(1, 24)}`;

      if (title.length > 24) {
        return `${newTitle}...`;
      }
      return newTitle;
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
  const getRecomended = () => {
    if (groupBlood) {
      return groupBloodNotAllowed[groupBlood] ? (
        <RectangleAndText color={'#419B09'} text={'Recommended'} />
      ) : (
        <RectangleAndText color={'#E9101D'} text={'Not recommended'} />
      );
    }
    return 'Recom.. or not';
  };
  
  return (
    <Item>
      <UpperWrapper>
        <Chip>DIET</Chip>

        <WrapBtn>
          {getRecomended()}
          <AddBtn>
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
        <InfoText>
          Calories: <Accent> {calories}</Accent>
        </InfoText>
        <InfoText>
          Category: <Accent>{normalizedCategory()}</Accent>
        </InfoText>
        <InfoText>
          Weight: <Accent>{weight}</Accent>
        </InfoText>
      </LowerWrapper>
    </Item>
  );
}