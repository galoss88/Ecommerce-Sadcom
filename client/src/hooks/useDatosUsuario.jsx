import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import {
  DatoUsuario,
  LabelInfo,
  WrapperInfo,
} from "../components/pure/login/PerfilUsuario/styles/stylesPerfilUsuario";

const useDatosUsuario = (options) => {
  //Se traen datos directamente de auth0, hasta que en la base de datos
  //tengamos la info guardada.
  const generarDatoUsuario = (datos) => {
    const { user } = useAuth0();
    return datos ? user[datos] : "Sin definir";
  };
  const generarInput = () => {
    const onChange = (e) => {
      setDataInput({ ...dataInput, [e.target.name]: e.target.value });
    };

    return (
      <>
        {options.map(({ label, valor }) => (
          <WrapperInfo key={label}>
            <LabelInfo><b>{label}:</b></LabelInfo>
            <DatoUsuario>{generarDatoUsuario(valor)}</DatoUsuario>
          </WrapperInfo>
        ))}
      </>
    );
  };
  return [generarInput];
};

export default useDatosUsuario;
