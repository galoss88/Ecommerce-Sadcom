import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import Product from "./Product";
import {
  Container,
  WrapperButton,
  WrapperProductsCart,
  Hr,
} from "./styles/stylesCartProduct";
import Subtotal from "./Subtotal";
import Total from "./Total";

const CartProduct = () => {
  const products = useSelector((state) => state.cart);
  const conteoProductosCarrito = calcularProductosRepetidos(products);
  const productosSinRepetir = eliminarRepetidos(products);
  console.log(productosSinRepetir);
  return (
    <Container>
      <WrapperProductsCart>
        {productosSinRepetir?.map((producto, index) => (
          <Product
            key={index}
            producto={producto}
            conteoProductos={conteoProductosCarrito}
          />
        ))}
      </WrapperProductsCart>
      <Hr />
      <Subtotal />
      <Hr />
      <Total />
      <WrapperButton>Finalizar Compra</WrapperButton>
    </Container>
  );
};

export default CartProduct;
