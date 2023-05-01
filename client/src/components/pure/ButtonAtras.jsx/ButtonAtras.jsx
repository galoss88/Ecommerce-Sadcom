import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./stylesButtonAtras";

const ButtonNavigate = ({ accion }) => {
  const navigate = useNavigate();
  const funcionAplicar = () => {
    navigate(accion);
  };
  return (
    <Button type="button" onClick={() => funcionAplicar()}>
      <i className="bi bi-arrow-left"></i>
    </Button>
  );
};

export default ButtonNavigate;
