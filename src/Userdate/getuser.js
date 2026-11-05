import pool from "../app/connection";

async function getuser() {
  let querySQL = "SELECT * FROM users"
  const userDate = await pool.query(querySQL);
  return userDate;
}

export default getuser;
