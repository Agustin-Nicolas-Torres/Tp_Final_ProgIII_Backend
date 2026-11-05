import pool from "../../app/connection.js";

async function deleteProductDAO(id) {
  try {
    let querySQL = "DELETE FROM productos WHERE id = $1";

    const deleteproducto = await pool.query(querySQL, [id]);

    return deleteproducto;
  } catch (error) {
    console.error("ERROR CRUCIAL EN EL DAO:", error.message);
    throw new Error(error.message);
  }
}

export default deleteProductDAO;
