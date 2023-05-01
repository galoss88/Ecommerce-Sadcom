import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import {
  DatoUsuario,
  LabelInfo,
  WrapperInfo,
} from "../components/pure/login/PerfilUsuario/styles/stylesPerfilUsuario";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../redux/actions";
const useDatosUsuario = (options) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  //info usuario de base de datos
  const dataUser = useSelector((state) => state.usuario);
  const generarDatoUsuario = (datos) => {
    return datos ? dataUser[datos] : "Sin definir";
  };
  useEffect(() => {
    dispatch(getDataUser(user.email));
  }, []);
  const generarInput = () => {
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
