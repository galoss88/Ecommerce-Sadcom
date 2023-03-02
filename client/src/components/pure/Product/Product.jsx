import React from "react";
import {
  Cantidad,
  ImagenProduct,
  NameProduct,
  PriceProduct,
  Talle,
  WrapperImageAndNameProduct,
  WrapperImagenProducto,
  WrapperNameAndTalle,
  WrapperPriceProduct,
  WrapperProducto
} from "./styles/stylesProduct";

const Product = () => {
  return (
    <WrapperProducto>
      {/* --------------- */}

      <WrapperImageAndNameProduct>
        <WrapperImagenProducto>
          <ImagenProduct src="https://m.media-amazon.com/images/I/61T13F94iRL._AC_UL1500_.jpg" />
          <Cantidad>12</Cantidad>
        </WrapperImagenProducto>
        <WrapperNameAndTalle>
          <NameProduct>Nombre Producto</NameProduct>
          <Talle>talle M</Talle>
        </WrapperNameAndTalle>
      </WrapperImageAndNameProduct>
      {/* --------------- */}
      <WrapperPriceProduct>
        <PriceProduct>$12</PriceProduct>
      </WrapperPriceProduct>
      {/* --------------- */}
    </WrapperProducto>
  );
};

export default Product;
