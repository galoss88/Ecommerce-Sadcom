import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: #F2F2F2;
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
//Contenedor de la imagen, el nombre-talle y precio del producto
export const Hr = styled.hr`
  width: 94%;
  margin: 0 .5rem 0 .5rem;
`