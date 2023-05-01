import React from "react";
import { useSelector } from "react-redux";
import { calcularCantidadTotalProductos } from "../utils/calcularCantidadTotalProductos";
// import { calcularProductosCarrito } from "../utils/calcularTotalProductosCarrito";

const useCantidadFinalCarrito = () => {
  const carritoConProductos = useSelector((state) => state.cart);
  const conteoProductosCarrito =
  calcularCantidadTotalProductos(carritoConProductos);
  // const cantidadFinalCarrito = calcularProductosCarrito(conteoProductosCarrito);
  return [conteoProductosCarrito];
};

export default useCantidadFinalCarrito;
