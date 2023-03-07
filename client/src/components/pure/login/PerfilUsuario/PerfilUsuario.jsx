import React, { useState } from "react";
import useDatosUsuario from "../../../../hooks/useDatosUsuario";
import useInputUsuario from "../../../../hooks/useInputUsuario";
import { infoUsuario } from "../../../../Models/infoUsuario";
import { optionsInput } from "../../../../Models/InputsUsuario";
import {
  ButtonCloseModal,
  ButtonSetInfo,
  ContainerPerfilUsuario,
  WrapperButtonSetInfo,
  WrapperDatosPerfil,
  WrapperInputs,
} from "./styles/stylesPerfilUsuario";

const PerfilUsuario = ({ ocultarPerfil }) => {
  const [valuesInputs, Inputs] = useInputUsuario(optionsInput);
  const [DatosUsuario] = useDatosUsuario(infoUsuario);
  const [editarInfo, setEditarInfo] = useState(false);
  const editarInformacion = () => {
    setEditarInfo(!editarInfo);
  };
  const cerrarPerfilUsuario = () => {
    ocultarPerfil(false);
  };
  return (
    <ContainerPerfilUsuario>
      <WrapperDatosPerfil>
        <WrapperInputs>
          <ButtonCloseModal onClick={() => cerrarPerfilUsuario()}>
            X
          </ButtonCloseModal>
          {editarInfo ? <Inputs /> : <DatosUsuario />}
        </WrapperInputs>

        <WrapperButtonSetInfo>
          <ButtonSetInfo onClick={() => editarInformacion()}>
            Editar mi información
          </ButtonSetInfo>
        </WrapperButtonSetInfo>
      </WrapperDatosPerfil>
    </ContainerPerfilUsuario>
  );
};

export default PerfilUsuario;
