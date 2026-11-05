import filterlog from "../service/filterlog.js";

async function obtenerFiltros(req, res) {
  try {
    const filtros = await filterlog();

    return res.status(200).json(filtros.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "error en el servidor", error: error.message });
  }
}

export default obtenerFiltros;
