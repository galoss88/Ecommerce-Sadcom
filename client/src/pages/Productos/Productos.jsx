import React, { useEffect, useState } from "react";
import FiltrosProductos from "../../components/container/FiltrosProductos/FiltrosProductos";
import styled from "styled-components";
import SearcherResponsive from "../../components/pure/searcher/SearcherResponsive";
import RoutesProduct from "../../routes/RoutesProduct";
const DivProductos = styled.div`
  display: flex;
  flex-direction: row;
  animation: pagina 1s ease-in-out 0s 1 alternate none;
  transition: animation 2s ease-in-out;
  @keyframes pagina {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
const Productos = () => {
  return (
    <DivProductos>
      <SearcherResponsive />
      <FiltrosProductos />
      <RoutesProduct />
    </DivProductos>
  );
};

export default Productos;
