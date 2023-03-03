import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: #fff;
padding: .5em;
  position: absolute;
  bottom: -20.6em;
  right: -0.7em;
  width: 40%;
  height: 20em;
  justify-content: space-between;
  align-items: start;
  box-shadow: 0 0 0.1rem 0;
`;
export const WrapperProductsCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: .3em;
  padding-top: .3em;
  overflow-y: scroll;
`
//Contenedor de la imagen, el nombre-talle y precio del producto
