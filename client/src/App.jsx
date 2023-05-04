import ListaProductosProvider from "./context/ContextListaProductos";
import ContextLoginProvider from "./context/ContextLogin";
import RoutesSadcom from "./routes/routesSadcom";

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
