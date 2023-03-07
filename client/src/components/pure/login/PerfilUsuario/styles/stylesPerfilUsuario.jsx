import styled from "styled-components";

export const ContainerPerfilUsuario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  animation: perfilusuario 1s ease-in-out 0s 1 alternate none;
  @keyframes perfilusuario {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const WrapperDatosPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 50%;
  background: rgb(111, 0, 0);
`;
export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0 0 1em;
  width: 100%;
  height: 100%;

  position: relative;
`;
//BOTON modificar info
export const WrapperButtonSetInfo = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  margin-bottom: 0.4em;
`;
export const ButtonSetInfo = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  box-shadow: 0 0 3px 0 #fff;
  padding: 0.5em 0.5em;
  :hover {
    background-color: #fff;
    color: rgb(111, 0, 0);
  }
`;
//Boton cerrar Modal de perfil del usuario
export const ButtonCloseModal = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  width: 1.6em;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1.4em;
  :hover {
    background-color: #fff;
    border-radius: 5px;
    color: rgb(111, 0, 0);
  }
`;

//INPUTS!! DATOS DE USUARIO Y MODIFICACION
export const WrapperInfo = styled.div`
  display: flex;
  gap: 1em;
`;
export const LabelInfo = styled.label`
  color: white;
`;

export const InputInfo = styled.input``;
export const DatoUsuario = styled.p`
  color: #fff;
`;
