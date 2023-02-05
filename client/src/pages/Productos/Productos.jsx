import React from "react";
import FiltrosProductos from "../../components/container/FiltrosProductos/FiltrosProductos";
import ListadoProductos from "../../components/container/ListadoProductos/ListadoProductos";
import styled from "styled-components";
const DivProductos = styled.div`
  display: flex;
`;
const Productos = () => {
  return (
    <DivProductos>
      <FiltrosProductos />
      <ListadoProductos />
    </DivProductos>
  );
};

export default Productos;
