import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: #f2f2f2;
  padding: 0.5em;
  position: absolute;
  bottom: -25.6em;
  right: -0.7em;
  width: 20rem;
  height: 25em;
  justify-content: space-between;
  align-items: start;
  box-shadow: 0 0 0.1rem 0;
`;
export const WrapperProductsCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.3em;
  padding-top: 0.3em;
  overflow-y: scroll;
`;
//Contenedor de la imagen, el nombre-talle y precio del producto
export const Hr = styled.hr`
  width: 94%;
  margin: 0 0.5rem 0 0.5rem;
`;
export const WrapperButton = styled.div``;
