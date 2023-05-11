import styled from "styled-components";

export const WrapperButton = styled.div`
  display: block;
  width: 100%;
  justify-content: end;
  padding: 5px 5px 0 5px;
  margin-top: 18vh;
  font-size: 1.3rem;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 320px) {
  }
`;
export const ButtonResetFilters = styled.button`
  border: none;
  /*  box-shadow: 0 0 .1rem .1rem; */
  padding: 0.3em 0.5em;
  margin-bottom: 5px;
  background-color: black;
  color: white;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  :hover {
    background-color: #6f0000;
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    padding: .3rem 0;
    border-radius: 5px;
    font-size: 1.06rem;
  }
`;
