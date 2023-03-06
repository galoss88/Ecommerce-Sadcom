import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLogin } from "./stylesLoginButton";

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

  const iniciarSesion = () => {
    loginWithRedirect();
  };
  return (
    <>
        
      <ButtonLogin onClick={() => iniciarSesion()}>Iniciar Sesion</ButtonLogin>

    </>
  );
};

export default LoginButton;
