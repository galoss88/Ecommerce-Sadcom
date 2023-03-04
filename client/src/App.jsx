import ListaProductosProvider from "./context/ContextListaProductos";
import RoutesSadcom from "./routes/routesSadcom";

function App() {
  return (
    <>
      <ListaProductosProvider>
        <RoutesSadcom></RoutesSadcom>
      </ListaProductosProvider>
    </>
  );
}

export default App;
