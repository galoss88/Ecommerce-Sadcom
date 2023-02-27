import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./stylesButtonAtras";

const ButtonAtras = ({ funcion }) => {
  const navigate = useNavigate();
  return (
    <Button type="button" onClick={() => navigate(-1)}>
      Volver
    </Button>
  );
};

export default ButtonAtras;
