const { Router } = require("express");
const { ConfiguracionTiendaTbl } = require("../../db");

const route = Router();

route.get("/", async (req, res) => {
  try {
    const images = await ConfiguracionTiendaTbl.findAll();
    res.status(200).json(images);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
module.exports = route;
