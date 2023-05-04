import styled from "styled-components";

export const ContainerFacturaCompra = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    height: 20%;
    width: 50%;
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 100%;

    
  }
  @media (max-width: 320px) {
    
  }
`;

export const WrapperDownloadPdf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  font-size: 3rem;
  padding: 5rem;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: var(--color-principal);
    color: white;
  }
`;
