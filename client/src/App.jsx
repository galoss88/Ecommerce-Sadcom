import ListaProductosProvider from "./context/ContextListaProductos";
import ContextLoginProvider from "./context/ContextLogin";
import RoutesSadcom from "./routes/routesSadcom";

import NavBar from "./components/container/Navbar/Navbar";

function App() {
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
