import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 14rem;
  width: 14rem;
  background-color: #e4e4e4;
  border-radius: 10px;
  box-shadow: 0.5rem 0.5rem 1rem grey;

  cursor: default;
  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem #3f3f46;
  }
  @media (max-width: 761px) {
    width: 10rem;
  }
`;
export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
` 
export const ImgProduct = styled.img`
  max-width: 100%;
  height: 60%;
  @supports(object-fit: cover) {
      object-fit: cover;
      object-position: center center;
  }
`;
export const NameProduct = styled.h2`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  height: auto;
  font-family: Montserrat;
  margin: 0.3em 0 0em 0.8rem;
  line-height: 1.2rem;
  font-size: .7rem;
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
`;
export const Stock = styled.p`
  position: absolute;
  color: ${(props) => props.stock ? "green" : "red"};
  font-weight: bold;
`;
export const ButtonAddToCart = styled.button`
  position: absolute;
  bottom: 5px;
  right: 7px;
  width: 2em;
  text-align: center;
  background-color: red;
  padding: .2em;
  z-index: 4;
  border-radius: 0.5em;
  border: none;
  :hover {
    cursor: pointer;
    background-color: grey;
  }
`;
