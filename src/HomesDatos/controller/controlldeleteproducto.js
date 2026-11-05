import eliminarProductoService from "../service/deleteproductolog.js";

async function eliminarProductoController(req, res) {
  const { id } = req.params;

  try {
    const resultado = await eliminarProductoService(id);

    return res.status(200).json(resultado);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "No se pudo eliminar el producto" });
  }
}
export default eliminarProductoController;
