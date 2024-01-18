import {List } from "./ProductsList.styled"
import ProductItem from "../ProductItem/ProductItem"



export function ProductsList({ products }) {
  
  return (
    <List className="custom-list">
      {products.map((product) => (
        <ProductItem key={product._id} productItem={product} />
      ))}
    </List>
  );
}
