import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  gap: 2rem;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  width: 100%;
  height: 100vh;
  animation: detail 1s ease-in-out 0s 1 alternate none;
  transition: animation 2s ease-in-out;
  margin-top: 18rem;
  @keyframes detail {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1200px) {
    margin-top: 30rem;
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20rem;
    gap: 0;
  }
  @media (max-width: 480px) {
    margin-top: 17rem;
  }
  @media (max-width: 320px) {
    margin-top: 13rem;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
  justify-content: center;
  align-items: start;
  width: 3%;
  z-index: 2;
  @media (max-width: 1200px) {
    height: 4%;
    width: 10%;
    top: 1rem;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    height: 4%;
    width: 10%;
    top: 1rem;
  }
  @media (max-width: 480px) {
    height: 5%;
    width: 12%;
  }
  @media (max-width: 320px) {
    height: 5.5%;
    width: 12%;
  }
`;
export const ContainerDescription = styled.div`
  display: flex;
  width: 93%;
  height: 100%;
  gap: 1em;
  @media (max-width: 1200px) {
    width: 100%;
    height: 92%;
    flex-direction: column;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const ContainerImageDetail = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    height: 87%;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 87%;
  }
  @media (max-width: 480px) {
    height: 80%;
  }
  @media (max-width: 320px) {
  }
`;

export const ContainerDetail = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    height: 40%;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    height: 60%;
  }
`;
