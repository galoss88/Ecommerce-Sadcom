import React from "react";
import { Container, Titulo, Wrapper } from "./styles/stylesSinProductos";

const SinProductos = () => {
  return (
    <Container>
      <Wrapper>
        <i className="bi bi-basket3"></i>
        <Titulo>Carrito vació</Titulo>
      </Wrapper>
    </Container>
  );
};

export default SinProductos;
