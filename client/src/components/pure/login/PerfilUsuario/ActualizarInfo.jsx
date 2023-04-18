import React from "react";
import {
  ButtonSetInfo,
  WrapperButtonSetInfo,
} from "./styles/stylesPerfilUsuario";
const ActualizarInfo = ({
  setEditarInfo,
  editarInfo,
  actualizarInformacion,
}) => {
  return (
    <WrapperButtonSetInfo>
      <ButtonSetInfo onClick={() => actualizarInformacion()}>
        Actualizar informacion
      </ButtonSetInfo>
      <ButtonSetInfo
        onClick={() => {
          setEditarInfo(!editarInfo);
        }}
      >
        Atras
      </ButtonSetInfo>
    </WrapperButtonSetInfo>
  );
};

export default ActualizarInfo;
