import React, { useState } from "react";
import {
  ContainerImage,
  ContainerImages,
  ContainerImagesSecundarias,
  DeslizarImagen,
  ImageMiniatura,
  ImageSecundaria,
  WrapperImagesMiniatura,
} from "./styles/stylesImagesDetail";
const ImagesDetail = () => {
  const imagenes = [
    "https://images.freejpg.com.ar/400/2603/cloud-day-nature-sky-weather-blue-clouds-F100036838.jpg",
    "https://images.freejpg.com.ar/400/2603/nature-surfer-walking-beach-water-outdoors-animal-sand-coastline-F100036837.jpg",
    "https://images.freejpg.com.ar/400/2603/meadow-agriculture-outdoors-wheat-field-nature-plant-summer-F100036835.jpg",
    "https://images.freejpg.com.ar/400/2603/animal-outdoors-meadow-farm-rural-scene-horse-nature-F100036834.jpg",
    "https://images.freejpg.com.ar/400/2603/nature-sunlight-backgrounds-sunset-yellow-pennants-outdoors-F100036830.jpg",
  ];
  const [{ images, activeIndex }, setState] = useState({
    images: imagenes,
    activeIndex: 0, // begin with the first item
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({ ...s, activeIndex: images.length - 1 }));
      return;
    }
    if (newIndex === images.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };
  return (
    <ContainerImages>
      <ContainerImagesSecundarias>
        <ContainerImage>
          <ImageSecundaria src={images[activeIndex]} />
          <DeslizarImagen direccion="next" onClick={moveTo(activeIndex + 1)}>
          <i className="bi bi-arrow-right"></i>
          </DeslizarImagen>
          <DeslizarImagen
            direccion="previous"
            onClick={moveTo(activeIndex - 1)}
          >
            <i className="bi bi-arrow-left"></i>
          </DeslizarImagen>
        </ContainerImage>
        {/* -------------------------------------- */}
        <WrapperImagesMiniatura>
          {images.map((imagen, index) => (
            <ImageMiniatura
              onClick={moveTo(index)}
              key={imagen}
              active={activeIndex === index}
              src={imagen}
            />
          ))}
        </WrapperImagesMiniatura>
      </ContainerImagesSecundarias>
    </ContainerImages>
  );
};

export default ImagesDetail;
