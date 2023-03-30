import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  margin: 6% 0 0 0;
  justify-content: center;
  align-items: center;
  gap: 1em;
  height: 100%;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
export const WrapperPaginado = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
  align-items: center;
`;
export const WrapperCards = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 0.5fr));
  gap: 2em;
  margin-top: 2rem;
  flex: 1;

  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  /* @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

    width: 100%;
    margin: 1rem 0.8rem 0 0.8rem;
  }
  @media (max-width: 768px) and (height: 1024px) {
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
    width: 100%;
    margin: 1rem 0 0 2rem;
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 100%);
    margin: 1rem 50% 1rem 50%;
  } */
`;
