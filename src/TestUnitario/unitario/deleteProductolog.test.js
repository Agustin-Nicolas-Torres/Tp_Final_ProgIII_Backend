import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../../HomesDatos/daos/getdeleteproducto.js", () => ({ default: vi.fn() }));

import deleteProductDAO from "../../HomesDatos/daos/getdeleteproducto.js";
import eliminarProductoService from "../../HomesDatos/service/deleteproductolog.js";

describe("eliminarProductoService", () => {
  beforeEach(() => vi.clearAllMocks());

  it("lanza error si no recibe id y no toca la BD", async () => {
    await expect(eliminarProductoService(undefined)).rejects.toThrow("ID de producto no válido");
    expect(deleteProductDAO).not.toHaveBeenCalled();
  });

  it("devuelve mensaje e id cuando el DAO elimina", async () => {
    deleteProductDAO.mockResolvedValue({ rowCount: 1 });

    const resultado = await eliminarProductoService(7);

    expect(deleteProductDAO).toHaveBeenCalledWith(7);
    expect(resultado).toEqual({ mensaje: "Producto con ID 7 eliminado exitosamente", id: 7 });
  });
});