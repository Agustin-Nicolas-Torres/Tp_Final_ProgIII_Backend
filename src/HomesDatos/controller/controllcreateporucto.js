import crearProductoService from "../service/crearproductolog.js";

async function controlAddProducto(req, res) {
  try {
    const { name, price, imagen_url, descripcion } = req.body;

    const nuevoProducto = await crearProductoService({
      name,
      price,
      imagen_url,
      descripcion,
    });

    return res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error("Error en controlAddProducto:", error.message);
    return res
      .status(500)
      .json({ error: "No se pudo agregar el producto de forma manual" });
  }
}

export default controlAddProducto;
