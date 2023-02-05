import React from "react";
import {
  Card,
  ImgProduct,
  NamePrice,
  NameProduct,
  PriceProduct,
} from "./stylesCardProduct";
const CardProduct = ({ producto }) => {
  return (
    <Card>
      <ImgProduct src={producto.image}></ImgProduct>
      <NameProduct>{producto.name}</NameProduct>
      <NamePrice>Precio:</NamePrice>
      <PriceProduct>$ {producto.id}</PriceProduct>
    </Card>
  );
};

export default CardProduct;
