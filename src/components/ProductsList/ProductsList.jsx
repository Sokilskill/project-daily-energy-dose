import { List, NotFoundElement, NotFoundText } from './ProductsList.styled';
import ProductItem from "../ProductItem/ProductItem"



export function ProductsList({ products, isFetching }) {
  
  return (
    <List className="custom-list">
      {products.length === 0 && !isFetching ? (
        <NotFoundElement>
          <NotFoundText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ullam!
          </NotFoundText>
        </NotFoundElement>
      ) : (
        products.map((product) => (
        <ProductItem key={product._id} productItem={product} />
      ))
      )}
    </List>
  );
}


 

 