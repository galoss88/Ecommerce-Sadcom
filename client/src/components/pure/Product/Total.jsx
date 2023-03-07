import React from "react";
import { useSelector } from "react-redux";
import calcularTotalCarrito from "../../../utils/calcularTotal";
import { WrapperTotal, Total_, TotalPrice } from "./styles/stylesTotal";

const Total = () => {
  const carrito = useSelector((state) => state.cart);
  const total = calcularTotalCarrito(carrito);
  return (
    <WrapperTotal>
      <Total_>Total: </Total_>
      <TotalPrice>$ {total}</TotalPrice>
    </WrapperTotal>
  );
};

export default Total;
