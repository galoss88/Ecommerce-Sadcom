import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./stylesButtonAtras";

const ButtonAtras = ({ funcion }) => {
  const navigate = useNavigate();
  const funcionAplicar = ()=>{
    funcion()
    navigate(-1)
  }
  return (
    <Button type="button" onClick={() => funcionAplicar()}>
      Volver
    </Button>
  );
};

export default ButtonAtras;
