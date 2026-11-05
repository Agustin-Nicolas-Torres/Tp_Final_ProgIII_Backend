import crearProductoDAO from "../daos/pushproducto.js";

async function crearProductoService(productoData) {
  try {
    return await crearProductoDAO(productoData);
  } catch (error) {
    console.error("Error en crearProductoService:", error.message);
    throw error;
  }
}

export default crearProductoService;
