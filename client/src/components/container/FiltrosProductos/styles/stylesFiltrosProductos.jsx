import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  
 
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
