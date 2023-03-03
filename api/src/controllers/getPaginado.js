const { ArticuloTbl } = require("../db");
const productsPerPage = 12;
const paginado = async (req, res) => {
  const pageCurrent = +req.params.currentPage || 1;

  const offset = (pageCurrent - 1) * productsPerPage; 



  try {
    const productosTotales = await ArticuloTbl.count();
    const productosAMostrar = await ArticuloTbl.findAll({
      where: {},
      limit: productsPerPage,
      offset
      
    });
    
    res.status(200).json({
      productosAMostrar,
      hasNextPage: productsPerPage * pageCurrent < productosTotales,
      hasPrevPage: pageCurrent > 1,
      nextPage: pageCurrent + 1,
      prevPage: pageCurrent - 1,
      lastPage: Math.ceil(productosTotales / productsPerPage),
      productosTotales,
    });
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};
module.exports = paginado;
