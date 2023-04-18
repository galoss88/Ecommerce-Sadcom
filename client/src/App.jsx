import ListaProductosProvider from "./context/ContextListaProductos";
import ContextLoginProvider from "./context/ContextLogin";
import RoutesSadcom from "./routes/routesSadcom";
import { enviarSocket } from "./utils/enviarSocket";

import io from "socket.io-client";
import { useEffect } from "react";
const socket = io("http://localhost:4000/api", {
  transports: ["websocket"],
  cors: {
    origin: "*",
  },
});
function App() {
  
    socket.emit("saludos","hola")
 
  return (
    <>
      <ContextLoginProvider>
        <ListaProductosProvider>
          <RoutesSadcom></RoutesSadcom>
        </ListaProductosProvider>
      </ContextLoginProvider>
    </>
  );
}

export default App;
