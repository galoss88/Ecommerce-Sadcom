//comparamos que tengan los mismos datos el usuario final de la compra, al generado al logear.
const compararDatosUsuario = (usuarioActual) => {
  const datosComprobar = ["Nombre", "DniCuit", "Email", "Domicilio", "NroTel"];
  const datosUserDb = Object.keys(usuarioActual);
  //compruebo si tienen la misma cantidad de propiedades
  if (datosComprobar.length !== datosUserDb.length) return false;
  const compararDatos = datosComprobar.every((dato) =>
    datosUserDb.includes(dato)
  );
  return compararDatos;
};
const comprobarDatosVacios = (usuarioDb) => {
  if (usuarioDb)
    for (let prop in usuarioDb) {
      if (
        usuarioDb[prop] === "" ||
        usuarioDb[prop] === null ||
        usuarioDb[prop] === undefined
      ) {
        return false;
      }
    }
  return true;
};
export const comprobarDatosUsuario = (usuarioActual) => {
  if (!comprobarDatosVacios(usuarioActual)) return false;
  return compararDatosUsuario(usuarioActual);
};
