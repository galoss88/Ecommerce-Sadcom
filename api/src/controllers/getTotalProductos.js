const { ArticuloTbl } = require("../db");
const getTotalProductos = async (req, res) => {
  try {
    const totalProductos = await ArticuloTbl.findAll();
    res.status(200).json(totalProductos);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

module.exports = getTotalProductos;
