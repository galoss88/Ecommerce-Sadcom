import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import {
  InputInfo,
  LabelInfo,
  WrapperInfo,
} from "../components/pure/login/PerfilUsuario/stylesPerfilUsuario";

const useInputUsuario = (options) => {
  const [dataInput, setDataInput] = useState({});
  const generarInput = () => {
    const onChange = (e) => {
      setDataInput({ ...dataInput, [e.target.name]: e.target.value });
    };

    return (
      <>
        {options.map(({ label, type, placeholder }) => (
          <WrapperInfo key={label}>
            <LabelInfo>{label}</LabelInfo>
            <InputInfo
              type={type}
              placeholder={placeholder}
              name={label}
              value={dataInput.label}
              onChange={() => onChange(e)}
            />
          </WrapperInfo>
        ))}
      </>
    );
  };
  return [dataInput, generarInput];
};

export default useInputUsuario;
