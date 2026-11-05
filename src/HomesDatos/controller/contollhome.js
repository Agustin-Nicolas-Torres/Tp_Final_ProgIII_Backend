import filtrarProductos from "../service/homelog.js";

async function obtenerProductosFiltrados(req, res) {
  try {
    let categoriaId = req.query.categoriaId;
    let filtroSeleccionado = req.query.filtros;

    const productos = await filtrarProductos(categoriaId, filtroSeleccionado);

    return res.status(200).json(productos.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "error en el servidor", error: error.message });
  }
}
export default obtenerProductosFiltrados;
