export const calcularQuantity = (productosCarrito) => {
  const cantidadDeProductos = {};
  const evaluarStock = () => {
    for (const producto of productosCarrito?.items) {
      cantidadDeProductos[producto.title] =
        (cantidadDeProductos[producto.title] || 1) +
        (cantidadDeProductos[producto.title] ? 1 : 0);
    }
    const { Nombre, DniCuit, NroTel, Email, Domicilio, Items, unit_price } =
      productosCarrito;
    const obtenerKeyValues = Object.entries(cantidadDeProductos).join("\n");

    const cantidadProductos = obtenerKeyValues
      .replace(/,(\d)/g, ": $1\n")
      .replace(/\"(\d)/g, ": $1\n");

    const productoEnviarEmail = {
      Nombre,
      DniCuit,
      NroTel,
      Email,
      Domicilio,
      cantidadProductos,
    };
    return productoEnviarEmail;
  };
  return evaluarStock();
};

//   Nombre: 'Nicolas ivan gallo garcia',
//   [0]   DniCuit: '38800970',
//   [0]   NroTel: '2804954284',
//   [0]   Email: 'gallogarcianicolas@gmail.com',
//   [0]   Domicilio: '13 oeste 1131',
//   [0]   items: [
//   [0]     {
//   [0]       id: '99',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AISLANTE TERMICO 10 MM CON ALUMINIO 1 X 20 MTRS ',
//   [0]       quantity: 1,
//   [0]       unit_price: 10
//   [0]     },
//   [0]     {
//   [0]       id: '99',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AISLANTE TERMICO 10 MM CON ALUMINIO 1 X 20 MTRS ',
//   [0]       quantity: 1,
//   [0]       unit_price: 10
//   [0]     },
//   [0]     {
//   [0]       id: '99',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AISLANTE TERMICO 10 MM CON ALUMINIO 1 X 20 MTRS ',
//   [0]       quantity: 1,
//   [0]       unit_price: 10
//   [0]     },
//   [0]     {
//   [0]       id: '99',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AISLANTE TERMICO 10 MM CON ALUMINIO 1 X 20 MTRS ',
//   [0]       quantity: 1,
//   [0]       unit_price: 10
//   [0]     },
//   [0]     {
//   [0]       id: '74',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AUTOPERFORANTE CA VULC. 14 X 2 PAGUJA"',
//   [0]       quantity: 1,
//   [0]       unit_price: 42
//   [0]     },
//   [0]     {
//   [0]       id: '74',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AUTOPERFORANTE CA VULC. 14 X 2 PAGUJA"',
//   [0]       quantity: 1,
//   [0]       unit_price: 42
//   [0]     },
//   [0]     {
//   [0]       id: '73',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AUTOPERFORANTE CA VULC. 14 X 2-12 PMECHA "',
//   [0]       quantity: 1,
//   [0]       unit_price: 47
//   [0]     },
//   [0]     {
//   [0]       id: '73',
//   [0]       category_id: '',
//   [0]       currency_id: 'ARS',
//   [0]       description: '',
//   [0]       title: 'AUTOPERFORANTE CA VULC. 14 X 2-12 PMECHA "',
//   [0]       quantity: 1,
//   [0]       unit_price: 47
//   [0]     }
//   [0]   ],
//   [0]   quantityProductos: {
//   [0]     'AISLANTE TERMICO 10 MM CON ALUMINIO 1 X 20 MTRS ': 4,
//   [0]     'AUTOPERFORANTE CA VULC. 14 X 2 PAGUJA"': 2,
//   [0]     'AUTOPERFORANTE CA VULC. 14 X 2-12 PMECHA "': 2
//   [0]   }
//   [0] }
//   [0]
