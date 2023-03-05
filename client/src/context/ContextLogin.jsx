import { createContext } from "react";

const contextLogin = createContext();

const ContextLoginProvider = (props) => {
  return (
    <contextLogin.Provider value={{}}>{props.children}</contextLogin.Provider>
  );
};

export default ContextLoginProvider;
