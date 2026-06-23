import gethome from "../daos/gethome.js";

async function filtrarProductos(categoriaId, filtros) {
  let listafiltros = filtros;
  if (typeof filtros === "string") {
    listafiltros = filtros.split(",");
  }

  return gethome(categoriaId, listafiltros);
}
export default filtrarProductos;
