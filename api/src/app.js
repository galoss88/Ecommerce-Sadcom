const express = require("express");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// //server http
const http = require("http");
const server = http.createServer(app);

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const configureSocket = require("./socketServer/configureSocket.jsx");
// const { ArticuloTbl } = require("./db.js");
//settings
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

const io = configureSocket(server);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
        "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Credenciales mercado pago
mercadopago.configure({
  access_token:
    "TEST-3387753665236650-030518-e050f756d85a6ab6612370dcb5490609-281850149",
});

app.use("/", routes);
//compruebo socket

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = { server, io };
