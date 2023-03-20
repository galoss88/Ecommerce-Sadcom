const { Router } = require("express");
const route = Router();
const getProductos = require("../../controllers/getProductos")
route.get("/", getProductos)

module.exports = route;
