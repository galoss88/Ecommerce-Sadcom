import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  &:hover{
cursor: pointer;

}
`;
