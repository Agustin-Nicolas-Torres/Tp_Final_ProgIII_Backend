import deleteProductDAO from "../daos/getdeleteproducto.js";

async function eliminarProductoService(id) {
  if (!id) {
    throw new Error("ID de producto no válido");
  }

  const eliminado = await deleteProductDAO(id);

  return {
    mensaje: `Producto con ID ${id} eliminado exitosamente`,
    id: id,
  };
}
export default eliminarProductoService;
