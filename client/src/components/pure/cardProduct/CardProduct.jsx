import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonAddToCart,
  Card,
  ImgProduct,
  NamePrice,
  NameProduct,
  PriceProduct,
} from "./stylesCardProduct";
const CardProduct = ({ producto, mostrarDetalle }) => {
  return (
    <Card onClick={() => mostrarDetalle()}>
      <ImgProduct src={producto.image}></ImgProduct>
      <NameProduct>{producto.name}</NameProduct>
      <NamePrice>Precio:</NamePrice>
      <PriceProduct>$ {producto.id}</PriceProduct>
      <ButtonAddToCart>
        <i class="bi bi-cart-plus"></i>
      </ButtonAddToCart>
    </Card>
  );
};

export default CardProduct;
