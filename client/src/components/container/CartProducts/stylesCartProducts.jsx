import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  padding: 0;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 70%;
  }  
@media (max-width: 1024px) {
  }  
  
`;

export const ProductosEnCarrito = styled.span`
  position: absolute;
  right: 0;
  top: 0.05em;
  background-color: #6F0000;
  color: #FFF;
  font-weight: bold;
  border-radius: 5px;
  width: 2.2rem;
  text-align: center;
  font-size: 1.4rem;
  @media (max-width: 1200px) {
    width: 1.7rem;
    font-size: 1.2rem;
    right: .5rem;
    top: .6rem;
  }  
@media (max-width: 1024px) {
  }  
`;
export const Icono = styled.div`
font-size: 4rem;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }  
@media (max-width: 1024px) {
  }  
`
