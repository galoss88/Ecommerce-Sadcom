import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  ContainerResumenCompra,
  WrapperProductos,
  WrapperProductosAcomprar,
  WrapperRealizarCompra,
  WrapperTotales,
} from "./styles/stylesResumenCompra";
import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import Subtotal from "../../pure/Product/Subtotal";
import Total from "../../pure/Product/Total";
import ProductResumen from "../../pure/ProductResumen/ProductResumen";
const CartProduct = () => {
  const products = useSelector((state) => state.cart);
  const conteoProductosCarrito = calcularProductosRepetidos(products);
  const productosSinRepetir = eliminarRepetidos(products);
  const navigate = useNavigate();
  const finalizarCompra = () => {};
  return (
    <ContainerResumenCompra>
      <WrapperProductos>
        <WrapperProductosAcomprar>
          {productosSinRepetir?.map((producto, index) => (
            <ProductResumen
              key={index}
              producto={producto}
              conteoProductos={conteoProductosCarrito}
            />
          ))}
        </WrapperProductosAcomprar>
        <WrapperTotales>
          <Subtotal />
        </WrapperTotales>
        <WrapperTotales>
          <Total />
        </WrapperTotales>
        <WrapperRealizarCompra onClick={() => finalizarCompra()}>
          Finalizar Compra
        </WrapperRealizarCompra>
      </WrapperProductos>
    </ContainerResumenCompra>
  );
};

export default CartProduct;
