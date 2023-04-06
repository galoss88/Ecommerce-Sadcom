import styled from "styled-components";
export const ContainerImages = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ContainerImagesSecundarias = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 80%;
`;
export const ImageSecundaria = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 85%;
  max-height: 90%;
`;
export const WrapperImagesMiniatura = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 15%;
  justify-content: center;
`;

export const ImageMiniatura = styled.div`
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  flex-grow: 1;

  :hover {
    opacity: 1;
  }
`;
export const DeslizarImagen = styled.button`
  position: absolute;
  ${(props) => `
    ${props.direccion === "next" ? "right: 0" : "left: 0"};
  `}
  width: 6%;
  font-size: 3rem;
  height: 95%;
  background-color: rgba(0, 0, 0, .08);
  border: none;
  border-radius:10px;
  color: white;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  i{
    filter: drop-shadow(1px 1px 5px rgba(0,0,0,1));
  }
`;
