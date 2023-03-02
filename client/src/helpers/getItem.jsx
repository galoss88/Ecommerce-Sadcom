import React from "react";

const getItems = (nombreInfoAObtener) => {
  const guardarLocalStorage = () => {
    return JSON.parse(localStorage.getItem(nombreInfoAObtener));
  };
  const data = guardarLocalStorage();
  return data;
};
export default getItems;
