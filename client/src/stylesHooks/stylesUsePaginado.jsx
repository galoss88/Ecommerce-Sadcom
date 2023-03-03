import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: .5em;
`;
export const WrapperUl = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
`
export const Ul = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 0;
  padding: 0 0;
  gap: .2em;
  
  

  
`;
export const Li = styled.li`
  list-style: none;
  border: 1px solid;
  border-radius: 5px;
  width: 2.2vw;
  
  background-color: ${({ paginaActual }) => (paginaActual ? "green" : "")};
`;
export const WrapperButton= styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: auto;
`
export const Button = styled.button`
width: 2em;
border-radius: 5px;
height: 100%;

`
    
