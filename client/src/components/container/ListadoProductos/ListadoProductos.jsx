import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardContainer,
  Container,
  WrapperCards,
  WrapperPaginado,
} from "./styles/styleListadoProductos";
import CardProduct from "../../pure/cardProduct/CardProduct";
import usePaginado from "../../../hooks/usePaginado";
import { useContext } from "react";
import { contextListaProductos } from "../../../context/ContextListaProductos";
import Loading from "../../pure/Loading/Loading";
// import Pagination from "react-bootstrap/Pagination";
const ListadoProductos = ({ mostrarDetalle }) => {
  const enviarInfoFiltrado = useContext(contextListaProductos);
  const { setInfoFiltros, infoFiltros, loading } = enviarInfoFiltrado;
  //Traigo del estado global lo que necesito para realizar los filtrados y renderizarlo en la lista de productos.
  const filtrar = useSelector((state) => state.filtro);
  const todosLosProductos = useSelector((state) => state.products);
  //---------------------->>
  const [Paginado, currentPage, setCurrentPage] = usePaginado();

  useEffect(() => {
    setInfoFiltros({
      ...infoFiltros,
      filterPrice: filtrar,
      pageCurrent: currentPage,
      resetPaginado: setCurrentPage,
    });
  }, [currentPage, filtrar]);
  if (loading) return <Loading />;
  return (
    <Container>
      <WrapperCards>
        <CardContainer>
          {todosLosProductos?.productosAMostrar?.map((producto) => (
            <CardProduct
              key={producto.IdArt}
              producto={producto}
              mostrarDetalle={mostrarDetalle}
            />
          ))}
        </CardContainer>
      </WrapperCards>
      <WrapperPaginado>{todosLosProductos && <Paginado />}</WrapperPaginado>
    </Container>
  );
};

export default ListadoProductos;
