import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLogin, Login } from "./stylesLoginButton";
import { AiOutlineLogin } from "react-icons/ai"

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

  const iniciarSesion = () => {
    loginWithRedirect();
  };
  return (
    <ButtonLogin onClick={() => iniciarSesion()}>
      <AiOutlineLogin size={"1.5em"}/>
      <Login>Iniciar sesión</Login>
    </ButtonLogin>
  );
};

export default LoginButton;
