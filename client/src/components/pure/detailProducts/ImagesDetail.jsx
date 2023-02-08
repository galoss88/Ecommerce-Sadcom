import React from "react";
import {
  ContainerImagePrincipal,
  ContainerImages,
  ContainerImagesSecundarias,
  ImagenPrincipal,
  ImageSecundaria,
} from "./styles/imagesDetail";

const ImagesDetail = () => {
  return (
    <ContainerImages>
        Imagenes
      <ContainerImagePrincipal>
        <ImagenPrincipal />
      </ContainerImagePrincipal>
      <ContainerImagesSecundarias>
        <ImageSecundaria />
      </ContainerImagesSecundarias>
    </ContainerImages>
  );
};

export default ImagesDetail;
