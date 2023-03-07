import React from "react";
import { Route, Routes } from "react-router-dom";
import ListadoProductos from "../components/container/ListadoProductos/ListadoProductos";
import ResumenCompra from "../components/container/ResumenCompra/ResumenCompra";

const RoutesProduct = () => {
  return (
    <Routes>
      <Route path="listaProductos" element={<ListadoProductos />} />
      <Route path="resumenCompra" element={<ResumenCompra />} />
    </Routes>
  );
};

export default RoutesProduct;
