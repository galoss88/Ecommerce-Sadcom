import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calcularCantidadTotalProductos } from "../../../utils/calcularCantidadTotalProductos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import Product from "./Product";
import Swal from "sweetalert2";

import {
  Container,
  WrapperButton,
  WrapperProductsCart,
  Hr,
} from "./styles/stylesCartProduct";
// import Subtotal from "./Subtotal";
import Total from "./Total";

//----------------
const CartProduct = () => {
  const products = useSelector((state) => state.cart);
  const conteoProductosCarrito = calcularCantidadTotalProductos(products);
  // const productosSinRepetir = eliminarRepetidos([...products]);
  const navigate = useNavigate();
  const finalizarCompra = () => {
    //validar
    if (!products.length)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Su carrito esta vació.",
      });

    navigate("/resumenCompra");
  };

  return (
    <Container>
      <WrapperProductsCart>
        {products?.map((producto, index) => (
          <Product
            key={index}
            producto={producto}
            conteoProductos={conteoProductosCarrito}
          />
        ))}
      </WrapperProductsCart>
      {/* <Hr /> */}

      {/* <Subtotal /> */}
      <Hr />
      <Total
      // conteoProductos={conteoProductosCarrito}
      // productosSinRepetir={{ productosSinRepetir }}
      />
      <WrapperButton onClick={() => finalizarCompra()}>
        Finalizar Compra
      </WrapperButton>
    </Container>
  );
};

export default CartProduct;
