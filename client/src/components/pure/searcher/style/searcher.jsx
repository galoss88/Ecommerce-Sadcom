import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    width: 94%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  gap: 0.2rem;
`;
export const InputSearch = styled.input`
  display: flex;
  border-radius: 5px;
  padding: 1rem;
  width: 77%;
  font-size: 2rem;
  background-color: var(--color-secundario);
  border: 2px solid rgba(207, 78, 78, 0.5);
  &:focus {
    outline: none;
    color: var(--color-principal);
  }
  ::placeholder {
    color: var(--color-principal);
  }
`;
export const InputSubmit = styled.input`
  font-weight: 600;
  font-size: 1.7rem;
  border-radius: 5px;
  border: 2px solid rgba(207, 78, 78, 0.5);
  background-color: var(--color-secundario);

  flex: 1;
  :hover {
    background-color: rgba(207, 78, 78, 0.5);
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    padding: 0.5rem;
    font-size: 1.3rem;
  }
`;
