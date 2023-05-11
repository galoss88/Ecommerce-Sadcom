import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  gap: 0.4em;
  justify-content: center;
  align-items: center;
`;
export const WrapperUl = styled.div`
  display: flex;

  justify-content: center;
  width: auto;
`;
export const Ul = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 0;
  padding: 0 0;
  gap: 0.2em;
`;
export const Label = styled.label`
  font-weight: 700;
  font-size: 1.3rem;
  @media (max-width: 1281px) {
  }  
@media (max-width: 1200px) {
  }  
@media (max-width: 1024px) {
  }  
@media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;
export const Li = styled.li`
  list-style: none;
  border: 1px solid;
  border-radius: 5px;
  width: 2.2vw;
  background-color: ${({ paginaActual }) => (paginaActual ? "green" : "")};
`;
export const WrapperButton = styled.div`
  display: flex;
  height: 100%;
  width: auto;
  background-color: black;
`;
export const Button = styled.button`
  width: 3rem;
  border-radius: 5px;
  height: 100%;
  :hover {
    background-color: rgba(111, 0, 0, 1);
    color: #fff;
  }
`;
