const { ArticuloTbl } = require("../db");

const paginado = async (page, filtro) => {
  const productsPerPage = 12;
  const pageCurrent = +page || 1;

  const offset = (pageCurrent - 1) * productsPerPage;

  try {
    const options = {
      limit: productsPerPage,
      offset,
    };
    if (filtro !== "vacio") options.order = [["Venta", filtro]];
    const productosTotales = await ArticuloTbl.count();
    const productosAMostrar = await ArticuloTbl.findAll(options);
    const paginado = {
      productosAMostrar,
      hasNextPage: productsPerPage * pageCurrent < productosTotales,
      hasPrevPage: pageCurrent > 1,
      nextPage: pageCurrent + 1,
      prevPage: pageCurrent - 1,
      lastPage: Math.ceil(productosTotales / productsPerPage),
      productosTotales,
    };
    return paginado;
    // res.status(200).json({
    //   productosAMostrar,
    //   hasNextPage: productsPerPage * pageCurrent < productosTotales,
    //   hasPrevPage: pageCurrent > 1,
    //   nextPage: pageCurrent + 1,
    //   prevPage: pageCurrent - 1,
    //   lastPage: Math.ceil(productosTotales / productsPerPage),
    //   productosTotales,
    // });
  } catch (e) {
    return e;
  }
};
module.exports = paginado;
