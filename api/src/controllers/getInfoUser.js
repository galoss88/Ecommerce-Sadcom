const { PersonaTbl } = require("../db");
const getInfoUser = async (req, res) => {
  const { emailUser } = req.query;
  try {
    const usuario = await PersonaTbl.findOne({ where: { email: emailUser } });
    const { Nombre, DniCuit, Email, Domicilio, NroTel } = usuario;
    const dataUser = usuario
      ? {
          Nombre,
          DniCuit,
          Email,
          Domicilio,
          NroTel,
        }
      : "Usuario no encontrado";
    // const dataUser = await PersonaTbl.find;
    res.status(200).json(dataUser);
  } catch (e) {
    res.status(400).json({ e: e.message });
  }
};

module.exports = getInfoUser;
