import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  width: 100%;
  height: 100%;
  animation: detail 1s ease-in-out 0s 1 alternate none;
  transition: animation 2s ease-in-out;
  margin-top: 15vh;
  @keyframes detail {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 7%;
  height: 100%;
`;
export const ContainerDescription = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
`;

export const ContainerDetail = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
`;
export const ContainerImageDetail = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;
