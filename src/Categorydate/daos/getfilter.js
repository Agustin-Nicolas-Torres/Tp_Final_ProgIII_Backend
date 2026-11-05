import pool from "../../app/connection.js";

async function getfilter() {
  let querySQL = "SELECT * FROM filtros";

  const filterDate = await pool.query(querySQL);
  return filterDate;
}
export default getfilter;
