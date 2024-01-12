import { Container, TitlePage } from './ProductsPage.styled';
import {Filters} from "../../components/ProductsFilters/ProductsFilters"
import { ProductsList } from "../../components/ProductsList/ProductsList"




export default function ProductPage() {
  

  return (
    <Container>
      <TitlePage >Products</TitlePage>
      <Filters />
      <ProductsList/>
    </Container>
  );
}