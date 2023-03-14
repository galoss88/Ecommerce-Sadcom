export const quitarDecimales = (numero) => {
  const numeroSinDecimal = numero?.toFixed(2)
  const numeroFinal = numeroSinDecimal?.replace(/\.?0+$/, "");
  return numeroFinal;
};
