import ListaProductosProvider from "./context/ContextListaProductos";
import ContextLoginProvider from "./context/ContextLogin";
import RoutesSadcom from "./routes/routesSadcom";
import { enviarSocket } from "./utils/enviarSocket";
import { initMercadoPago } from "@mercadopago/sdk-react";
import io from "socket.io-client";
import { useEffect } from "react";
const socket = io("http://localhost:4000/api", {
  transports: ["websocket"],
  cors: {
    origin: "*",
  },
});
initMercadoPago("TEST-f48a06c8-ec54-4d25-966b-4c3ce245f313");
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
