const { ArticuloTbl } = require("../db");
const paginado = require("./getPaginado");

const getProductos = async (req, res) => {
  const { page, filtro, search } = req.query;

  try {
    let filtrar = "vacio";
    if (filtro) {
      filtrar = filtro === "menorAmayor" ? "ASC" : "DESC";
    }

    const realizarPaginado = await paginado(page, filtrar, search);

    res.status(200).json(realizarPaginado);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

module.exports = getProductos;
