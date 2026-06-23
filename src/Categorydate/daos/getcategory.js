import pool from "../../app/connection.js";

async function getcategory() {
  let querySQL = "SELECT * FROM categoria";

  const categoryDate = await pool.query(querySQL);
  return categoryDate;
}
export default getcategory;
