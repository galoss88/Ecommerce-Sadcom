import React from "react";
import {
  ContainerImagePrincipal,
  ContainerImages,
  ContainerImagesSecundarias,
  ImagenPrincipal,
  ImageSecundaria,
} from "../components/pure/detailProducts/styles/stylesImagesDetail";

const useCarrouselImages = () => {
    const images = []
  return (
    <ContainerImages>
      <ContainerImagePrincipal>
        <ImagenPrincipal></ImagenPrincipal>
      </ContainerImagePrincipal>
      <ContainerImagesSecundarias>
        <ImageSecundaria></ImageSecundaria>
      </ContainerImagesSecundarias>
    </ContainerImages>
  );
};
export default useCarrouselImages;
