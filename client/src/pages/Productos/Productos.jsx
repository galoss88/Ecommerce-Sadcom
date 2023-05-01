import React, { useEffect, useState } from "react";
import FiltrosProductos from "../../components/container/FiltrosProductos/FiltrosProductos";
import styled from "styled-components";
import SearcherResponsive from "../../components/pure/searcher/SearcherResponsive";
import RoutesProduct from "../../routes/RoutesProduct";
import { WrapperFiltros, WrapperSearcher } from "./stylesProductos";
import Layout from "../Layout/Layout";
const DivProductos = styled.div`
  display: flex;
  flex-direction: row;
  animation: pagina 1s ease-in-out 0s 1 alternate none;
  transition: animation 2s ease-in-out;
  width: 100%;
  height: 100%;
  margin-top: 8.8%;
  @keyframes pagina {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 90%;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
const Productos = () => {
  return (
    <Layout>
      <DivProductos>
        {/* <WrapperSearcher>
          <SearcherResponsive />
        </WrapperSearcher> */}
        {/* <WrapperFiltros>
          <FiltrosProductos />
        </WrapperFiltros> */}
        {/* <RoutesProduct /> */}
      </DivProductos>
    </Layout>
  );
};

export default Productos;
