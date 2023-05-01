import React from "react";
import { Container, Titulo, Wrapper } from "./styles/stylesSinProductos";
import Layout from "../../../pages/Layout/Layout";

const SinProductos = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <i className="bi bi-basket3"></i>
          <Titulo>Carrito vació</Titulo>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default SinProductos;
