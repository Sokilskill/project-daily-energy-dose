import styled from '@emotion/styled';
import {
  Container,
  TitleMain,
  SubTitle,
  AddProduct,
  TableList,
  ListItem,
  ItemWrapper,
  ItemName,
  ItemField,
  WrapMobile,
  DeleteIconWrapper,
  StyledLink,
  WrapItemProducts,
  Button,
  Indicator,
  NotFound,
  NormalText,
  SliceText,
  WrapTitleTable,
  Title,
  Category,
  Calories,
  Weight,
  Recommend,
} from './DayProducts.styled';
import sprite from '../../assets/sprite.svg';
import MyLoader from '../Loader/DiaryLoader';
import { useDispatch, useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';
import diaryOperations from '../../redux/diary/diaryOperations';

const Icon = styled.svg`
  &.orange {
    stroke: ${({ theme }) => theme.acceptColor};
  }
`;

const DayProducts = () => {
  const diaryDate = useSelector(diarySelectors.getDiary).date;
  const visibleProducts = useSelector(diarySelectors.getDiary).products;

  return (
    <Container>
      <TitleMain>
        <SubTitle>Products</SubTitle>
        <StyledLink to="/products">
          <AddProduct>Add product</AddProduct>
          <Icon width={16} height={16} className="orange" stroke="#E6533C">
            <use href={`${sprite}#icon-arrow`}></use>
          </Icon>
        </StyledLink>
      </TitleMain>
      <ProductsTable products={visibleProducts} date={diaryDate} />
    </Container>
  );
};
export const ProductsTable = ({ products, date }) => {
  const dispatch = useDispatch();
  const isLoading = false;

  return (
    <>
      {isLoading ? (
        <MyLoader display={'flex'} />
      ) : !products.length ? (
        <EmptyScreen />
      ) : (
        <>
          <TableTitle />
          <TableList>
            {products.map(
              ({
                _id,
                calories,
                amount,
                recommend,
                productId: { category, title },
              }) => {
                return (
                  <ListItem key={_id}>
                    <ItemProduct value={title}>Title</ItemProduct>
                    <ItemProduct value={category}>Category</ItemProduct>
                    <WrapMobile>
                      <WrapItemProducts>
                        <ItemProduct value={Math.round(calories)}>
                          Calories
                        </ItemProduct>
                        <ItemProduct value={amount}>Weight</ItemProduct>
                        <ItemProduct value={recommend}>Recommend</ItemProduct>
                      </WrapItemProducts>
                      <Button
                        onClick={() => {
                          dispatch(
                            diaryOperations.deleteDiaryProduct({
                              productId: _id,
                              date,
                            })
                          );
                        }}
                      >
                        <DeleteIconWrapper>
                          <Icon width={20} height={20} className="orange">
                            <use href={`${sprite}#icon-trash-03`}></use>
                          </Icon>
                        </DeleteIconWrapper>
                      </Button>
                    </WrapMobile>
                  </ListItem>
                );
              }
            )}
          </TableList>
        </>
      )}
    </>
  );
};

export const ItemProduct = ({ width, value, children }) => {
  let displayValue = value;
  const valueIsBoolean = typeof value === 'boolean';
  if (valueIsBoolean) {
    displayValue = value ? 'Yes' : 'No';
  }
  let sliceValue = displayValue;
  if (typeof value === 'undefined') value = '';
  if (value.length > 18) {
    sliceValue = value.slice(0, 18) + '...';
  }

  return (
    <ItemWrapper name={children}>
      <ItemName>{children}</ItemName>
      <ItemField width={width}>
        {valueIsBoolean && <Indicator value={value} />}
        <NormalText>{displayValue}</NormalText>
        <SliceText>{sliceValue}</SliceText>
      </ItemField>
    </ItemWrapper>
  );
};

export const TableTitle = () => {
  return (
    <WrapTitleTable>
      <Title>Title</Title>
      <Category>Category</Category>
      <Calories>Calories</Calories>
      <Weight>Weight</Weight>
      <Recommend>Recommend</Recommend>
    </WrapTitleTable>
  );
};

export const EmptyScreen = () => <NotFound>Not found products</NotFound>;

export { DayProducts };
