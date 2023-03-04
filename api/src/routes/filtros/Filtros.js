const { Router } = require("express");
const route = Router();
const { getFilterPrice } = require("../../controllers/getFIlters");
route.get("/", getFilterPrice);

module.exports = route;
