import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import {
  DatoUsuario,
  LabelInfo,
  WrapperInfo,
} from "../components/pure/login/PerfilUsuario/styles/stylesPerfilUsuario";
import { useSelector } from "react-redux";

const useDatosUsuario = (options) => {
  //info usuario de base de datos
  const dataUser = useSelector((state) => state.usuario);
  const generarDatoUsuario = (datos) => {
    return datos ? dataUser[datos] : "Sin definir";
  };
  const generarInput = () => {
    if (!Object.keys(dataUser).length) return <h1>Cargando Datos</h1>;
    return (
      <>
        {options.map(({ label, valor }) => (
          <WrapperInfo key={label}>
            <LabelInfo>
              <b>{label}:</b>
            </LabelInfo>
            <DatoUsuario>{generarDatoUsuario(valor)}</DatoUsuario>
          </WrapperInfo>
        ))}
      </>
    );
  };
  return [generarInput];
};

export default useDatosUsuario;
