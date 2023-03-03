const { Router } = require("express");
const route = Router();
const getTotalProductos = require("../../controllers/getTotalProductos")
route.get("/totalProductos", getTotalProductos)

module.exports = route;
