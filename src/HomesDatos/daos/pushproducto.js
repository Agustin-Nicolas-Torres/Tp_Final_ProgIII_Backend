import pool from "../../app/connection.js";

async function crearProductoDAO(productoData) {
  try {
    const { name, price, imagen_url, descripcion } = productoData;
    const precioNumerico = parseFloat(price);

    const querySQL = `
      INSERT INTO productos (name, price, imagen_url, descripcion, categoria_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `;

    const categoriaPorDefecto = 1;

    const resultado = await pool.query(querySQL, [
      name,
      precioNumerico,
      imagen_url,
      descripcion,
      categoriaPorDefecto,
    ]);

    return {
      id: resultado.rows[0].id,
      ...productoData,
      categoria_id: categoriaPorDefecto,
    };
  } catch (error) {
    console.error("❌ ERROR REAL EN EL DAO DE POSTGRES:", error.message);
    throw error;
  }
}

export default crearProductoDAO;
