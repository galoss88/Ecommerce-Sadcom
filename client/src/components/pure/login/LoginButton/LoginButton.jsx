import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLogin, Login } from "./stylesLoginButton";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../redux/actions";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  
  const iniciarSesion = () => {
    loginWithRedirect();

  };
  return (
    <ButtonLogin onClick={() => iniciarSesion()}>
      <AiOutlineLogin size={"1.5em"} />
      <Login>Iniciar sesión</Login>
    </ButtonLogin>
  );
};

export default LoginButton;
