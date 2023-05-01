import React from "react";
import { useSelector } from "react-redux";
import useResumenCompra from "../../../hooks/useResumenCompra";

const ResumenCompra = () => {
  const [CrearResumen] = useResumenCompra();
  return <CrearResumen />;
};

export default ResumenCompra;
