import { Container, Block, Title, StyledLink } from './ProductsPage.styled';

const ProductsPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default ProductsPage;
