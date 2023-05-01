import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import {
  ContainerFacturaCompra,
  WrapperDownloadPdf,
} from "./style/facturaCompra";

const styles = StyleSheet.create({
  page: {
    padding: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  value: {
    flexGrow: 2,
    textAlign: "right",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
  },
  border: {
    borderBottom: "1 solid #000",
    paddingBottom: 5,
    marginBottom: 5,
  },
});

// //&datos compra
// // Nombre(pin):"Nicolas ivan gallo garcia"
// // DniCuit(pin):"38800971"
// // NroTel(pin):"2804954284"
// // Email(pin):"gallogarcianicolas@gmail.com"
// // Domicilio(pin):"13 oeste 1131"
// // totalVendidos(pin):4
// // precioTotal(pin):109
// //data empresa

const FacturaProb = () => {
  const datosCompra = useSelector((state) => state.datosCompra);
  const dataEmpresa = useSelector((state) => state.dataEmpresa);

  const { Nombre, DniCuit, Domicilio, items, Email, NroTel, precioTotal } =
    datosCompra;
  const {
    IdPersona: IdPersona_Empresa,
    Nombre: Nombre_Empresa,
    DniCuit: Dni_Empresa,
    Email: Email_Empresa,
    Domicilio: Domicilio_Empresa,
    IdClaseTel: IdClaseTel_Empresa,
    NroTel: NroTel_Empresa,
    IdLocalidad: IdLocalidad_Empresa,
    IdCondTrib: IdCondTrib_Empresa,
    IdPersonaCategoria: IdPersonaCategoria_Empresa,
    IdCajaCtaCte: IdCajaCtaCte_Empresa,
  } = dataEmpresa;
  const datosCliente = {
    nombre: Nombre,
    dni: DniCuit,
    // ciudad: "Buenos Aires",
    // codigoPostal: "1000",
    domicilio: Domicilio,
    // fecha: "01/01/2022",
    email: Email,
    items: items,
    telefono: NroTel,
  };
  //COMPLETAR
  const datosEmpresa = {
    nombre: Nombre_Empresa,
    direccion: Domicilio_Empresa,
    telefono: NroTel_Empresa,
    email: Email_Empresa,
  };
  //datos factura
  const fechaActual = new Date();
  const diaActual = fechaActual.getDate();
  const mesActual = fechaActual.getMonth() + 1; // los meses comienzan desde 0
  const anioActual = fechaActual.getFullYear();
  // const datosFactura = {
  //   tipo: "Factura A",
  //   direccion: "Calle Falsa 123",
  //   telefono: "+1 123-456-7890",
  //   email: "cliente@cliente.com",
  //   numero: "001-001-00000001",
  //   fecha: `${diaActual}/${mesActual}/${anioActual}`,
  // };

  const contenidoFactura = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          <Text
            style={styles.title}
          >{`${diaActual}/${mesActual}/${anioActual}`}</Text>
        </View>
        <View style={styles.section}>
          {/* datos de la empresa */}
          <Text style={styles.title}>{"Festilandia Cotillon"}</Text>
          <Text style={{ marginBottom: 5 }}>{datosEmpresa.nombre}</Text>

          <Text style={{ marginBottom: 5 }}>{datosEmpresa.direccion}</Text>
          <Text style={{ marginBottom: 5 }}>{datosEmpresa.telefono}</Text>
          <Text style={{ marginBottom: 5 }}>{datosEmpresa.email}</Text>

          {/* datos de la factura */}
          {/* <View style={styles.border}>
            <Text style={styles.title}>{datosFactura.tipo}</Text>
            <Text style={{ marginBottom: 5 }}>{datosFactura.direccion}</Text>
            <Text style={{ marginBottom: 5 }}>{datosFactura.telefono}</Text>
            <Text style={{ marginBottom: 5 }}>{datosFactura.email}</Text>
            <Text style={{ marginBottom: 5 }}>
              Número de factura: {datosFactura.numero}
            </Text>
            <Text style={{ marginBottom: 5 }}>Fecha: {datosFactura.fecha}</Text>
          </View> */}

          {/* datos del cliente */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>Datos del cliente</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Nombre: </Text>
              <Text style={styles.value}>{datosCliente.nombre}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Dirección: </Text>
              <Text style={styles.value}>{datosCliente.domicilio}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Email: </Text>
              <Text style={styles.value}>{datosCliente.email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Teléfono: </Text>
              <Text style={styles.value}>{datosCliente.telefono}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>DNI/CUIT: </Text>
              <Text style={styles.value}>{datosCliente.dni}</Text>
            </View>
          </View>

          {/* detalle de productos */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>Detalle de productos</Text>
            {items.map((producto) => (
              <View key={producto.id} style={styles.row}>
                <Text style={styles.label}>{producto.title}</Text>
                <Text style={styles.value}>
                  {producto.quantity} x ${producto.unit_price} = $
                  {producto.quantity * producto.unit_price}
                </Text>
              </View>
            ))}
          </View>

          {/* subtotal y total */}
          <View style={styles.section}>
            {/* <View style={styles.row}>
              <Text style={styles.label}>Subtotal:</Text>
              <Text style={styles.value}>${subtotal}</Text>
            </View> */}
            <View style={styles.row}>
              <Text style={styles.label}>Total:</Text>
              <Text style={styles.total}>${precioTotal}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <ContainerFacturaCompra>
      <WrapperDownloadPdf>
        <PDFDownloadLink document={contenidoFactura} fileName="factura.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Generando factura..."
            ) : (
              <>
                 Descargar factura 
                <i className="bi bi-download"></i>
              </>
            )
          }
        </PDFDownloadLink>
      </WrapperDownloadPdf>
    </ContainerFacturaCompra>
  );
};

export default FacturaProb;
