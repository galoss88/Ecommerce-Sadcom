const { Router } = require("express");
const route = Router();
const { ConfiguracionTiendaTbl, PersonaTbl } = require("../../db");
route.get("/", async (req, res) => {
  try {
    const idEmpresa = await ConfiguracionTiendaTbl.findAll({
      attributes: ["IdEmpresa"],
    });
    const { IdEmpresa } = idEmpresa[0].dataValues;
    const obtenerDatosEmpresa = await PersonaTbl.findAll({
      where: { IdPersona: IdEmpresa },
    });
    console.log(obtenerDatosEmpresa);

    res.status(200).json(obtenerDatosEmpresa[0]);
  } catch (e) {
    res.status(400).json({ e: e.message });
  }
});
module.exports = route;
