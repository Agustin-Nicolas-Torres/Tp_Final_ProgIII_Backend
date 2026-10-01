import { describe, it, expect, vi } from "vitest";

vi.mock("../../app/connection.js", () => ({ default: { query: vi.fn() } }));

import pool from "../../app/connection.js";
import crearProductoDAO from "../../HomesDatos/daos/pushproducto.js";

describe("crearProductoDAO", () => {
  it("convierte price a número y devuelve el producto con id y categoría por defecto", async () => {
    pool.query.mockResolvedValue({ rows: [{ id: 10 }] });
    const data = { name: "Mouse", price: "1500.50", imagen_url: "http://img/m.png", descripcion: "Gamer" };

    const resultado = await crearProductoDAO(data);

    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO productos"),
      ["Mouse", 1500.5, "http://img/m.png", "Gamer", 1],
    );
    expect(resultado).toEqual({ id: 10, ...data, categoria_id: 1 });
  });
});