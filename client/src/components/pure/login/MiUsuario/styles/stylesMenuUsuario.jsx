import styled from "styled-components";

export const NavMenuUsuario = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -8rem;
  left: -30%;
  width: 10rem;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.5rem 0.2rem;
  box-shadow: 0 0 0.1rem 0;
  background-color: rgb(111, 0, 0);
`;
export const WrapperButtonMenu = styled.div`
  display: flex;
  width: 100%;
`;
export const ButtonMenu = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 0.5rem 0;
  color: #fff;

  :hover {
    box-shadow: 0 0 0rem 0.1rem #fff;
    border-radius: 5px;
  }
`;