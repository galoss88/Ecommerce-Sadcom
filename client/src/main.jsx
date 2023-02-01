import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
//CSS index
import './index.css'
//React Router
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store/index"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  </Provider>
)
