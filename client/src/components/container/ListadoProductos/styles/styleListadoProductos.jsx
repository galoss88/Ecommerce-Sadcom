import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 0 0;
  align-items: flex-start;
  gap: 2rem;
  height: 100%;
  margin-top: 17rem;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 23rem;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    margin-top: 14.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 13rem;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 15rem;
  }
  @media (max-width: 320px) {
    margin-top: 12rem;
  }
`;
export const WrapperPaginado = styled.div`
  display: flex;
  width: 25%;
  height: 4%;
  gap: 3rem;
  align-items: center;
  @media (max-width: 1200px) {
    height: 1.8%;
    width: 100%;
    gap: 4rem;
  }
  @media (max-width: 1024px) {
    height: 3%;
  }
  @media (max-width: 768px) {
    height: 3%;
    width: 100%;
    gap: 4rem;
  }
  @media (max-width: 480px) {
    height: 2%;
    width: 100%;
    gap: 4rem;
  }
  @media (max-width: 320px) {
    height: 2%;
    width: 100%;
    gap: 4rem;
  }
`;
export const WrapperCards = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
  @media (max-width: 320px) {
  }
`;
export const TextSinResultados = styled.h2`
  font-size: 5rem;
  width: 100%;
  height: 100%;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 0.27fr));
  flex: 1;
  gap: 2rem;
  text-align: center;
  width: 100%;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(200px, 0.8fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(100px, 0.3fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, 0.8fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(150px, 0.87fr));
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, minmax(100px, 0.9fr));
  }
`;
