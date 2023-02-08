import React from "react";

const ButtonAtras = ({funcion}) => {
  return (
    <button type="button" onClick={() => funcion()}>
      Volver
    </button>
  );
};

export default ButtonAtras;
