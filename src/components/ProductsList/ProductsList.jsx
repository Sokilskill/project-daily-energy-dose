import { List, NotFoundElement, NotFoundText, AccentText } from './ProductsList.styled';
import ProductItem from "../ProductItem/ProductItem"



export function ProductsList({ products, isFetching }) {
  
  return (
    <List className="custom-list">
      {products.length === 0 && !isFetching ? (
        <NotFoundElement>
          <NotFoundText>
            <AccentText>
              {'Sorry, no results were found '}
            </AccentText>
             for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs.
          </NotFoundText>
          <NotFoundText>
            <AccentText>Try changing the search parameters.</AccentText>
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


 

 