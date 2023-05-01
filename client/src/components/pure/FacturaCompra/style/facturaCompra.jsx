import styled from "styled-components";

export const ContainerFacturaCompra = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
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
