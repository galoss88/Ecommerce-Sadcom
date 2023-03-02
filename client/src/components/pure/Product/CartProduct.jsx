import React from "react";
import Product from "./Product";
import { Container, Hr } from "./styles/stylesCartProduct";
import Subtotal from "./Subtotal";
import Total from "./Total";
import { WrapperButton } from "./styles/stylesProduct";

const CartProduct = () => {
  return (
    <Container>
      <Product />
      <Hr/>
      <Subtotal />
      <Hr/>
      <Total />
      <WrapperButton>Finalizar Compra</WrapperButton>
    </Container>
  );
};

export default CartProduct;
