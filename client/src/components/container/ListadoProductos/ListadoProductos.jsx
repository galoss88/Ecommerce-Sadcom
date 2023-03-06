import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardContainer,
  Container,
  WrapperCards,
  WrapperPaginado,
} from "./styles/styleListadoProductos";
import { getProducts, showDetail } from "../../../redux/actions";
import CardProduct from "../../pure/cardProduct/CardProduct";
import usePaginado from "../../../hooks/usePaginado";
import { useContext } from "react";
import { contextListaProductos } from "../../../context/ContextListaProductos";
// import Pagination from "react-bootstrap/Pagination";
const ListadoProductos = ({ mostrarDetalle }) => {
  const enviarInfoFiltrado = useContext(contextListaProductos);
  const { setInfoFiltros, infoFiltros } = enviarInfoFiltrado;
  //Traigo del estado global lo que necesito para realizar los filtrados y renderizarlo en la lista de productos.
  const filtrar = useSelector((state) => state.filtro);
  const todosLosProductos = useSelector((state) => state.products);
  const showProducts = useSelector((state) => state.showDetail);

  //---------------------->>
  const [Paginado, currentPage] = usePaginado();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts(currentPage, filtrar));
  // }, [dispatch, currentPage, filtrar]);
  useEffect(() => {
    setInfoFiltros({
      ...infoFiltros,
      filterPrice: filtrar,
      pageCurrent: currentPage,
    });
  }, [currentPage, filtrar]);
  if (showProducts) return;

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
      <WrapperPaginado>
        <Paginado />
      </WrapperPaginado>
    </Container>
  );
};

export default ListadoProductos;
