import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  background-color: var(--color-principal);
  color: white;
  font-weight: bold;
  width: 100%;
  border: none;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #942323;
  }
  i {
    font-size: 2.3rem;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
