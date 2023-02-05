import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardContainer, Container } from "./styles/card";
import { getProducts } from "../../../redux/actions";
import CardProduct from "../../pure/cardProduct/CardProduct";
const ListadoProductos = ({ mostrarDetalle }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productos = useSelector((state) => state.products);
  
  return (
    <Container>
      <CardContainer>
        {productos?.map((p) => (
          <CardProduct
            key={p.id}
            producto={p}
            mostrarDetalle={mostrarDetalle}
          />
        ))}
      </CardContainer>
      ;
    </Container>
  );
};

export default ListadoProductos;  
