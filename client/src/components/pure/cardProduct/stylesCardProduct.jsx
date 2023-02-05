import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 18rem;
  width: 14rem;
  background-color: #E4E4E4 ;
  border-radius: 10px;
  box-shadow: 0.5rem 0.5rem 1rem grey;
  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem #3f3f46;
  }
`;

export const ImgProduct = styled.img`
  max-width: 100%;
  height: 70%;
`;
export const NameProduct = styled.h2`
  display: flex;
  width: auto;
  height: auto;  
  font-family: Montserrat;
  margin: 0.3em 0 0em 0.8rem;
  line-height: 1.2rem;
  font-size: 1rem;
  white-space: wrap;
`;
export const PriceProduct = styled.label`
  margin: 1rem 0 0 0.8rem;
  font-weight: bold;
  position: absolute;
  bottom: 0.3rem;
  
`;
export const NamePrice = styled.label`
    position: absolute;
    font-size: 0.9rem;
    opacity: 0.3;
    
    bottom: 1.5rem;
    left: 0.8rem;

`
