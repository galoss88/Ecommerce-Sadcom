import React from "react";
import { useSelector } from "react-redux";
import { sumarPrecios } from "../../../utils/sumarPrecios";
import { quitarDecimales } from "../../../utils/quitarDecimales";
import { WrapperTotal, Total_, TotalPrice } from "./styles/stylesTotal";

const Total = () => {
  const carrito = useSelector((state) => state.cart);
  //calcular el total de los productos
  const precioFinal = sumarPrecios(carrito);
  const total = quitarDecimales(precioFinal);
  return (
    <WrapperTotal>
      <Total_>Total: </Total_>
      <TotalPrice>$ {total}</TotalPrice>
    </WrapperTotal>
  );
};

export default Total;
