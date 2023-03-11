import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const WrapperResponsive = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`

export const WrapperFixed = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 5vh;
  z-index:1000;
  @media (max-width: 768px) {
    margin-top: 4vh;
  }
`