import {
  Item,
  Chip,
  UpperWrapper,
  Rectangle,
  RecText,
  WrapBtn,
  AddBtn,
  IconAdd,
  LowerWrapper,
  ProductName,
  Icon,
  InfoText,
  Accent,
} from './ProductItem.styled.js';
import sprite from '../../assets/sprite.svg';

const test = {
      "_id": "5d5169111111173622ff5773",
      "weight": 100,
      "calories": 340,
      "category": "dairy",
      "title": "Danbo cheese",
      "groupBloodNotAllowed": {
        "1": true,
        "2": true,
        "3": false,
        "4": false
      }
    }

export default function ProductItem({
  weight,
  calories,
  category,
  title,
  groupBloodNotAllowed,
}) {



  // const titleText = title.slice(0, 17);
  // const categoryText = category.slice(0, 9);
  
  return (
    <Item>
      <UpperWrapper>
        <Chip>DIET</Chip>

        <WrapBtn>
          <Rectangle color={'#419B09'} />
          <RecText>Recommended</RecText>

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
        <ProductName>{title}... </ProductName>
        <InfoText>
          Calories: <Accent> {calories}666</Accent>
        </InfoText>
        <InfoText>
          Category: <Accent>{category}...</Accent>
        </InfoText>
        <InfoText>
          Weight: <Accent>{weight}100</Accent>
        </InfoText>
      </LowerWrapper>
    </Item>
  );
}