import socket from "./socket/socket.jsx";
export const enviarSocket = (nameMensaje, contenidoMensaje) => {
  socket.emit(nameMensaje, contenidoMensaje);
};

export const recibirSocket = (eventName, callback) => {
  socket.on(eventName, (data, ack) => {
    try {
      callback(data);
      // if (ack) ack(result);
    } catch (error) {
      console.error(error);
      // if (ack) ack({ error: error.message });
    }
  });
};
