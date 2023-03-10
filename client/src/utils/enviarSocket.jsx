import socket from "./socket/socket.jsx";
export const enviarSocket = (nameMensaje, contenidoMensaje) => {
  socket.emit(nameMensaje, contenidoMensaje);
};

export const recibirSocket = (eventName, funcion) => {
  socket.on(eventName, (data, ack) => {
    try {
      funcion(data);
      // if (ack) ack(result);
    } catch (error) {
      console.error(error);
      // if (ack) ack({ error: error.message });
    }
  });
};
