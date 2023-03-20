import styled from "styled-components";

export const WrapperProducto = styled.div`
  display: flex;
  background-color: transparent;
  width: 35rem;
  padding: 1em;
  justify-content: space-between;
`;
export const WrapperImageAndNameProduct = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  height: 100%;
`;
//IMAGEN DEL PRODUCTO
export const WrapperImagenProducto = styled.div`
  width: 40%;
  height: 7em;
  position: relative;
  border: 1px solid black;
`;
export const ImagenProduct = styled.img`
  border-radius: 5px;
  max-width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;
export const Cantidad = styled.label`
  display: flex;
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  font-size: 0.6em;
  width: 1.8em;
  height: 1.5em;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  border-radius: 50%;

  color: white;
  background-color: grey;
`;

//Nombre y Talle de productos
export const WrapperNameAndTalle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;
export const NameProduct = styled.h2`
  font-size: .9rem;
  font-weight: bold;
  color: black;
`;
export const Talle = styled.h3`
  font-size: 0.6rem;
  font-family: arial;
`;
//.-------
export const WrapperPriceProduct = styled.div`
  display: flex;
  width: 35%;
  height: 100%;
  word-wrap: break-word;
  justify-content: end;
`;
export const PriceProduct = styled.p`
  display: flex;
  align-items: center;
color: black;
  word-wrap: break-word;
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

    color: #FFF;
  }
`;
