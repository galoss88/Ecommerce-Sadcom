import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardContainer, Container } from "./styles/card";
import { getProducts, showDetail } from "../../../redux/actions";
import CardProduct from "../../pure/cardProduct/CardProduct";
// import Pagination from "react-bootstrap/Pagination";
const ListadoProductos = ({ mostrarDetalle }) => {
  const todosLosProductos = useSelector((state) => state.products);
  const showProducts = useSelector(state=>state.showDetail)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());    
  }, []);
if(showProducts) return null;
  return (
    <Container>
      <CardContainer>
        {todosLosProductos &&
          todosLosProductos.map((p) => (
            <CardProduct
              key={p.id}
              producto={p}
              mostrarDetalle={mostrarDetalle}
            />
          ))}
      </CardContainer>
    </Container>
  );
};

export default ListadoProductos;
