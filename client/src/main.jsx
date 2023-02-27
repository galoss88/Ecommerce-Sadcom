import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//CSS index
import "./index.css";
//React Router
import { BrowserRouter } from "react-router-dom";
//AUTH0
import { Auth0Provider } from "@auth0/auth0-react";
//redux
import { Provider } from "react-redux";
import store from "./redux/store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-5gwtap86i6z84pxw.us.auth0.com"
          clientId="xSjFjns2wmPNyZsyn9ePZmh23tGP35eL"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
    ,
  </Provider>
);
