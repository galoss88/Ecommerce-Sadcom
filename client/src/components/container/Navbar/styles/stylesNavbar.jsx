import { Link } from "react-router-dom";
import styled from "styled-components";
export const ContainerNavbar = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  height: 16%;
  width: 100%;
  background: var(--color-navbar);
  border-top: 3.4rem solid var(--color-principal);
  @media (max-width: 1441px) {
  }
  @media (max-width: 1024px) {
    height: 10%;
  }
  @media (max-width: 800px) {
    height: 16%;
  }
  @media (max-width: 768px) {
    height: 14%;
  }
  @media (max-width: 480px) {
    height: 18%;
  }
  @media (max-width: 320px) {
    height: 35%;
  }
`;
export const WrapperFixed = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 5rem;
  align-items: center;
  @media (max-width: 1280px) {
    gap: 2rem;
  }
  @media (max-width: 1200px) {
    gap: 2rem;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    gap: 3rem;
  }
  @media (max-width: 480px) {
    gap: 1rem;
  }
  @media (max-width: 320px) {
  }
`;
export const WrapperSearch = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 24%;
  @media (max-width: 1281px) {
    width: 30%;
  }
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 66%;
  }
  @media (max-width: 320px) {
    width: 80%;
  }
`;
export const WrapperCartProducts = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: auto;
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
export const WrapperLogo = styled.div`
  display: flex;
  @media (max-width: 1280px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const WrapperLogin = styled.div`
  display: flex;
  width: auto;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
export const WrapperResponsive = styled.div`
  display: flex;
`;
<hr />;

export const Img = styled.img`
  height: 8rem;
  width: 9rem;
  border-radius: 5px;
  @media (max-width: 1280px) {
    height: 6rem;
    width: 6.5rem;
    margin-left: 0.7rem;
  }
  @media (max-width: 1200px) {
    height: 5rem;
    width: 3rem;
    margin-left: 0.7rem;
  }
  @media (max-width: 1024px) {
    width: 5rem;
  }
  @media (max-width: 768px) {
    width: 5.3rem;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    height: 4rem;
    width: 4rem;
  }
`;
export const WrapperLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 33%;

  height: 100%;
  @media (max-width: 1441px) {
    width: 65%;
  }
  @media (max-width: 1281px) {
    width: 50%;
  }
  @media (max-width: 1200px) {
    width: 70%;
    height: auto;
  }
  @media (max-width: 1024px) {
    width: 93%;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const LinkNavBar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-principal);
  font-size: var(--font-size);
  font-weight: 600;
  &:hover {
    border-bottom: 1px solid #84000080;
  }
  @media (max-width: 1281px) {
    font-size: 1.7rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1024px) {
    gap: .5rem;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

//RESPONSIVE
export const ContainerNavBarResponsive = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
export const ContainerResponsiveNav = styled.div`
  display: flex;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0rem;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
export const ContainerLinksResponsive = styled.div`
  display: flex;
  padding: 2rem;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    padding: 0.3rem;
  }
`;
export const WrapperLinksResponsive = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    height: 90%;
    gap: 0;
    gap: 0rem;
  }
`;
export const LinkNavBarResponsive = styled(Link)`
  color: var(--color-principal);
  font-weight: 600;
  padding: 3rem;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
    padding: 2.5rem;
  }
`;

export const WrapperLoginResponsive = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: flex;
  }
  @media (max-width: 320px) {
  }
`;
