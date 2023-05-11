import styled from "styled-components";
export const ContainerMiUsuario = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    display: flex;
  }
  @media (max-width: 320px) {
  }
`;
export const ButtonMiUsuario = styled.p`
  margin: 0;
  cursor: pointer;
  font-size: var(--font-size);
  font-weight: 600;
  color: rgb(111, 0, 0);
  :hover {
    color: #2222b5;
  }
  @media (max-width: 1281px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 1.3rem;
    text-align: center;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size:100%;
  }
  @media (max-width: 320px) {
    font-size: 80%;
    text-align: center;
  }
`;
