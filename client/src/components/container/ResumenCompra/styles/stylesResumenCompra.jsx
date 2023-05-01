import styled from "styled-components";

export const ContainerResumenCompra = styled.div`
  display: flex;
  position: absolute;
  left: 4%;
  height: 100%;
  max-width: 90vw;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1vh auto 5rem auto;
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
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  } 
`;
export const WrapperProductosAcomprar = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  padding: 1rem 0 0 1rem;
  width: 100%;
  overflow-y: scroll;
  @media (max-width: 1200px) {
    width: 95%;
    height: 90%;
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  /* overflow: hidden; */

  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
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
  @media (max-width: 1200px) {
    height: 20%;
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
    width: 60%;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
  @media (max-width: 320px) {
  }
`;
export const TituloResumen = styled.h1``;
export const WrapperRealizarCompra = styled.div`
  box-shadow: 5px 2px 27px 0px #6a1a1a;
  padding: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 600;
  :hover {
    box-shadow: 0px 0px 12px 11px #6a1a1a;
  }
  @media (max-width: 1200px) {
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
`;
export const WrapperTotales = styled.div`
  display: flex;
  width: 90%;
  height: 25%;
  align-items: flex-start;
  border-radius: 5px;

  p {
    margin: auto 0;
    padding: 0.5em;
    font-size: 2rem;
    font-weight: 600;
  }

  :hover {
    box-shadow: 0px 0px 12px 11px #6a1a1a;
  }
    @media (max-width: 1200px) {
      height: 20%;
      
  }  
@media (max-width: 1024px) {
  }  
`;
