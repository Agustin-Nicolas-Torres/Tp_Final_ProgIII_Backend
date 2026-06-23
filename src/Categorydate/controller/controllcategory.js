import categorylog from "../service/categorylog.js";

async function obtenerCategorias(req, res) {
  try {
    const categoria = await categorylog();

    return res.status(200).json(categoria.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "error en el servidor", error: error.message });
  }
}

export default obtenerCategorias;
