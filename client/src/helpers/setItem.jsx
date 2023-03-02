

const setItems = (nombreParaGuardar, InfoAguardarEnLocalStorage) => {
  
    localStorage.setItem(
      nombreParaGuardar,
      JSON.stringify(InfoAguardarEnLocalStorage)
    );
 
};
export default setItems;
