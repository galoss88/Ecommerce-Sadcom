import styled from "styled-components";
export const Wrapper = styled.div`
display: flex;
position: relative;


align-items: center;
@media (max-width: 768px) {
  display: none;
}
`;

export const WrapperResponsive = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`