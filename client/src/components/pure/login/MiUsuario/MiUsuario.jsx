import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { guardarUsuario } from "../../../../redux/actions";
import MenuUsuario from "./MenuUsuario";
import { ButtonMiUsuario, ContainerMiUsuario } from "./styles/stylesMiUsuario";

const MiUsuarioButton = () => {
  const dispatch = useDispatch();
  const { user, logout, isAuthenticated } = useAuth0();
  const [showConfig, setShowConfig] = useState(false);
  const verMenuUsuario = () => {
    setShowConfig(!showConfig);
  };
  // useEffect(() => {
  //   const { name, email } = user;
  //   dispatch(guardarUsuario({ name, email }));
  // }, []);
  return (
    <ContainerMiUsuario>
      <ButtonMiUsuario onClick={() => verMenuUsuario()}>
        ¡Bienvenido/a{user && ` ${user.given_name}!`}
      </ButtonMiUsuario>
      {showConfig && <MenuUsuario />}
    </ContainerMiUsuario>
  );
};
export default MiUsuarioButton;
