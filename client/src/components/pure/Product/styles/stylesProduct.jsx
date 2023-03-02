import styled from "styled-components";

export const WrapperProducto = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content: space-between;


`;
export const WrapperImageAndNameProduct = styled.div`
display: flex;
gap: 4px;
width: 100%;
height: 25%;

`
//IMAGEN DEL PRODUCTO
export const WrapperImagenProducto = styled.div`
width: 25%;
height: 100%;
position: relative;
border: 1px solid black;

`;
export const ImagenProduct = styled.img`
border-radius: 5px;
width: 100%;
height: 100%;
background-position: center;
background-size: cover;


`
export const Cantidad = styled.label`
display: flex;
position: absolute;
top: -.5em;
right: -.5em;
font-size: .6em;
width: 1.8em;
height: 1.5em;
text-align: center;
justify-content: center;
align-items: center;
font-weight: bolder;
border-radius: 50%;

color: white;
background-color: grey;
`

//Nombre y Talle de productos
export const WrapperNameAndTalle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
export const NameProduct = styled.h2`
font-size: .7rem;
font-weight: bold;
    
`
export const Talle = styled.h3`
font-size: .6rem;
font-family: arial;
`
//.-------
export const WrapperPriceProduct = styled.div``;
export const PriceProduct = styled.label`
    
`
