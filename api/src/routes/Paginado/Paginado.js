const { Router } = require("express");
const route = Router();
const getPaginado = require("../../controllers/getPaginado.js");

route.get("/", getPaginado);

module.exports = route;
