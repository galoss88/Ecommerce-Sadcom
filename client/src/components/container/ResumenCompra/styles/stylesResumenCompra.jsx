import styled from "styled-components";

export const ContainerResumenCompra = styled.div`
  display: flex;
  height: auto;
  max-width: 40rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  border-radius: 34px;
  box-shadow: 0 0 .3rem 0;
  animation: resumencompra 1s ease 0s 1 normal forwards;
  @keyframes resumencompra {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  
  :hover{
    box-shadow: 0px 0px 12px 3px #6A1A1A;
  }
`;
export const WrapperProductos = styled.div`
  display: flex;
  padding: 1em;
  width: 80%;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
export const WrapperProductosAcomprar = styled.div`
  display: flex;
  flex-direction: column;
  height: 30em;
  overflow-y: auto;
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

p{
    margin: auto 0;
    padding: .5em;
}
height: 100%;
:hover{
    box-shadow: 0px 0px 12px 11px #6A1A1A;
}
`;
