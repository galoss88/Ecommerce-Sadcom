import styled from "styled-components";

export const ContainerResumenCompra = styled.div`
  display: flex;
  height: 100%;
  max-width: 60rem;
  justify-content: center;
  align-items: center;
  margin: 20vh auto 0 auto;
  flex-direction: row;
  border-radius: 34px;

  box-shadow: 0 0 0.3rem 0;
  animation: resumencompra 1s ease 0s 1 normal forwards;
  @keyframes resumencompra {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  :hover {
    box-shadow: 0px 0px 12px 3px #6a1a1a;
  }
`;
export const WrapperProductos = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const WrapperProductosAcomprar = styled.div`
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 100%;
  overflow-y: scroll;
`;
export const WrapperPreciosTotales = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  flex-direction: column;
  height: 50%;
  width: 30%;
  gap: 2em;
`;
export const TituloResumen = styled.h1``;
export const WrapperRealizarCompra = styled.div`
  box-shadow: 5px 2px 27px 0px #6a1a1a;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  :hover {
    box-shadow: 0px 0px 12px 11px #6a1a1a;
  }
`;
export const WrapperTotales = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  p {
    margin: auto 0;
    padding: 0.5em;
  }
  height: 100%;
  :hover {
    box-shadow: 0px 0px 12px 11px #6a1a1a;
  }
`;
