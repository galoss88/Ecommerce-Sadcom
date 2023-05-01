import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;
export const WrapperHeaderCard = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: #262424;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    height: 25%;
  }
`;
export const AcercaDeProdcuto = styled.span`
  color: white;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;
export const PriceProduct = styled.span`
  color: white;
  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  @media (max-width: 320px) {
    font-size: 2.4rem;
  }
`;
//-----------------------------------
export const WrapperInfoProducto = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;
//-----------------
export const Titulo = styled.h1`
  font-size: 2.5rem;
  text-align: justify;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
//----------------------------------

export const WrapperDescriptionProducto = styled.div``;
export const Description = styled.p`
  font-size: 2rem;
  text-align: justify;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
    font-weight: 100;

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
    font-weight: 100;
  }
`;
//---------------------------
export const WrapperTalleCantidad = styled.div`
  display: flex;
  justify-content: center;
  gap: 15%;
`;
export const WrapperSelector = styled.div``;
export const LabelSelect = styled.label`
  margin-right: 1em;
`;
export const Selector = styled.select``;
//----------------------------------
export const WrapperButtonCarrito = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
export const ButtonAñadirCarrito = styled.button`
  display: flex;
  width: 24%;
  margin: 2em 2em 2em 0;
  font-size: 1.7rem;
  justify-content: space-around;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  font-weight: 600;

  :hover {
    background-color: var(--color-principal);
    color: white;
  }
  @media (max-width: 768px) {
    width: 30%;
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 66%;
  }
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`;
