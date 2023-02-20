import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1.5em;
  width: 16%;
  background-color: #e4e4ea;
  @media (max-width:768px){
    display: none;

  }
`;
export const FormFilters = styled.form`
  margin: 1em auto 0 2em;
`;

// export const ButtonFilters = styled.button`
//   display: none;
//   @media (max-width: 760px) {
//     display: block;
//     /* background-color: ${(props)=>props.showButtonResponsive ? "blue": "red"}; */
//   }
// `;
