import pkg from "pg";
const { Pool } = pkg;

//Conexion a la base de datos
const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "backend_db",
});

export default pool;
