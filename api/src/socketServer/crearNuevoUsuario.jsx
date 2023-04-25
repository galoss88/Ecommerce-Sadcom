const { PersonaTbl } = require("../db");

const crearNuevoUsuario = (socket) =>
  socket.on("datosUser", async (nuevoUsuario) => {
    const { name, apellido, direccion, dni_cuit, celular, email } =
      nuevoUsuario;
    const registrarUsuario = {
      Nombre: `${name} ${apellido}`,
      DniCuit: dni_cuit,
      Email: email,
      Domicilio: direccion,
      NroTel: celular,
      IdClaseTel: 1,
      IdLocalidad: 1,
      IdCondTrib: 1,
      IdCajaCtaCte: 1,
      IdPersonaCategoria: 1,
    };
    console.log(nuevoUsuario, "usuario que llega del front");
    try {
      // Busca un usuario por email o lo crea si no existe
      const [user, created] = await PersonaTbl.findOrCreate({
        where: { email: email },
        defaults: registrarUsuario,
      });

      // Si el usuario ya existía, actualiza sus datos
      if (!created) {
        console.log("El usuario ya existía y se actualizó");
        const [numUpdated, updatedUser] = await PersonaTbl.update(
          registrarUsuario,
          {
            where: { email: email },
            returning: true,
          }
        );
      }
      //Envío al front info usuario actualizado o recién creado
      const buscarUsuario = await PersonaTbl.findOne({
        where: { Email: email },
      });

      const { Nombre, DniCuit, Email, Domicilio, NroTel } = buscarUsuario;
      const newUser = { Nombre, DniCuit, Email, Domicilio, NroTel };
      if (newUser) {
        socket.emit("sendUser", newUser);
      }
    } catch (e) {
      console.log("Error al registrar usuario");
    }
  });

module.exports = crearNuevoUsuario;
