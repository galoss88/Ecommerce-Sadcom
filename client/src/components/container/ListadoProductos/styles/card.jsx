import styled from "styled-components";
export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
