import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(12rem, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  width: 80%;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

    width: 100%;
    margin: 1rem 0.8rem 0 0.8rem;
  }
  @media (max-width: 768px) and (height: 1024px) {
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
    width: 100%;
    margin: 1rem 0 0 2rem;
    background-color: red;
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 100%);
    margin: 1rem 50% 1rem 50%;
  }
`;
