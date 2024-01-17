import { check } from "prettier"
import {List } from "./ProductsList.styled"
import ProductItem from "../ProductItem/ProductItem"



export function ProductsList({products}) {
    return (
      <List>
        {products.map((product) => (
          <ProductItem productItem={product} />
        ))}
      </List>
    );
}
