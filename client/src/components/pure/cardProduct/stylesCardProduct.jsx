import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  height: 42rem;
  width: 100%;
  background-color: #e4e4e4;
  border-radius: 0px 5px 5px 5px;
  box-shadow: 0.5rem 0.5rem 1rem grey;
  cursor: default;
  border: 1px solid rgba(0, 0, 0, 0.115);
  &:hover {
    /* box-shadow: 0.5rem 0.5rem 1rem #3f3f46; */
    filter: drop-shadow(0px 1px 5px var(--color-principal));
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    height: 25rem;
  }
`;
export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  width: 100%;
  height: 100%;
`;
export const ImgProduct = styled.img`
  max-width: 100%;
  height: 70%;
  @supports (object-fit: cover) {
    object-fit: cover;
    object-position: center center;
  }
`;
export const NameProduct = styled.h2`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  text-align: start;
  font-family: Montserrat;
  margin: 0.3em 0 0em 0.8rem;
  line-height: 1.6rem;
  font-size: 1.3rem;
  font-weight: 700;
  white-space: wrap;
`;
export const PriceProduct = styled.label`
  margin: 1rem 0 0 0.8rem;
  font-weight: bold;
  position: absolute;
  bottom: 0.3em;
  font-size: 1.4em;
`;
export const NamePrice = styled.label`
  position: absolute;
  font-size: 0.9em;
  opacity: 0.3;

  bottom: 1.5em;
  left: 0.8em;
`;
export const Stock = styled.p`
  position: absolute;
  color: ${(props) => (props.stock ? "green" : "red")};
  font-weight: bold;
`;
export const ButtonAddToCart = styled.button`
  position: absolute;
  bottom: 5px;
  right: 7px;
  width: 3em;
  text-align: center;
  padding: 0.2em;

  border-radius: 0.5em;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #6f0000;
    color: #fff;
  }
  i {
    font-size: 1.8em;
  }
`;
