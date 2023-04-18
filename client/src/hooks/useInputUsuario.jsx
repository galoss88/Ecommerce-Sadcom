// import { useAuth0 } from "@auth0/auth0-react";
// import React, { useState } from "react";
// import {
//   InputInfo,
//   LabelInfo,
//   WrapperInfo,
// } from "../components/pure/login/PerfilUsuario/styles/stylesPerfilUsuario";

// const useInputUsuario = (options) => {
//   const [dataInput, setDataInput] = useState({
//     name: "",
//     apellido: "",
//     direccion: "",
//     dni_cuit: "",
//   });

//   const generarInput = () => {

//     const onChange = (e) => {
//       setDataInput({
//         ...dataInput,
//         [e.target.name]: e.target.value,
//       });
//     };

//     return (

//       <>
//         {options.map(({ label, type, placeholder, name }) => (
//           <WrapperInfo key={label}>
//             <LabelInfo>
//               <b>{label}:</b>
//             </LabelInfo>
//             <InputInfo
//               type={type}
//               placeholder={placeholder}
//               name={name}
//               value={dataInput[name]}
//               onChange={(e) => onChange(e)}
//             />
//           </WrapperInfo>
//         ))}
//       </>

//     );
//   };

//   return [dataInput, generarInput];
// };

// export default useInputUsuario;
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import {
  InputInfo,
  LabelInfo,
  WrapperInfo,
} from "../components/pure/login/PerfilUsuario/styles/stylesPerfilUsuario";

const useInputUsuario = (options) => {
  const { user } = useAuth0();
  const [dataInput, setDataInput] = useState({
    name: "",
    apellido: "",
    direccion: "",
    dni_cuit: "",
    celular: "",
    email: user.email,
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
