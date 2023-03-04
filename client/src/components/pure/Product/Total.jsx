import React from "react";
import { useSelector } from "react-redux";
import calcularTotalCarrito from "../../../utils/calcularTotal";
import { WrapperTotal, Total_, TotalPrice } from "./styles/stylesTotal";

const Total = () => {
  const total = calcularTotalCarrito();
  return (
    <WrapperTotal>
      <Total_>Total: </Total_>
      <TotalPrice>$ {total}</TotalPrice>
    </WrapperTotal>
  );
};

export default Total;
