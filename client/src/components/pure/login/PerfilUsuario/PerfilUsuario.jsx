import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import useDatosUsuario from "../../../../hooks/useDatosUsuario";
import useInputUsuario from "../../../../hooks/useInputUsuario";
import { infoUsuario } from "../../../../Models/infoUsuario";
import { optionsInput } from "../../../../Models/InputsUsuario";
import { guardarUsuario } from "../../../../redux/actions";
import {
  ButtonCloseModal,
  ButtonSetInfo,
  ContainerPerfilUsuario,
  WrapperButtonSetInfo,
  WrapperDatosPerfil,
  WrapperInputs,
} from "./styles/stylesPerfilUsuario";
import { enviarSocket } from "../../../../utils/enviarSocket";
import socket from "../../../../utils/socket/socket";
import ActualizarInfo from "./ActualizarInfo";

const PerfilUsuario = ({ ocultarPerfil }) => {
  const dispatch = useDispatch();
  const [userBaseDatos, setUserBaseDatos] = useState("");
  const [valuesInputs, Inputs] = useInputUsuario(optionsInput);
  const [DatosUsuario] = useDatosUsuario(infoUsuario);
  const [editarInfo, setEditarInfo] = useState(false);
  const editarInformacion = () => {
    if (editarInfo) {
    }
    setEditarInfo(!editarInfo);
  };

  const actualizarInformacion = () => {
    enviarSocket("datosUser", valuesInputs);
    Swal.fire({
      icon: "success",
      title: "Su información de usuario ha sido actualizada",
      text: "",
    });
    setUserBaseDatos({ ...valuesInputs });
    dispatch(guardarUsuario(userBaseDatos));
  };
  //
  const cerrarPerfilUsuario = () => {
    ocultarPerfil(false);
  };
  //recibir informacion usuario
  useEffect(() => {
    socket.on("sendUser", (user) => {
      setUserBaseDatos({ ...user });
      dispatch(guardarUsuario({ ...user }));
    });
    return () => {
      socket.off("sendUser", (user) => {
        setUserBaseDatos(user);
      });
    };
  }, [userBaseDatos]);
  //

  return (
    <ContainerPerfilUsuario>
      <WrapperDatosPerfil>
        <WrapperInputs>
          <ButtonCloseModal onClick={() => cerrarPerfilUsuario()}>
            X
          </ButtonCloseModal>
          {editarInfo ? Inputs() : <DatosUsuario />}
        </WrapperInputs>

        <WrapperButtonSetInfo>
          {editarInfo ? (
            <ActualizarInfo
              setEditarInfo={setEditarInfo}
              editarInfo={editarInfo}
              actualizarInformacion={actualizarInformacion}
            />
          ) : (
            <ButtonSetInfo onClick={() => editarInformacion()}>
              Editar informacion
            </ButtonSetInfo>
          )}
          -
        </WrapperButtonSetInfo>
      </WrapperDatosPerfil>
    </ContainerPerfilUsuario>
  );
};

export default PerfilUsuario;
