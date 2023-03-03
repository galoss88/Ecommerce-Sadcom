import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { Container, WrapperProductsCart } from "./styles/stylesCartProduct";
import Subtotal from "./Subtotal";
import Total from "./Total";

const CartProduct = () => {
  const products = useSelector((state) => state.cart);
  return (
    <Container>
      <WrapperProductsCart>
        {products.map((producto) => (
          <Product producto={producto} key={producto.idArt} />
        ))}
      </WrapperProductsCart>
      <Subtotal />
      <Total />
    </Container>
  );
};

export default CartProduct;
