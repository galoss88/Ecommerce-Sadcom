import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import PerfilUsuario from "../PerfilUsuario/PerfilUsuario";
<PerfilUsuario />;
import {
  ButtonMenu,
  NavMenuUsuario,
  WrapperButtonMenu,
} from "./styles/stylesMenuUsuario";

const MenuUsuario = () => {
  const [showPerfilUsuario, setShowPerfilUsuario] = useState(false);
  const { logout } = useAuth0();
  const cerrarSesion = () => {
    logout({
      returnTo: "https://festilandiacotillon.com/",
    });
  };
  const verPerfilusuario = () => {
    setShowPerfilUsuario(true);
  };
  return (
    <NavMenuUsuario>
      <WrapperButtonMenu>
        <ButtonMenu onClick={() => verPerfilusuario()}>Mi usuario</ButtonMenu>
      </WrapperButtonMenu>
      <WrapperButtonMenu>
        <ButtonMenu onClick={() => cerrarSesion()}>Cerrar Sesión</ButtonMenu>
      </WrapperButtonMenu>
      {showPerfilUsuario && (
        <PerfilUsuario ocultarPerfil={setShowPerfilUsuario} />
      )}
    </NavMenuUsuario>
  );
};

export default MenuUsuario;
