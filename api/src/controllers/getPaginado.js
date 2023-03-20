const { Sequelize, Op } = require("sequelize");
const { ArticuloTbl } = require("../db");

const paginado = async (page, filtro, search) => {
  const productsPerPage = 12;
  const pageCurrent = +page || 1;
  const offset = (pageCurrent - 1) * productsPerPage;
  //buscador
  const busqueda = search
    ? //si tengo search en la columna Detalle hago una busqueda con comodin con el
      //operador like [Sequelize.Op.Like] que busca coincidencias
      {
        Detalle: { [Sequelize.Op.like]: `%${search}%` },
        Venta: { [Op.gt]: 0 },
        StockTienda: { [Op.gt]: 0 },
      }
    : { Venta: { [Op.gt]: 0 }, StockTienda: { [Op.gt]: 0 } };
  try {
    const options = {
      where: busqueda,
      order: [["IdArt", "DESC"]],
      limit: productsPerPage,
      offset,
    };
    if (filtro !== "vacio") options.order = [["Venta", filtro]];
    const productosTotales = await ArticuloTbl.count();
    const productosAMostrar = await ArticuloTbl.findAll(options);
    const productosSinFiltro = await ArticuloTbl.findAll();
    const paginado = {
      productosAMostrar,
      hasNextPage: productsPerPage * pageCurrent < productosTotales,
      hasPrevPage: pageCurrent > 1,
      nextPage: pageCurrent + 1,
      prevPage: pageCurrent - 1,
      lastPage: Math.ceil(productosTotales / productsPerPage),
      productosTotales,
      productosSinFiltro,
       offset,
      // limit
    };
  
    return paginado;
 
  } catch (e) {
    return e;
  }
};
module.exports = paginado;
