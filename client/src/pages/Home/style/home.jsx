import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Wrapper = styled.div`
  position: relative;
  background-image: ${({ RutaBanner }) =>
    RutaBanner ? `url(${RutaBanner})` : null};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  animation: home 1s ease-in-out 0s 1 alternate none;
  @keyframes home {
    0% {
      opacity: 0;
      transform: scale(1.4);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
export const Detail = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 4rem;
  border-radius: 5px;
  left: 0rem;
  width: 100%;
  height: 80%;
  background-color: #6f000026;
  @media (max-width: 768px) {
    padding-top: 10vh;
    width: 70vw;
    font-weight: 100;
    font-size: 1.2rem;
    line-height: normal;
  }
  h1 {
    font-size: 5rem;
    color: #a51d1d;

    -webkit-animation: tracking-in-contract-bck-top 1.8s ease-in-out both;
    animation: tracking-in-contract-bck-top 1.8s ease-in-out both;
    @-webkit-keyframes tracking-in-contract-bck-top {
      0% {
        letter-spacing: 1em;
        -webkit-transform: translateZ(400px) translateY(-300px);
        transform: translateZ(400px) translateY(-300px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
    @keyframes tracking-in-contract-bck-top {
      0% {
        letter-spacing: 1em;
        -webkit-transform: translateZ(400px) translateY(-300px);
        transform: translateZ(400px) translateY(-300px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
  }
  p {
    font-size: 3rem;
    color: #a51d1d;
    font-weight: 600;
    -webkit-animation: tracking-in-expand-fwd-bottom 4s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand-fwd-bottom 4s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    @-webkit-keyframes tracking-in-expand-fwd-bottom {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px) translateY(500px);
        transform: translateZ(-700px) translateY(500px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
    @keyframes tracking-in-expand-fwd-bottom {
      0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px) translateY(500px);
        transform: translateZ(-700px) translateY(500px);
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 320px) {
  }
`;
export const Button = styled.button`
  width: 20%;
  height: 15%;
  color: #6f0000;
  border-style: solid;
  border-color: #6f0000;
  border-radius: 0;
  font-size: 2rem;
  font-weight: 600;
  border-width: 2px;
  border-radius: 5px;
  background-color: transparent;
  :hover {
    background-color: var(--color-primario);
    color: #fff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SecondBlock = styled.div`
  background-color: #f2f2f2;
`;
export const Title = styled.h2`
  text-align: center;
  padding: 5vh 0 5vh 0;
`;
export const ResponsiveSearcher = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    background-color: rgba(242, 242, 242, 0.5);
    padding: 5px 0 5px 25vw;
  }
`;
