import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import {
  CardContainer,
  Container,
  WrapperCards,
  WrapperPaginado,
} from "./styles/styleListadoProductos";
import { getProducts, pagination, showDetail } from "../../../redux/actions";
import CardProduct from "../../pure/cardProduct/CardProduct";
import usePaginado from "../../../hooks/usePaginado";
// import Pagination from "react-bootstrap/Pagination";
const ListadoProductos = ({ mostrarDetalle }) => {
  const todosLosProductos = useSelector((state) => state.paginado);
  const loading = useSelector((state) => state.loading);
  const showProducts = useSelector((state) => state.showDetail);
  const [Paginado, currentPage] = usePaginado();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pagination(currentPage));
  }, [dispatch, currentPage]);

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
