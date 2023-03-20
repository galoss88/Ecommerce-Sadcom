import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  margin: 20vh 0 0 0;
  flex-direction: column;
`;
export const TextoLoading = styled.h1`
  animation: loading 4s ease 0s infinite reverse forwards;
  @keyframes loading {
    0%,
    50%,
    100% {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }
`;
export const WrapperSpinnerLoading = styled.div``;
