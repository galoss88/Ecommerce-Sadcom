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

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
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
