
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import {
  InputInfo,
  LabelInfo,
  WrapperInfo,
} from "../components/pure/login/PerfilUsuario/styles/stylesPerfilUsuario";
import { useSelector } from "react-redux";

const useInputUsuario = (options) => {
  const { user } = useAuth0();
  //   Nombre(pin):"Nicolas ivan gallo garcia"
  // DniCuit(pin):"38800970"
  // Email(pin):"gallogarcianicolas@gmail.com"
  // Domicilio(pin):"13 oeste 1131"
  // NroTel(pin):"2804954284"
  const infoUsuarioActual = useSelector((state) => state.usuario);
  const { Nombre, DniCuit, Email, Domicilio, NroTel } = infoUsuarioActual;
  const [dataInput, setDataInput] = useState({
    name: Nombre ? Nombre : "",
    // apellido: Nombre ? Nombre : "",
    direccion: Domicilio ? Domicilio : "",
    celular: NroTel ? NroTel : "",
    dni_cuit: DniCuit ? DniCuit : "",
    email: Email ? Email : "",
  });

  const generarInput = () => {
    const onChange = (e) => {
      setDataInput({
        ...dataInput,
        [e.target.name]: e.target.value,
      });
    };

    const inputs = options.map(({ label, type, placeholder, name }) => (
      <WrapperInfo key={label}>
        <LabelInfo>
          <b>{label}:</b>
        </LabelInfo>
        <InputInfo
          type={type}
          placeholder={placeholder}
          name={name}
          value={dataInput[name]}
          onChange={(e) => onChange(e)}
        />
      </WrapperInfo>
    ));

    return inputs;
  };

  return [dataInput, generarInput];
};

export default useInputUsuario;
