import pool from "../../app/connection.js";

//Mueve los datos de producto de la database a service
// Filtra los datos correspoendinte con querySQL
async function gethome(categoriaId, filtrosSeleccionados) {
  let querySQL = "SELECT * FROM productos WHERE 1=1";
  let parametros = [];
  let contador = 1;

  //Concatena a la query la separacion de productos por categoria usando el id
  if (categoriaId) {
    querySQL += ` AND categoria_id = $${contador}`;
    parametros.push(categoriaId);
    contador++;
  }
  //Concatena a la query la separacion de productos por filtos de categoria usando el id
  if (filtrosSeleccionados && filtrosSeleccionados.length > 0) {
    querySQL += ` AND id IN (SELECT producto_id FROM producto_filtros WHERE valor = ANY($${contador}))`;
    parametros.push(filtrosSeleccionados);
  }

  const resultado = await pool.query(querySQL, parametros);
  return resultado;
}
export default gethome;
