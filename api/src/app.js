const express = require("express");
const routes = require("./routes/index.js");
const app = express();
const { Server: SocketServer } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
//server http
const http = require("http");
const server = http.createServer(app);
//socketio
const io = new SocketServer(server, {
  cors: { origin: "http://localhost:5173" },
});
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
const { ArticuloTbl } = require("./db.js");
//settings
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
io.on("connection", (socket) => {
  console.log(`Cliente conectado con ID: ${socket.id}`);
  socket.on("carritoDescontarStock", async (productos) => {
    try {
      for (let producto in productos) {
        const cantidad = productos[producto];
        const productoAdescontar = await ArticuloTbl.findOne({
          where: { IdArt: producto },
        });
        if (
          productoAdescontar.StockTienda > 0 &&
          productoAdescontar.StockTienda >= cantidad
        ) {
          //tambien se puede realizar await productoAdescontar.update({where:{StockTienda: productoAdescontar.StockTienda - contador}})
          productoAdescontar.StockTienda -= cantidad;
          await productoAdescontar.save();
          socket.broadcast.emit("compraProductos", "Exito");
          return console.log("Se realizo la compra");
        }
        socket.emit("compraProductos", "Fracaso");
        console.log("No hay mas stock");
      }
    } catch (error) {
      console.log("EROR AL DESCONTAR STOCK!", error);
    }
  });
});

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

module.exports = server;
