import React, { useState } from "react";
import socket from "../utils/socket/socket";

const usePrecioActualizado = (IdArt) => {
  const [actualizarPrecio, setActualizarPrecio] = useState({});

  //VER, VA EN OTRO LADO
  //   useEffect(() => {
  socket.emit("id-producto-actualizar", IdArt, () => {
    console.log("se envio ID producto");
  });
  socket.on("precio-actualizado", (mensaje) => {
    console.log("estes es el mensaje", mensaje);
    setActualizarPrecio(mensaje);
  });
  //   }, []);
  const precioActualizado = () => {};
  return [actualizarPrecio];
};

export default usePrecioActualizado;
