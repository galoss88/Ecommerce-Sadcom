import styled from "styled-components";
export const InputRadio = styled.input`
  margin-right: 0.3em;
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  -ms-appearance: checkbox;
  -o-appearance: checkbox;
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;
export const CampoRadio = styled.div`
  display: flex;
  font-size: 1.24rem;
  font-weight: 600;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;
export const DivInput = styled.div`
  display: flex;

  margin-top: 0;
`;
