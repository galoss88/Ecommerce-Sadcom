import React from "react";
import { useSelector } from "react-redux";
import calcularTotalCarrito from "../../../utils/calcularTotal";
import { quitarDecimales } from "../../../utils/quitarDecimales";
import { WrapperTotal, Total_, TotalPrice } from "./styles/stylesTotal";

const Total = () => {
  const carrito = useSelector((state) => state.cart);
  const productosSinRepetir = eliminarRepetidos(carrito);
  const conteoProductosCarrito = calcularProductosRepetidos(carrito);
  const precioFinal = sumarPrecios(productosSinRepetir, conteoProductosCarrito);
  const total = quitarDecimales(precioFinal);

  //

  return (
    <WrapperTotal>
      <Total_>Total: </Total_>
      <TotalPrice>$ {total}</TotalPrice>
    </WrapperTotal>
  );
};

export default Total;
