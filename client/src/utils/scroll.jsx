export const scroll = (direccion, ubicacion) => {
  const definirScroll = {
    behavior: "smooth",
  };
  definirScroll[direccion] = ubicacion || 0;
  window.scrollTo(definirScroll);
};
