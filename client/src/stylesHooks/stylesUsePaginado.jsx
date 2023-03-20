import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0.4em;
  justify-content: center;
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
  font-weight: bold;
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
  width: 2em;
  border-radius: 5px;
  height: 100%;
  :hover{
    background-color: rgba(111,0,0,1);
    color: #FFF;
  }
`;
