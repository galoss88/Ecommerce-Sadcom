const { Router } = require("express");
const getInfoUser = require("../../controllers/getInfoUser");
const route = Router();

route.get("/", getInfoUser);
module.exports = route;
