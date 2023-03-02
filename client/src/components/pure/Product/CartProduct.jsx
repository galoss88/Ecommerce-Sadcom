import React from "react";
import Product from "./Product";
import { Container } from "./styles/stylesCartProduct";
import Subtotal from "./Subtotal";
import Total from "./Total";

const CartProduct = () => {
  return (
    <Container>
      <Product />
      <Subtotal />
      <Total />
    </Container>
  );
};

export default CartProduct;
