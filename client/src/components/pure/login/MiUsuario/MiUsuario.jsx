import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef, useState } from "react";
import MenuUsuario from "./MenuUsuario";
import { ButtonMiUsuario, ContainerMiUsuario } from "./styles/stylesMiUsuario";
import { useDispatch } from "react-redux";
import { getDataUser } from "../../../../redux/actions";

const MiUsuarioButton = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const [showConfig, setShowConfig] = useState(false);
  const menuUsuarioRef = useRef(null);
  const verMenuUsuario = () => {
    setShowConfig(!showConfig);
  };
  const handleClickOutside = (event) => {
    if (
      menuUsuarioRef.current &&
      !menuUsuarioRef.current.contains(event.target)
    ) {
      setShowConfig(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    dispatch(getDataUser(user.email));

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <ContainerMiUsuario>
      <ButtonMiUsuario onClick={() => verMenuUsuario()}>
        ¡Bienvenido/a{user && ` ${user.given_name}!`}
      </ButtonMiUsuario>
      {showConfig && (
        <div ref={menuUsuarioRef}>
          <MenuUsuario />
        </div>
      )}
    </ContainerMiUsuario>
  );
};
export default MiUsuarioButton;
