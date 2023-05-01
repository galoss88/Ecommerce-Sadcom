import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
  height: 100%;
  background-color: #f2f2f2;
  @media (max-width: 1200px) {
    flex-direction: row;
    height: 5%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    flex-direction: row;
    height: 5%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (max-width: 320px) {
  }
`;
export const FormFilters = styled.form`
  margin: 1em auto 0 2em;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 1rem;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 1rem;
  }
  @media (max-width: 480px) {
    display: flex;
    width: 80%;
    margin: 1rem 0 0 0rem;
  }
  @media (max-width: 320px) {
  }
`;

// export const ButtonFilters = styled.button`
//   display: none;
//   @media (max-width: 760px) {
//     display: block;
//     /* background-color: ${(props)=>props.showButtonResponsive ? "blue": "red"}; */
//   }
// `;
