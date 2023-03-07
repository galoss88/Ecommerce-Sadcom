export const eliminarRepetidos = (lista) => {
  const listaSinRepetidos = [
    ...new Set(lista.map((elemento) => JSON.stringify(elemento))),
  ];
  const listaFinal = listaSinRepetidos.map((el) => JSON.parse(el));
  return listaFinal;
};
