import styled from "styled-components";

export const WrapperProducto = styled.div`
  display: flex;
  background-color: transparent;
  width: 80%;
  height: 100%;
  padding: 2rem;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    height: 45%;
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    height: 45%;
  }
  @media (max-width: 480px) {
    height: 30%;
  }
  @media (max-width: 320px) {
  }
`;
export const WrapperImageAndNameProduct = styled.div`
  display: flex;
  width: 70%;
  height: 24rem;
  gap: 0.5rem;
  @media (max-width: 1200px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    height: 10rem;
  }
  @media (max-width: 320px) {
    height: 7rem;
  }
`;
//IMAGEN DEL PRODUCTO
export const WrapperImagenProducto = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  border: 1px solid black;
  @media (max-width: 1200px) {
    height: 70%;

  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
    height: 70%;
  }
  @media (max-width: 480px) {
    height: 80%;
  }
  @media (max-width: 320px) {
  }
`;
export const ImagenProduct = styled.img`
  border-radius: 5px;
  max-width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  /* @media (max-width: 1200px) {
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  } */
`;
export const Cantidad = styled.label`
  display: flex;
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  font-size: 1.4rem;
  width: 1.8em;
  height: 1.6em;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  border-radius: 50%;
  color: white;
  background-color: var(--color-principal);
  /* @media (max-width: 1200px) {

  }  
@media (max-width: 1024px) {
  }   */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  /* @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  } */
`;

//Nombre y Talle de productos
export const WrapperNameAndTalle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;
export const NameProduct = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  @media (max-width: 1200px) {
    font-size: 1.5rem;
    
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;
export const Talle = styled.h3`
  font-size: 0.6rem;
  font-family: arial;
`;
//.-------
export const WrapperPriceProduct = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  word-wrap: break-word;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
export const PriceProduct = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 2.5rem;
  color: black;
  word-wrap: break-word;
  font-weight: 600;
  justify-content: center;
  @media (max-width: 1200px) {
  }  
@media (max-width: 1024px) {
  }  
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;

  }
`;

export const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #551616;
  height: 100%;
  width: auto;
  cursor: pointer;
  i {
    font-size: 1.5em;

    color: #fff;
  }
`;
