const express = require("express");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

//https
// const fs = require("fs");
// const https = require("https");
// const options = {
//   key: fs.readFileSync("./clave.key"),
//   cert: fs.readFileSync("./certificado.crt"),
// };
// //server http
const http = require("http");
const server = http.createServer(app);

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const configureSocket = require("./socketServer/configureSocket.jsx");
const path = require("path");
//settings
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
//socketio
const io = configureSocket(server);
//
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
// mercadopago.configure({
//   access_token:
//     "APP_USR-2889120682731276-041423-74a6e8604a7072d3aac50a25b581ac45-1353138790",
// });
app.use("/", routes);

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
app.use(express.static(path.join(__dirname, "client/dist")));

module.exports = { server, io };
