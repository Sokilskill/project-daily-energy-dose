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

export default function ProductItem() {
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
          <ProductName>Venison . stew Special</ProductName>
          <InfoText>
            Calories: <Accent> 340</Accent>
          </InfoText>
          <InfoText>
            Category: <Accent>Cereals</Accent>
          </InfoText>
          <InfoText>
            Weight: <Accent>100</Accent>
          </InfoText>
        </LowerWrapper>
      </Item>
    ); 
}