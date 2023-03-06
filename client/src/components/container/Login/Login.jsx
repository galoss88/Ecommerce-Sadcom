import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import MiUsuarioButton from "../../pure/login/MiUsuario/MiUsuario";
import { ContainerLogin } from "./styleLogin";
import LoginButton from "../../pure/login/loginButton/LoginButton";


const Login = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  return (
    <ContainerLogin>
      {isAuthenticated ? <MiUsuarioButton /> : <LoginButton />}
    

    </ContainerLogin>
  );
};

export default Login;
