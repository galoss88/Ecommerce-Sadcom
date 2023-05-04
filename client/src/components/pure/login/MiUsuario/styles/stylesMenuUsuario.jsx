import styled from "styled-components";

export const NavMenuUsuario = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 170%;
  left: -3%;
  width: 100%;
  height: auto;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  gap: 0.5em;
  font-size: var(--font-size);
  padding: 24% 10%;
  box-shadow: 0 0 0.1rem 0;
  background-color: rgb(111, 0, 0);
  z-index: 1;
  animation: menuUsuario 1s ease-in-out 0s 1 alternate none;
  @keyframes menuUsuario {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 1441px) {
    top: 7rem;
    font-size:1.2rem;


  
  }

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    left: -2rem;
    bottom: -10rem;
  top: 120%;

    /* width: 12rem; */
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
    bottom: -11rem;
    /* width: 15rem; */
  }
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (max-width: 320px) {
  }
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
