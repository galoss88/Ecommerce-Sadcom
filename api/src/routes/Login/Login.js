const { Router } = require("express");
const comprobarLogin = require("../../controllers/comprobarLogin");
const route = Router();

route.post("/", comprobarLogin)

module.exports= route;