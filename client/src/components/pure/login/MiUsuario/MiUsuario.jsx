import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import MenuUsuario from "./MenuUsuario";
import { ButtonMiUsuario, ContainerMiUsuario } from "./styles/stylesMiUsuario";
 
const MiUsuarioButton = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [showConfig, setShowConfig] = useState(false);
  const verMenuUsuario = () => {
    setShowConfig(!showConfig);
  };
  return (
    <ContainerMiUsuario>
      <ButtonMiUsuario onClick={() => verMenuUsuario()}>
        Bienvenido{user && ` ${user.given_name}!`}
      </ButtonMiUsuario>
      {showConfig && <MenuUsuario />}
    


    </ContainerMiUsuario>
  );
};
export default MiUsuarioButton;
