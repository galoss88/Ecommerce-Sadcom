export const eliminarRepetidos = (lista) => {
  const sinRepetir = () => {
    const listaSinRepetidos = [
      ...new Set(lista?.map((elemento) => JSON.stringify(elemento))),
    ];
    const listaFinal = listaSinRepetidos?.map((el) => JSON.parse(el));
    console.log(listaFinal);
    return listaFinal;
  };
  // lista.length ? sinRepetir() : [];
  return sinRepetir();
};
