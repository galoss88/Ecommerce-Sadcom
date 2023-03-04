const { ArticuloTbl } = require("../db");
const getFilterPrice = async (req, res) => {
  try {
    let infoFiltrada;
    if(req.params.nameFilter === "menorAmayor"){
        infoFiltrada = await ArticuloTbl.findAll({
            order: [["Venta", "ASC"]],
          });
    }
    else if(req.params.nameFilter === "mayorAmenor"){
        infoFiltrada = await ArticuloTbl.findAll({
            order: [["Venta", "DESC"]],
          }); 
    }

    

   
    res.status(200).json(infoFiltrada);
  } catch (e) {
    res.status(404).json(e.message);
  }
};

module.exports = { getFilterPrice };
