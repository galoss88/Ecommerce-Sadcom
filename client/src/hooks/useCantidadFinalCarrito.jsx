import React from "react";
import { useSelector } from "react-redux";
import { calcularProductosRepetidos } from "../utils/calcularProductosRepetidos";
import { calcularProductosCarrito } from "../utils/calcularTotalProductosCarrito";

const useCantidadFinalCarrito = () => {
  const carritoConProductos = useSelector((state) => state.cart);
  const conteoProductosCarrito =
    calcularProductosRepetidos(carritoConProductos);
  const cantidadFinalCarrito = calcularProductosCarrito(conteoProductosCarrito);
  return [cantidadFinalCarrito];
};

export default useCantidadFinalCarrito;
